const knex = require('../database/dbConfig');

module.exports = {
    async store(req, res){
        console.log(req.body);

        const { usuario_id, camiseta_id, gostou} = req.body;

        try{
            const novo = await knex("likes").insert({ 
                usuario_id,
                camiseta_id,
                gostou
            });
            res.status(201).json({id: novo[0]});
        }catch(erro){
            res.status(400).json({erro: erro.message})
        }
    },

    async pesq(req, res){
        const {usuario_id, camiseta_id} = req.params;

        const like = await knex('likes').where('usuario_id', usuario_id).andWhere('camiseta_id', camiseta_id)
        res.status(200).json(like);
    }
}