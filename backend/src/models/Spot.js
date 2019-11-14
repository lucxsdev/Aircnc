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
    },

    techs: [{
        type: String,
        required: true
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON:{
        virtuals: true
    },
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);