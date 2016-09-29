var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={};
    'article-one':{
    title:'article One',
    heading:'article One',
    date:'05 sep, 2016',
    content: `
                 <p>
                    This is the content of my first article. This is the content of my first article. This is the content of my first article.
                    This is the content of my first article. This is the content of my first article. This is the content of my first article.
                </p>
                <p>
                    This is the content of my first article. This is the content of my first article. This is the content of my first article.
                    This is the content of my first article. This is the content of my first article. This is the content of my first article.
                </p>
                <p>
                    This is the content of my first article. This is the content of my first article. This is the content of my first article.
                    This is the content of my first article. This is the content of my first article. This is the content of my first article.
                </p>`
                };
    'article-two':{
        title:'article two',
        heading:'article two',
        date:'10 sep, 2016',    
        content: `
                 <p>
                    This is the content of my second article. 
                </p>
                 };   
                 
    'article-three':{
        title:'article three',
        heading:'article three',
        date:'15 sep, 2016',    
        content: `
                 <p>
                    This is the content of my third article. 
                </p>
                 }; 
    
function createTemplate(data){
    var title= data.title;
    var date= data.date;
    var heading= data.heading;
    var content= data.content;
}
var htmlTemplate={
    <title> 
        ${title}
    </title>
    <h3>
        ${heading}
    </h3>
    <div>
        ${date}
    </div>
    <div>
        ${content}
    </div>
}
return htmlTemplate;
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req, res){
    res.send(createTemplate(article One));
});

app.get('/article-two',function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
