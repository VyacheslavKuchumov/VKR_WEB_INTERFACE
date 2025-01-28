const { Okved } = require('../models/okved')


// get all okveds
const getOkveds = async (req, res) => {
    try {
        const okveds = await Okved.findAll()
        res.status(200).json(okveds)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


// create okved
const createOkved = async (req, res) => {
    try {
        const { okved_name, code } = req.body
        const okved = await Okved.create({ okved_name, code })
        res.status(201).json(okved)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// update okved
const updateOkved = async (req, res) => {
    try {
        const { okved_id, okved_name, code } = req.body
        const okved = await Okved.findByPk(okved_id)
        if (!okved) return res.status(404).send({ message: 'Okved not found' })
        await okved.update({ okved_name, code })
        return res.status(200).send({ message: 'updated' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// delete okved
const deleteOkved = async (req, res) => {
    try {
        const okved_id = req.params?.id
        const okved = await Okved.findByPk(okved_id)
        if (!okved) return res.status(404).send({ message: 'Okved not found' })
        await okved.destroy()
        return res.status(200).send({ message: 'deleted' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}


module.exports = {
    getOkveds,
    createOkved,
    updateOkved,
    deleteOkved
}
