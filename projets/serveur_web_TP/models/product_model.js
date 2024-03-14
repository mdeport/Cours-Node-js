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
    return database.query("SELECT * FROM Products");
  }

  static findById(id) {
    return database.query("SELECT * FROM Products WHERE Products.id = ?", [id]);
  }

  static fetchAllPanier() {
    return database.query("SELECT * FROM Panier");
  }

  save() {
    return database.execute("INSERT INTO Panier (id, name, price, description, image) VALUES (?, ?, ?, ?, ?)", [null, this.name, this.price, this.description, this.imageUrl]);
  }

  static delete(productId) {
    return database.execute("DELETE FROM Panier WHERE id = ?", [productId]);
  }

  update() {
    return database.execute("UPDATE Products SET name = ?, price = ?, description = ?, image = ? WHERE id = ?", [this.name, this.price, this.description, this.imageUrl, this.id]);
  }
}
