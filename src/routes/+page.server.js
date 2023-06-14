import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(email) {
    await prisma.mail.create({
        data: {
            email: email
        }
    })
}

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        if(data === undefined || data == {}) return;

        const email = data.get('email');

        main(email)
        .then(async () => {
            await prisma.$disconnect();
        })
        .catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
        })

    }
}