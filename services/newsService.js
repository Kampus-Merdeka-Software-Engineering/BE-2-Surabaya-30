const prisma = require('../config/prisma');
async function getAllNews () {
    try{const news = await prisma.news.findMany();
        return news;
    }   catch(err) {
        throw err;
    }
};

async function createNews (news) {
    try{
        return await prisma.news.create(news);
    }   catch(err) {
        throw err;
    }
};
module.exports = {
    getAllNews,
    createNews
};