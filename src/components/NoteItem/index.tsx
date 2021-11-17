import * as C from "./styles";
import { Note } from '../../types/Note';

type Props = {
    note: Note
}

export const NoteItem = ({note}: Props) => {

    return(
        <C.Container>
            <p>{note.title}</p>
        </C.Container>
    );
}