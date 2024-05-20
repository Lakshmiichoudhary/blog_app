const express = require('express');
const app = express();
const blogRoute = require('./routes/blogs');
const sequelize = require('./utils/database');

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());


app.use('/', blogRoute);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Listening on port 3000");
    });
}).catch(err => {
    console.log(err);
});