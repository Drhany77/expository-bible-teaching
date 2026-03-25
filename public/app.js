const storageKey = 'expository-bible-teaching-state';

const modes = {
  nt: {
    label: 'New Testament Expository Teaching',
    summary:
      'Conservative New Testament exposition with dispensational, premillennial emphasis.',
  },
  puritan: {
    label: 'Puritan',
    summary:
      'Calvin, Luther, the Puritans, and Edwards with a focused classic Reformed voice.',
  },
  all: {
    label: 'All Expository Teaching',
    summary:
      'Integrated conservative expository teaching across classic and modern Reformed voices.',
  },
};

const starterSets = {
  nt: [
    'Prepare a sermon outline for Romans 3:21-26.',
    'Give me the plain meaning of John 10:27-30.',
    'Build a New Testament devotion on Philippians 2:5-11.',
  ],
  puritan: [
    'Give me a Puritan-style explanation of Psalm 51.',
    'Show how Calvin and the Puritans handle assurance.',
    'Write a short family devotion on the fear of the Lord.',
  ],
  all: [
    'Prepare a sermon outline for Romans 3:21-26.',
    'Bring classic and modern Reformed voices on justification.',
    'Create a short family devotion on Psalm 23.',
  ],
};

const state = loadState();

const modeButtons = document.getElementById('modeButtons');
const audienceSelect = document.getElementById('audienceSelect');
const profileTitle = document.getElementById('profileTitle');
const profileSummary = document.getElementById('profileSummary');
const audienceBadge = document.getElementById('audienceBadge');
const messageList = document.getElementById('messageList');
const messageInput = document.getElementById('messageInput');
const chatForm = document.getElementById('chatForm');
const newConversationButton = document.getElementById('newConversationButton');
const messageTemplate = document.getElementById('messageTemplate');
const starterRow = document.querySelector('.starter-row');

audienceSelect.value = state.audience;

init();

async function init() {
  sanitizeStoredWelcomeMessage();
  renderModeButtons();
  renderStarterButtons();
  renderMessages();
  renderProfile();
  saveState();
  attachEvents();
  await refreshStatus();
}

function attachEvents() {
  audienceSelect.addEventListener('change', () => {
    state.audience = audienceSelect.value;
    saveState();
    renderProfile();
  });

  chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = messageInput.value.trim();

    if (!message) {
      return;
    }

    appendMessage({ role: 'user', content: message, citations: [] });
    messageInput.value = '';
    renderMessages();

    const history = state.messages
      .slice(0, -1)
      .map(({ role, content }) => ({ role, content }));

    setBusy(true, 'Thinking...');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: state.sessionId,
          message,
          mode: state.mode,
          audience: state.audience,
          history,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        appendMessage({
          role: 'assistant',
          content: payload.reply || payload.error || 'The request did not finish cleanly.',
          citations: [],
        });
      } else {
        appendMessage({
          role: 'assistant',
          content: payload.reply,
          citations: payload.citations || [],
        });
      }
    } catch (error) {
      appendMessage({
        role: 'assistant',
        content: 'The message could not be sent. Check that the server is running and try again.',
        citations: [],
      });
    } finally {
      setBusy(false);
      renderMessages();
      saveState();
    }
  });

  newConversationButton.addEventListener('click', () => {
    state.messages = [makeWelcomeMessage(state.mode)];
    saveState();
    renderMessages();
  });
}

function renderModeButtons() {
  modeButtons.innerHTML = '';

  Object.entries(modes).forEach(([key, mode]) => {
    const button = document.createElement('button');
    button.className = `mode-button${state.mode === key ? ' active' : ''}`;
    button.type = 'button';
    button.innerHTML = `<strong>${mode.label}</strong><span>${mode.summary}</span>`;
    button.addEventListener('click', () => {
      state.mode = key;
      updateWelcomeMessage();
      saveState();
      renderModeButtons();
      renderStarterButtons();
      renderProfile();
      renderMessages();
    });
    modeButtons.appendChild(button);
  });
}

function renderProfile() {
  profileTitle.textContent = modes[state.mode].label;
  profileSummary.textContent = profileSummaryText(state.mode, state.session);
  audienceBadge.textContent = state.audience;
}

function renderStarterButtons() {
  starterRow.innerHTML = '';

  starterSets[state.mode].forEach((starterText, index) => {
    const button = document.createElement('button');
    button.className = 'starter';
    button.type = 'button';
    button.dataset.starter = starterText;
    button.textContent = starterLabelForIndex(index);
    button.addEventListener('click', () => {
      messageInput.value = starterText;
      messageInput.focus();
    });
    starterRow.appendChild(button);
  });
}

function renderMessages() {
  messageList.innerHTML = '';

  state.messages.forEach((message) => {
    const fragment = messageTemplate.content.cloneNode(true);
    const article = fragment.querySelector('.message');
    const role = fragment.querySelector('.message-role');
    const body = fragment.querySelector('.message-body');
    const citations = fragment.querySelector('.message-citations');

    article.classList.add(message.role);
    role.textContent = message.role === 'assistant' ? 'Reformed Expositor' : 'You';
    body.textContent = message.content;

    if (message.citations?.length) {
      message.citations.forEach((citation) => {
        const chip = citation.url ? document.createElement('a') : document.createElement('span');
        chip.className = 'message-citation';
        chip.textContent = citation.label || citation.filename || citation.url;

        if (citation.url) {
          chip.href = citation.url;
          chip.target = '_blank';
          chip.rel = 'noreferrer';
        }

        citations.appendChild(chip);
      });
    }

    messageList.appendChild(fragment);
  });

  messageList.scrollTop = messageList.scrollHeight;
}

async function refreshStatus() {
  try {
    const response = await fetch(`/api/status?sessionId=${encodeURIComponent(state.sessionId)}`);
    const payload = await response.json();
    state.session = payload.session;
    state.apiConfigured = payload.apiConfigured;
    saveState();
    renderProfile();
  } catch (error) {}
}

function appendMessage(message) {
  state.messages.push(message);
}

function setBusy(isBusy, label = 'Working...') {
  const sendButton = document.getElementById('sendButton');
  sendButton.disabled = isBusy;
  sendButton.textContent = isBusy ? label : 'Send';
}

function loadState() {
  const raw = localStorage.getItem(storageKey);

  if (!raw) {
    return {
      sessionId: crypto.randomUUID(),
      mode: 'all',
      audience: 'Sunday sermon / adult class',
      messages: [makeWelcomeMessage('all')],
      session: null,
      apiConfigured: false,
    };
  }

  try {
    const parsed = JSON.parse(raw);
    const mode = parsed.mode || 'all';
    return {
      sessionId: parsed.sessionId || crypto.randomUUID(),
      mode,
      audience: parsed.audience || 'Sunday sermon / adult class',
      messages: Array.isArray(parsed.messages) && parsed.messages.length
        ? sanitizeInitialAssistantMessage(parsed.messages, mode)
        : [makeWelcomeMessage(mode)],
      session: parsed.session || null,
      apiConfigured: Boolean(parsed.apiConfigured),
    };
  } catch (error) {
    return {
      sessionId: crypto.randomUUID(),
      mode: 'all',
      audience: 'Sunday sermon / adult class',
      messages: [makeWelcomeMessage('all')],
      session: null,
      apiConfigured: false,
    };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function sanitizeStoredWelcomeMessage() {
  state.messages = sanitizeInitialAssistantMessage(state.messages, state.mode);
}

function makeWelcomeMessage(mode) {
  return {
    role: 'assistant',
    content: welcomeTextForMode(mode),
    citations: [],
  };
}

function updateWelcomeMessage() {
  if (state.messages.length !== 1 || state.messages[0].role !== 'assistant') {
    return;
  }

  state.messages[0] = makeWelcomeMessage(state.mode);
}

function welcomeTextForMode(mode) {
  const copy = {
    nt: 'New Testament mode is locked in. Ask for a verse meaning, sermon outline, lecture, or doctrinal summary and I will answer plainly and pastorally.',
    puritan:
      'Puritan mode is locked in. Ask for a text, doctrine, devotion, or pastoral issue and I will answer in that stream.',
    all: 'All Expository Teaching is locked in. Ask for a sermon, devotion, doctrinal synthesis, or simple verse meaning and I will help directly.',
  };

  return copy[mode];
}

function sanitizeInitialAssistantMessage(messages, mode) {
  if (!Array.isArray(messages) || !messages.length) {
    return [makeWelcomeMessage(mode)];
  }

  const sanitized = [...messages];
  const first = sanitized[0];

  if (
    first?.role === 'assistant' &&
    /(macarthur library|grace to you|gty|local and live online conservative sources|search calvin, luther, the puritans, and edwards online)/i.test(
      first.content || '',
    )
  ) {
    sanitized[0] = makeWelcomeMessage(mode);
  }

  return sanitized;
}

function starterLabelForIndex(index) {
  const labels = ['Sermon Outline', 'Verse Meaning', 'Devotion'];
  return labels[index] || 'Starter';
}

function profileSummaryText(mode, session) {
  const onlineText = 'Online conservative sources are searched live during the conversation when needed.';

  if (mode === 'nt') {
    return `${modes[mode].summary} ${onlineText}`;
  }

  return `${modes[mode].summary} ${onlineText}`;
}
