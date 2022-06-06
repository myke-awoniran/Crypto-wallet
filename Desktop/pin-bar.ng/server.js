require('dotenv').config();
const App = require('./App');

const port = process.env.PORT;
function startServer(app) {
   app.listen(port, () => console.log(`app running on port ${port}`));
}
startServer(App);
