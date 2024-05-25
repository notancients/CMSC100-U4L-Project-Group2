const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
