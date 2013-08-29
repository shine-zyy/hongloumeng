
/*
 * GET home page.
 */
module.exports=function(app){
    app.get("/",function(req,res){
        res.render('index',{title: '红楼梦' });
    });
    app.get("/chapter/:id",function(req,res){
        var  id=req.params.id;
        if(id<0 || id>120){
            res.render('404');
            return;
        }
        res.render('chapter/'+req.params.id,{title: '红楼梦' });
    });
    app.get("/person/direct",function(req,res){
        res.render('person/direct',{title:'红楼梦'})
    });
    app.get("/person/:id",function(req,res){
        var  id=req.params.id;
        if(id<0 || id>7){
            res.render('404');
            return;
        }
        var  id=req.params.id;
        res.render('person/'+id,{title: '红楼梦' });
    });
    app.get("/aboutme",function(req,res){
        res.render('aboutme',{title: '红楼梦' });
    });
    app.get("/direct",function(req,res){
        res.render('direct',{title: '红楼梦' });
    });
}
