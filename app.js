const chalk = require('chalk');
const yargs = require('yargs');
const { addNote, removeNote, readNote, listNotes } = require('./commands.js')
 
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    addNote({ title: argv.title, body: argv.body })
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    removeNote(argv.title)
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    readNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    listNotes();
  },
});

yargs.parse();
