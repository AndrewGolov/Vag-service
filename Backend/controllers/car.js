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

async function editCar(userId,id,data) {
	return await Car.findOneAndReplace({_id:id, owner:userId}, {...data, owner:userId},{returnDocument:'after'}).populate('owner')
}

async function deleteCar(id) {
	await Car.findOneAndDelete({_id:id}).populate('owner')
}

module.exports = {
	createCar,editCar,getCars,deleteCar
}
