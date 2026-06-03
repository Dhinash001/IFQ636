const mongoose = require('mongoose');

const speciesSchema = new mongoose.Schema({
	id: {type: Number, required: true},
	specname: {type: String, required: true}
});

const Spec = new mongoose.model("Species",speciesSchema)

const pet_1 = new Spec({
	id: 1,
	specname: "Dog"
});
const pet_2 = new Spec({
	id: 2,
	specname: "Cat"
});
const pet_3 = new Spec({
	id: 3,
	specname: "Parrot"
});
const pet_4 = new Spec({
	id: 4,
	specname: "Goldfish"
});
pet_1.save();
pet_2.save();
pet_3.save();
pet_4.save();
module.exports = mongoose.model('Species', speciesSchema);
