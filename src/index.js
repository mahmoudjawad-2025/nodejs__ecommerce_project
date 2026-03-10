import 'dotenv/config';
import express from 'express';
import initApp from './index_router.js';

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Setup

const app = express();

initApp(app, express);

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  Server

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});