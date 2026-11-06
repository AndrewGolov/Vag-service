require("dotenv").config();
const express = require('express')
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

app.use((req,res,next)=>{
	console.log('========== Входящий запрос в APP ===========',req);
	next()
})


const startServer = async() => {
	await mongoose.connect(process.env.MONGO_DB_URL)
	app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})
}
startServer().catch((err) => {console.log(err)})
