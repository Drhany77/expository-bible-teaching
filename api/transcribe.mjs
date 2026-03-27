import { handleTranscribe } from '../lib/reformed-expositor.mjs';

export default async function handler(req, res) {
  return handleTranscribe(req, res);
}
