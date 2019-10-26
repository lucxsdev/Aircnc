const mongoose = require('mongoose');


const SpotSchema = new mongoose.Schema({
    
    thumbnail: {
        type: String,
        required: true
    },

    company: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    techs: [{
        type: String,
        required: true
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


module.exports = mongoose.model('Spot', SpotSchema);