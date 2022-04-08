const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const user = await prisma.user.create({
        data: {
            email: 'lennihart@gmail.com',
            username: 'CanTina',
            password: '123'
        }
    })
}

seed()
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
    })
    .finally(() => process.exit(1));