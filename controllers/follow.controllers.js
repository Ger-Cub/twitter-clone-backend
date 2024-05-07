import data from "../data.js"

export function getFollow(req, res) {
    try {
        res.status(200).json(data["follow"]);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
