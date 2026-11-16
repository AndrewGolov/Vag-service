require("dotenv").config();
const express = require('express')
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const cookieParser = require("cookie-parser");

const auth = require('./middleware/authenticated')
const mapUser = require('./helpers/mapUser.js');
const mapCars = require('./helpers/mapCars.js');
const {register,login} = require('./controllers/user.js')
const {createCar, getCars} = require("./controllers/car");

app.use(express.json());
app.use(cookieParser())
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
app.post("/api/login", async (req, res) => {
	try {
		const {user, token} = await login(req.body.login, req.body.password);
		res
			.cookie('vag_token', token, {httpOnly: true})
			.send({error: null, user: mapUser(user)})
	} catch (e) {
		console.log(e.message, e.code)
		res.status(500).json({error: e.message});
	}
})
app.post("/api/logout", async (req, res) => {
	res.cookie('vag_token', '', {httpOnly: true}).send({error: null})
})
app.get('/api/account',auth, async (req, res) => {
	res.send({error:null, user:mapUser(req.user)})
})
app.get('/api/account/my-garage',auth, async (req, res) => {
	try{
		const carsDb = await getCars(req.user.id);
		res.send({error:null, cars:mapCars(carsDb)})
	} catch (e) {
		console.log(e.message, e.code)
		res.status(500).json({error: 'Ошибка сервера'});
	}
})

app.post('/api/my-garage/add', auth, async (req, res) => {
	try{
		const newCar = await createCar(req.user.id,req.body)
		res.send({error: null, carData: newCar})
	} catch (e) {
		console.log(e.message, e.code)
		res.status(500).json({error: 'Не удалось добавить автомобиль в гараже'});
	}
})
app.post('/api/my-garage/:id ', auth, async (req, res) => {
	try{
		const newCar = await createCar(req.user.id,req.body)
		res.send({error: null, carData: newCar})
	} catch (e) {
		console.log(e.message, e.code)
		res.status(500).json({error: 'Не удалось добавить автомобиль в гараже'});
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
