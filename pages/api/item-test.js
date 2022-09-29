// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { item } from './item-test/item.json';

export default function handler(req, res) {
  res.status(200).json(item)
}
