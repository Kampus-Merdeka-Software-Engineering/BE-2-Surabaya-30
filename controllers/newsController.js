const newsService = require('../services/newsService');

async function getAllNews(req, res) {
    const news = await newsService.getAllNews();
    res.json(news);
};

async function createNews(req, res) {
    const newsData = req.body;
    
    const createdNews = await newsService.createNews(newsData);
    res.status(201).json(createdNews);
}

module.exports = {
    getAllNews,
    createNews
};
