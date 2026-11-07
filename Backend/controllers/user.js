const bcrypt = require('bcrypt');
const User = require("../models/User");
const { generate } = require("../helpers/token");

async function register(login, password) {
	if (!password) {
		throw new Error('Password is empty');
	}
	const hash = await bcrypt.hash(password, 10);
	const user = await User.create({login, password: hash});
	const token = await generate({id: user._id});
	return {user, token};
}

async function login(login, password) {
	const user = await User.findOne({login});
	if (!user) {
		throw new Error('Такой пользователь не найден');
	}
	const isPasswordMatch = await bcrypt.compare(password, user.password);
	if (!isPasswordMatch) {
		throw new Error('Неправильный пароль');
	}
	const token = await generate({id: user._id});
	return {user, token};
}

module.exports = {
	register,
	login
}
