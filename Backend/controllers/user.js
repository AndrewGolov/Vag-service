const bcrypt = require('bcrypt');
const User = require("../models/User");
const JWT = require("jsonwebtoken");
const JWT_KEY = process.env.JWT_SP_KEY



async function register(login,password) {
	if(!password) {
		throw new Error('Password is empty');
	}


	const hash = await bcrypt.hash(password, 10);
	console.log('------------hash-------------',hash);

	const user = await User.create({login,password:hash});
	console.log('----------------------user_id--------------',user._id);
	const token = await JWT.sign({id:user._id}, JWT_KEY,{expiresIn:"48h"})
	console.log('------------------token--------------',token)
	return {user, token};
}

module.exports = {
	register,
}
