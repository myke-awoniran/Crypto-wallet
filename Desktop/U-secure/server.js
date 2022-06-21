/**github.com/Awoniran // myke_Awoniran */
require('dotenv').config();
const http = require('http');
const App = require('./App');

const server = http.createServer(App);
const port = process.env.PORT || 5000;
const connectDB = require('./src/database/connections/db_connection');

async function startServer() {
   await connectDB();
   server.listen(port, () => {
      console.log(
         `${process.env.NODE_ENV} ::: U-secure server running on port ${port}`
      );
   });
}

startServer();

// ignore node modules
