const express = require('express')
const cors = require('cors');
const route = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/boleto', route);

app.listen(port, () => {
    console.log(`App listening on ${port} port!`);
});
