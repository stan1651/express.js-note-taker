const express = require("express");
const htmlroute = require("./routes/htmlroute");
const apiroute = require("./routes/apiroute")

const PORT = process.env.port || 3001;
const app = express();

// setting up body parsing, static, and middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiroute);
app.use("/", htmlroute);


// start server on the provided port
app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)
);
