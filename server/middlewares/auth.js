const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  console.log(token);

  if (!token) res.status(401).json({ message: "Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT);
    console.log(decoded);

    req.user = decoded.id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = auth;
