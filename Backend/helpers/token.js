const JWT = require("jsonwebtoken");
const sign = process.env.JWT_SP_KEY

module.exports = {
	generate(data) {
		return JWT.sign(data, sign, {expiresIn: "48h"})
	},
	verify(token) {
		return JWT.verify(token, sign)
	}
}
