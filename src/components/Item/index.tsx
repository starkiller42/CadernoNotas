import { useState, useEffect } from "react";
import { Note } from "../../types/Note";
import * as C from './styles';

type Props = {
    onAdd: (note: Note) => void;
    list: Note[];
    loadItem?: Note
}

export const Item = ({ list, onAdd, loadItem }: Props) => {
    const [ title, setTitle ] = useState("")
    const [ category, setCategory ] = useState("")
    const [ date, setDate ] = useState("")
    const [ text, setText ] = useState("")
    
    useEffect(() => {
        if(loadItem !== undefined){
            setTitle(loadItem.title)
            setCategory(loadItem.category)
            setDate(loadItem.date)
            setText(loadItem.text)
        }
    },[loadItem])

    const handleAddNote = () => {
        console.log(loadItem)
        if((handleValidation() === true)&&(loadItem === undefined)) {
            let newNote: Note = {
                id: list.length + 1,
                title: title,
                date: date,
                category: category,
                text: text
            };
            onAdd(newNote)
            handleLimpaCampos()
        }else if((handleValidation() === true)&&(loadItem !== undefined)){
            console.log("list",list)
            console.log("loadItem",loadItem)
            list.map((note) => {
                if(note.id === loadItem.id){
                    note.title = title
                    note.category = category
                    note.date = date
                    note.text = text
                }
            })
        }else{
            alert("preencha todos os campos.")
        }
    }

    const handleLimpaCampos = () => {
        setTitle("")
        setCategory("")
        setDate("")
        setText("")
    }

    const handleValidation = () => {
        if((title !== "")&&(category !== "")&&(date !== "")&&(text !== "")) {
            return true
        }else{
            return false;
        }
    }

    return (
        <C.Container>
            <input 
                value={title}
                onChange={e=>setTitle(e.target.value)}
            />
            <div className="campos">
                <input 
                    className="cmpCategory" 
                    type="text" 
                    placeholder="Category"
                    value={category}
                    onChange={e=>setCategory(e.target.value)}
                />
                <input 
                    className="cmpDate"
                    type="date"
                    value={date}
                    onChange={e=>setDate(e.target.value)}
                />
            </div>
            <textarea 
                className="cmpTextarea"
                value={text}
                onChange={e=>setText(e.target.value)}
            />
            <button onClick={handleAddNote} >Gravar</button>
        </C.Container>
    );
}