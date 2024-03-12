import Express from "express";
import ejs from "ejs";

const app = Express();

app.get("/", (req, res) => {
  let template = ejs.compile(str, options);
  template(data);
  // => Rendered HTML string

  ejs.render(str, data, options);
  // => Rendered HTML string

  ejs.renderFile(filename, data, options, function (err, str) {
    // str => Rendered HTML string
  });
});

app.post("/message", (req, res) => {
  if (req.body.message) {
    return res.status(400).send("Bad request");
  }
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
}); //le serveur écoute sur le port 3000 : http://localhost:3000/
