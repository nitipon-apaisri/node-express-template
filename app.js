import express from 'express';
import router from './routes/index.js';
import logger from './middleware/logger.js';
const app = express();
const port = process.env.PORT || 3000;

app.use(router);
app.use(logger);

app.listen(port, () => { console.log(`Server is running on port ${port}`) } );