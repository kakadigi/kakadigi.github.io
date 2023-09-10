import data from '../../assets/json/reviews.json';

export default function handler(req, res) {
  res.status(200).json(data);
}
