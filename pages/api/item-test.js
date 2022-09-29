// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { itemTest } from './item-test/ItemTest.json';

export default function handler(req, res) {
  res.status(200).json(itemTest)
}
