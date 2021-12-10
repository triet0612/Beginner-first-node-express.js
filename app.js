const express = require('express');
const cors = require('cors');
//create an express app
const app = express();
//Routers
const blogRoutes = require('./routes/blogRoutes');
const indexRoutes = require('./routes/indexRoutes');
//Set view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//listen on port 3233
app.listen(process.env.PORT || 2031);

app.use(cors());

//static files
app.use(express.static('./public/'));
app.use(express.urlencoded({extended: true}));
//listen to get requests

//routes
app.use(indexRoutes);

app.use('/blog',blogRoutes);

/* app.use mean use the function inside is used if being called, since 
js read code from top to down, the 404 will be the final */
app.use((req, res) => {
    res.status(404).render('404');
});
