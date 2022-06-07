const { Schema, model } = require('mongoose');

const homesSchema = Schema({
    //
    houseType: {
        type: String,
        trim: true,
        require: [true, 'specify a house type, e.g bungalow'],
    },

    toilet: {
        type: Number,
    },

    price: {
        type: Number,
        require: [true, 'provide price for the house'],
    },

    region: {
        type: String,
        require: [true, 'kindly provide a region'],
    },
    photo: {
        type: String,
        require: [true, 'kindly provide a photo'],
    },
});

module.exports = model('Homes', homesSchema);
