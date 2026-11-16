const Car = require('../models/Car')
const User = require('../models/User')

async function createCar(userId,carData) {
	const newCar = await Car.create({...carData, owner:userId});
	await User.findByIdAndUpdate(userId,{$push:{cars:newCar}});
	await newCar.populate('owner')
	return newCar
}

async function getCars(userId) {
	return await Car.find({owner:userId});
}

async function editCar(id,data) {
	return await Car.findByIdAndUpdate(id,data,{returnDocument:'after'});
}

module.exports = {
	createCar,editCar,getCars
}
