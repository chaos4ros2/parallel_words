import { words } from '../../data/toeic'

export default function handler(req, res) {
    res.status(200).json(words)
}