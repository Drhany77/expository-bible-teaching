# Expository Bible Teaching

Web app for conservative, expository Bible study and teaching.

The visible site identity is:

- `Expository Bible Teaching`

Conversation modes:

- `New Testament Expository Teaching`: MacArthur-focused.
- `Puritan`: Calvin, Luther, Puritan, Edwards stream.
- `All Expository Teaching`: integrated conservative expository profile.

## Run

1. Install dependencies:

```bash
npm install
```

2. Add your API key:

```bash
cp .env.example .env
# then place your real key in .env
```

3. Start the app:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000)

## Deploy

This app is ready for a Vercel deployment.

- `vercel.json` is included at the repo root.
- Set `OPENAI_API_KEY` in Vercel.
- Set `OPENAI_MACARTHUR_VECTOR_STORE_ID` to your existing uploaded MacArthur vector store.
- Set `OPENAI_MACARTHUR_FILE_COUNT=27` unless you change that source collection later.
- Health check path: `/api/status`

If you want a stable production deployment, import the GitHub repo into Vercel and add the environment variables above.
