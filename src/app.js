const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const PORT = 5050;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/', mainRoutes);

app.listen(PORT, () => console.log("Server Running on " + PORT));