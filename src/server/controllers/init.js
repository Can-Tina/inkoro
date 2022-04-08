const { prisma } = require('../utils/prisma')
const axios = require('axios')

const { EXTERNAL_API } = require('../config')

const getTattoosFromAPI = async (req, res) => {
    const rawTattooData = await axios.get(EXTERNAL_API)
    const tattoos = []
    for (let i = 0; i < rawTattooData.data.images_results.length; i++) {
        tattoos[i] = rawTattooData.data.images_results[i].original
    }
    tattoos.forEach(async tattooData => {
        try {
            const createdTattoo = await prisma.tattoo.create({
                data: {
                    image: tattooData
                }
            })
        } catch (error) {
            console.log(error)
        }
    })
    res.json('Complete')
}

module.exports = {
    getTattoosFromAPI
}