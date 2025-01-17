const jwt = require("jsonwebtoken");
const util = require("util");

const asyncverify = util.promisify(jwt.verify);

const authorizeUpdateUser = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    console.log({ token });
    if (!token) {
      return res.status(401).send("Access denied. Enter the admin token.");
    }

    const decoded = await asyncverify(token, "jwtPrivateKey");
    console.log({ decoded });
    if (decoded.isAdmin) {
      req.user = decoded;
      next();
    } else if (decoded._id === req.params.id) {
      req.user = decoded;
      next();
    } else {
      res
        .status(403)
        .send(
          "Access denied. admin only authorized to update this user's data."
        );
      console.log(decoded.isAdmin);
    }
  } catch (error) {
    console.error(error.message);
    if (error.name === "JsonWebTokenError") {
      res.status(400).send("Invalid token.");
    } else {
      res.status(500).send("Error 404!!.");
    }
  }
};

module.exports = authorizeUpdateUser;
