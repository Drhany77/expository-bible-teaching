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

This app is ready for a Render web service deployment.

- `render.yaml` is included at the repo root.
- Set `OPENAI_API_KEY` in Render during the initial deploy.
- The app stores its session metadata in `DATA_DIR`, which the Render blueprint mounts on a persistent disk.
- Health check path: `/api/status`

If you want a stable production deployment, connect this project repo to Render and apply the included blueprint.
