const Models = require("../models/adminModel.js");

exports.getArticleAll = async function(req, res){
   let m=await Models.getAll();
   res.render('adminArticles', {data:m});
};

exports.getArticle = async function(req, res){
   let m=await Models.getOne(req.params.idArticle);
   res.render('adminArticlesShow', {data:m});
};
//1 ошибка
exports.addArticle = async function(req, res){
   await Models.addOne(req.body);
   let m=await Models.getAll();
   res.render('adminArticles', {data:m});
};
//2 ошибка
exports.editArtiсle = async function(req, res){
   await Models.editOne(req.body);
   let m=await Models.getOne(req.body.idArtcile);
   res.render('adminArticlesShow', {data:m});
};
//3 ошибка
exports.deleteArtiсle = async function(req, res){
  await Models.deleteOne();
  let m=await Models.getAll();
  res.render('adminArticles', {data:m});
};