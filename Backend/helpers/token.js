const JWT = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_SP_KEY


module.exports = {
	generate(data) {
		return JWT.sign(data, JWT_KEY, {expiresIn: "48h"})
	}
}
