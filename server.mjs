import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleChat, handleStatus, handleTranscribe } from './lib/reformed-expositor.mjs';

const PORT = Number(process.env.PORT || 3000);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, 'public');

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '12mb' }));
app.use(express.static(publicDir));

app.get('/api/status', handleStatus);
app.post('/api/chat', handleChat);
app.post('/api/transcribe', handleTranscribe);

app.use((_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Expository Bible Teaching running at http://localhost:${PORT}`);
});
