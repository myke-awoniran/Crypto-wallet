require('dotenv').config();
const App = require('./App');
const connectDB = require('./src/database/connection');

const port = process.env.PORT;

async function startServer(app) {
    await connectDB();
    app.listen(port, () => console.log(`App running on port ${port}`));
}
startServer(App);
