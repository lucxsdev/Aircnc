const Spot = require('../models/Spot');
const User = require('../models/User');


module.exports = {

    async index(req, res){
        const { tech } = req.query;

        const index = await Spot.find({ techs: tech });

        return res.json(index);
    },

    async store(req, res){

        const { filename } = req.file;
        const { company, price, techs } = req.body;
        const { user_id } = req.headers;

        const Users = await User.findById(user_id);

        if(!Users){
           return res.status(400).json({ error: "User doe not exist!" });
        }

        const store = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company: company,
            price: price,
            techs: techs.split(',').map(tech => tech.trim()),

        })

        return res.json(store);
    }
}