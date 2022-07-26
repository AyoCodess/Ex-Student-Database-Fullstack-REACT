import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { Contacts, DefaultContacts } from './Contacts.js';

const app = express();
const port = process.env.PORT || 3004;
app.use(cors());
// app.use(express.json());
let currentContacts = DefaultContacts;

// - landing page + meta data
app.get(`/`, (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head> 
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta property="og:title" content="AyoCodes Fake Data API"/>
    <meta property="og:description" content="Create, Read, Update and Delete user accounts" />
    <meta name="description" content="Create, Read, Update and Delete user accounts" >
    <meta property="og:image" content="https://i.imgur.com/tOo7SgK.png" />
    <meta property="og:url" content="https://www.ayoadesanya.com" />
    <meta property="og:site_name" content="AyoCodes Fake Data API />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta name="twitter:image" content="https://i.imgur.com/tOo7SgK.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="AyoCodes Fake Data API />
    <meta
      name="twitter:description"
      content="Create, Read, Update and Delete user accounts"
    />
    <meta name="twitter:site" content="@ayo__codes" />
    <meta name="twitter:creator" content="@ayo__codes" />
  </head>
  <body> 

    <div style='padding: 2rem;'>
    <h1>AyoCodes Fake Data API</h1>
    <p>Create, Read, Update and Delete user accounts</p>
    <h3 style='display:inline-block;'>Original Api Documentation:</h3>  
    <a href="https://musicbrainz.org/doc/MusicBrainz_API" target="_blank" rel="noopener">Musicbrainz API</a>
    <h4>How to use:</h4> 
    <p>Copy and paste the test endpoints at the end of the url - I.e /cc197bad-dc9c-440d-a5b5-d52ba2e14234 - Use any artist Id from the MusicBrainz API.</p>

    <hr />
    <h2>Test Endpoints:</h2>
    <h3>Coldplay:</h3>
    <ul>
    <li><b>Id: </b> cc197bad-dc9c-440d-a5b5-d52ba2e14234</li>
    </ul>
    <h3>SnoopDogg:</h3>
    <ul>
    <li><b>Id: </b>f90e8b26-9e52-4669-a5c9-e28529c47894</li>

    </ul>
    <h3>Pink Floyd</h3>
    <ul>
    <li><b>Id: </b>83d91898-7763-47d7-b03b-b92132375c47</li>

    </ul>
    <hr />
    <span>Created by:</span>

    <a href="https://www.ayoadesanya.com/" target="_blank" rel="noopener">Ayo Adesanya</a>
    
    </div>
  </body>
  </html>`);
});

// - GET all contacts
app.get(`/api/contacts/`, async (req, res) => {
  res.json(currentContacts);
});

// - RESET all contacts
app.get(`/api/contacts/reset`, async (req, res) => {
  try {
    currentContacts = DefaultContacts;
    res.json(currentContacts);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'failed',
      message: 'We couldn’t get any data',
    });
  }
});

// - CREATE new contact
app.post(`/api/contacts/`, async (req, res) => {
  console.log('received request...');
  console.log(req);
  const data = req.body;

  const newContactsDatabase = [
    ...DefaultContacts,
    { id: DefaultContacts.length + 1, ...data },
  ];

  currentContacts = newContactsDatabase;

  res.json(currentContacts);

  console.log('the data', data);
});

app.get('*', (req, res) => {
  res.status(404).json({
    status: 'failed',
    message: 'Route does not exist',
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
