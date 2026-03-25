import { handleChat } from '../lib/reformed-expositor.mjs';

export default async function handler(req, res) {
  return handleChat(req, res);
}
