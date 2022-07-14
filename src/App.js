import NotesList from './components/NotesList';
import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

const App = () =>{
  const[notes,setNotes] = useState([
  {
    id:nanoid(),
    text:"1st note!",
    date:"5/23/2022"
  },
  {
    id:nanoid(),
    text:"2nd note!",
    date:"6/15/2022"
  },
  {
    id: nanoid(),
    text: 'New note!',
    date: '7/12/2022',
  },
]);

const [searchText, setSearchText] = useState('');

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data', JSON.stringify(notes)
  );
}, [notes]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString(),
  };
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
};

  return(
  <div className="container">
    <Header />
    <Search handleSearchNote={setSearchText}/>
    <NotesList 
        notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}

    /> 
  </div>
  )
};

export default App;