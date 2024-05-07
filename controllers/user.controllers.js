import data from "../data.js"

export function getCurrentUser(req, res) {
    try {
        res.status(200).json(data["current-user"]);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
