import express from 'express';
import cors from 'cors';
import { DefaultContacts } from '../Contacts.js';
import path from 'path';

const app = express();
const port = process.env.PORT || 3004;
app.use(cors());
app.use(express.json());
const __dirname = path.resolve(path.dirname(''));
let currentContacts;

app.get(`/`, (req, res) => {
  res.sendFile('./src/page.html', { root: __dirname });
});

// - GET all contacts
app.get(`/api/contacts/`, async (req, res) => {
  if (currentContacts === undefined) {
    currentContacts = DefaultContacts;
  }

  res.json(currentContacts);
});

// - RESET all contacts
app.get(`/api/contacts/reset`, async (req, res) => {
  currentContacts = DefaultContacts;
  res.json(currentContacts);
});

// - CREATE new contact
app.post(`/api/contacts/`, async (req, res) => {
  const data = req.body;

  if (currentContacts) {
    const newContactsDatabase = [...currentContacts, { ...data }];
    currentContacts = newContactsDatabase;
    res.json(currentContacts);
  }
});

// - DELETE contact
app.delete('/api/contacts/:id', async (req, res) => {
  const id = req.params.id;
  currentContacts = currentContacts.filter((user) => Number(id) !== user.id);
  res.json(currentContacts);
});

// - UPDATE contact

app.put('/api/contacts/update/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  currentContacts = currentContacts.map((user) => {
    if (Number(id) === user.id) {
      return { ...data };
    }
    return user;
  });
  res.json(currentContacts);
});

// - CATCH ALL
app.get('*', (req, res) => {
  res.status(404).json({
    status: 'failed',
    message: 'Route does not exist',
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
