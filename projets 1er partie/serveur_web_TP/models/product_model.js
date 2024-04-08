import database from "../util/database.js";

export class Product {
  constructor(id, name, price, description, imageUrl) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  static fetchAll() {
    return database.query("SELECT * FROM Products"); // fait une requête SQL pour récupérer tous les produits
  }

  static findById(id) {
    return database.query("SELECT * FROM Products WHERE Products.id = ?", [id]); // fait une requête SQL pour récupérer un produit par son id
  }

  static fetchAllPanier() {
    return database.query("SELECT * FROM Panier"); // fait une requête SQL pour récupérer tous les produits du panier
  }

  save() {
    return database.execute("INSERT INTO Panier (id, name, price, description, image) VALUES (?, ?, ?, ?, ?)", [null, this.name, this.price, this.description, this.imageUrl]); // fait une requête SQL pour ajouter un produit au panier
  }

  static delete(productId) {
    return database.execute("DELETE FROM Panier WHERE id = ?", [productId]); // fait une requête SQL pour supprimer un produit du panier
  }

  update() {
    return database.execute("UPDATE Products SET name = ?, price = ?, description = ? WHERE id = ?", [this.name, this.price, this.description, this.id]); // fait une requête SQL pour mettre à jour un produit
  }
}
