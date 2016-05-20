
/* Default - Homepage */
exports.index = function(req, res){
  res.render('index');
};

/* Other pages */
exports.pages = function(req, res){
  var pageName = req.params.page;
  res.render('pages/' + pageName);
};
