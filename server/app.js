const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./auth/passport');
require('./models/User');

//const middleware = require("./middlewares");
const router = require('./routes/index');

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'hej todos' });
});
app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
