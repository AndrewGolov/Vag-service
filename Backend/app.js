require("dotenv").config();
const express = require('express')
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

const {register} = require('./controllers/user.js')
const mapUser = require('./helpers/mapUser.js');


app.use(express.json());
app.use((req, res, next) => {
	console.log('========== Входящий запрос в APP method, body ===========', req.method, req.body);
	next()
})

app.post("/api/register", async (req, res) => {
	try {
		const {user, token} = await register(req.body.login, req.body.password);
		res
			.cookie('vag_token', token, {httpOnly: true})
			.send({error: null, user: mapUser(user)})
	} catch (e) {
		console.log(e.message, e.code)
		if (e.code === 11000) {
			return res.status(409).json({
				error: 'Пользователь с таким логином уже существует',
			})
		}
		res.status(500).json({error: 'Ошибка регистрации, попробуйте позже'});
	}

})


const startServer = async () => {
	await mongoose.connect(process.env.MONGO_DB_URL)
	app.listen(PORT, () => {
		console.log(`Server started on port ${PORT}`)
	})
}
startServer().catch((err) => {
	console.log(err)
})
