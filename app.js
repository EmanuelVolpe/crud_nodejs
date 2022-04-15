require('dotenv').config()
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./router'));
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`SERVER corriendo en http://localhost:${port}`);
});
