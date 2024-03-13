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
}
