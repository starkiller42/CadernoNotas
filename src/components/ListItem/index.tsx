import * as C from './styles';
import { Note } from '../../types/Note';
import { useState, useEffect } from 'react';
import { NoteItem } from '../NoteItem';

type Props = {
    selecionaItem: (note: Note) => void;
    list: Note[]
}

export const ListItem = ({list, selecionaItem}: Props) => {
    const [ search, setSearch ] = useState('')
    const [ filteredList, setFilteredList ] = useState<Note[]>([]);

    useEffect(() => {
        if(search==="") {
            setFilteredList([])
            return
        }
        let newSearchList: any[] = []
        list.map((item, index) => {
            if(item.title.includes(search)){
                newSearchList.push(item)
                setFilteredList(newSearchList)
            }
        })
    },[search])

    return(
        <C.Container>
            <input type="text" placeholder="Pesquisar" onChange={e=>setSearch(e.target.value)} />
            <button>🔎</button>

            {search==="" &&
                list.map((item, index)=>(
                    <div key={index} onClick={() => selecionaItem(item)} >
                        <NoteItem note={item} />
                    </div>
                ))
            }
            {search !== "" && 
                filteredList.map((item, index)=>(
                    <div key={index} onClick={() => selecionaItem(item)} >
                        <NoteItem note={item} />
                    </div>
                ))
            }
        </C.Container>
    );
}