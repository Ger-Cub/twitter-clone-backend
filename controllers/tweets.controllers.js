import data from "../data.js"

export function getTweets(req, res) {
    try {
        res.status(200).json(data["tweets"]);

    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export async function postTweets(req, res) {
    try {
      let id = Math.round(Math.random() * 100000).toString();
      data["tweets"].push({ id, ...req.body });
      res.json({ id, ...req.body });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la création de la publication' });
    }
  }
  
  // Fonction pour générer un ID unique
  function generateUniqueId() {
    // Implémentez votre logique de génération d'ID unique ici
    return Math.random().toString(36).substring(2, 8);
  }
  
  
