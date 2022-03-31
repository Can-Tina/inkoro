const { prisma } = require('@prisma/client')
const axios = require('axios')

const { EXTERNAL_API } = require('../config')


const getTattoosFromAPI = async () => {
    const rawTattooData = await axios.get(EXTERNAL_API)
    const tattoos = []
    for (let i = 0; i < rawTattooData.images_results.length; i++) {
        tattoos[i].image = rawTattooData.images_results[i].original
    }
    tattoos.forEach(async tattoo => {
        const createdTattoo = await prisma.tattoo.create({
            data: {
                image: tattoo.image,
                styles: {
                    connectOrCreate: 'Black and White'
                }
            }
        })
        console.log(createdTattoo)
    })
}

module.exports = {
    getTattoosFromAPI
}