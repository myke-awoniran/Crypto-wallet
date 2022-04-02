const app = require('./app.js');
const http = require('http');
const dotenv = require('dotenv').config({ path: './secret/config.env' });
const server = http.createServer(app);

const port = process.env.PORT;

function startServer(instance) {
  instance.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
startServer(server);
