import express from 'express';

import bodyParser from 'body-parser';

import cors from 'cors';


const app = express(); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

const PORT = 8080; 


// API Keys
const API_KEYS = {
  geonames: 'shadowenO4',
  weatherbit: '467725c69eb744ceafa81c00b8f0a55c',
  pixabay: '49042350-06ebdbdfbfdd05f84191284e8'
};

app.listen(PORT, () => { 

  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
