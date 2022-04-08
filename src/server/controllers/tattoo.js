const { prisma } = require('../utils/prisma');

const getAllTattoos = async (req, res) => {
    const tattoos = await prisma.tattoo.findMany({
        include: {
            users: true
        }
    })
    res.json({ data: tattoos });
}

const getUserTattoos = async (req, res) => {
    const userId = parseInt(req.params.id)
    const tattoos = await prisma.tattoo.findMany({
        where: {
            users: {
                some: {
                    id: userId
                }
            }
        }
    })
    res.json({ data: tattoos });
}

const connectUserAndTattoo = async (req, res) => {
    const tattooId = parseInt(req.params.tattoo)
    const userId = parseInt(req.params.user)
    const tattoo = await prisma.tattoo.update({
        where: {
            id: tattooId
        },
        data: {
            users: {
                connect: {
                    id: userId
                }
            }
        }
    })
    res.json({ data: tattoo });
}

const disconnectUserAndTattoo = async (req, res) => {
    const tattooId = parseInt(req.params.tattoo)
    const userId = parseInt(req.params.user)
    const tattoo = await prisma.tattoo.update({
        where: {
            id: tattooId
        },
        data: {
            users: {
                disconnect: {
                    id: userId
                }
            }
        }
    })
    res.json({ data: tattoo });
}

module.exports = {
    getAllTattoos,
    getUserTattoos,
    connectUserAndTattoo,
    disconnectUserAndTattoo
}