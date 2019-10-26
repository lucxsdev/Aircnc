const Booking = require('../models/Booking');

module.exports={

    async store(req, res){

        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date }    = req.body;

        const store = await Booking.create({
            date: date,
            user: user_id,
            spot: spot_id
        });

        await store.populate('user').populate('spot').execPopulate();

        return res.json(store);
    }
}