// Set environment variables
require("dotenv").config();
PORT = process.env.PORT || 4000;

const addRequestId = require("express-request-id")();
const express = require("express");
const app = express();

app.use(addRequestId);

const grokReceiver = require("./routes/grok-receiver");

app.use(express.static("dist"));
app.use(express.json());

app.use("/api", grokReceiver);

app.listen(PORT, () => {
	console.log(`App listening on ${PORT}`);
});
