const jwt = require("jsonwebtoken");
SECRET_KEY = process.env.JWT_SECRET_KEY || "secretkeysecretkey";

const fetchUser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a token" });
  }
  try {
    const data = jwt.verify(token, SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchUser;
