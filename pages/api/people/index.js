import { people } from '../../../data'

export default function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=590');
  res.status(200).json(people)
}
