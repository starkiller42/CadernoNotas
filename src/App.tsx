import * as C from './App.styles';
import { useState } from 'react'
import { ListItem } from './components/ListItem';
import { Item } from './components/Item';
import { Note } from "./types/Note";
import { notes } from "./data/Notes";

const App = () => {
  const [ list, setList ] = useState(notes);
  const [ selectedNote, setSelectedNote ] = useState<Note>()
  
  const handleAddItem = (note: Note) => {
    let newList = [...list];
    newList.push(note);
    setList(newList);
    setSelectedNote(undefined)
  }

  const handleLoadItem = (note: Note) => {
    setSelectedNote(note)
  }

  return(
    <C.Container>
      <C.Header>Caderno de notas</C.Header>
      <C.SideBar>
        <ListItem list={list} selecionaItem={handleLoadItem} />
      </C.SideBar>
      <C.Main>
        {selectedNote === undefined &&
          <Item list={list} onAdd={handleAddItem} />
        }
        {selectedNote !== undefined &&
          <Item list={list} onAdd={handleAddItem} loadItem={selectedNote} />
        }
      </C.Main>
    </C.Container>
  );
}

export default App;