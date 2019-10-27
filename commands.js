const fs = require('fs');
const chalk = require('chalk');

const addNote = (note) => {
  const notes = loadNotes();

  if (notes.find(n => n.title === note.title)) {
    return console.log(chalk.red.inverse('Note title already exists!'));
  } else {
    console.log(chalk.green.inverse('New note added!'));
    notes.push(note);
    saveNotes(notes);
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter(note => note.title !== title);

  if (notes.length === newNotes.length) {
    console.log(chalk.red.inverse('Note not found!'));
  } else {
    console.log(chalk.green.inverse('Note removed!'));
    saveNotes(newNotes);
  }

};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find(note => note.title === title) 

  if (noteToRead) {
    console.log(chalk.blue.inverse(noteToRead.title))
    console.log(noteToRead.body)
  } else {
    console.log(chalk.red.inverse('Title not found!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if ( !notes.length ) {
    return console.log(chalk.red.inverse('No notes available!'));
  }

  console.log(chalk.green.inverse('Notes: '));
  notes.map((note, index) => {
    console.log(`${index}: `, chalk.blue(note.title))
  })
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('./notes.json').toString());
  } catch (e) {
    return [];
  };
};

const saveNotes = (notes) => {
  fs.writeFileSync('./notes.json', JSON.stringify(notes));
};

module.exports = {
  addNote,
  removeNote,
  readNote,
  listNotes,
};

