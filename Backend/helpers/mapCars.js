module.exports = (carsDb) =>
	carsDb.map(car => ({id:car._id,brand:car.brand, model:car.model, year:car.year, vin:car.vin, regNum:car.regNum, bodyColor:car.bodyColor, additions:car.additions}));

