import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  database: "CoursNodeTp",
  user: "root",
  password: "example",
});

export default connection;
