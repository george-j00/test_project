const express = require("express");
const app = express();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send("Access denied");
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send(" No token");
  }

  try {
    const decoded = jwt.verify(token, "your_secret_key");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
};

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.post("/validate-token", verifyToken, (req, res) => {
  res.status(200).send("Token is valid.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
