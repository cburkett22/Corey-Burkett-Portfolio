const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './public/assets')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html-routes")(app);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});