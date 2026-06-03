const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
	name: {type: String, required: true},
	description: String,
	photo: String,
	breed: Number,
	species: {type: Number, required: true},
});

const Pet = new mongoose.model("Pet",petSchema)

const pet_1 = new Pet({
	name: "Rover",
	description: "Short description",
	photo: "dog.png",
	breed: 1,
	species: 1
});

pet_1.save();
module.exports = mongoose.model('Pet', petSchema);
