const User = require('../models/User');

module.exports = {

    async store(req, res){
        
        const { email } = req.body;    // usando desestruturacao, buscando a palavra email dentro do body 
        
        let user = await User.findOne({ email: email });

        if(!user){
            user = await User.create( { email: email } );
        }

        return res.json(user);
    },

    async show(req, res){

        const id = req.params.id;

        const show = await User.findById( { id });

        return res.json(show);
    },

    async index(req, res){

        const index = await User.find();

        return res.json(index);
    }
}