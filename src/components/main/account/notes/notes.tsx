import {Post} from "components/main/account/notes/post/post";
import styles from "./notes.module.scss";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {NotesDataType} from "types/dataTypes";
import {Dispatch, SetStateAction} from "react";

type PropsType = {
    notesDataForAdding: NotesDataType[]
    setNotesDataForAdding: Dispatch<SetStateAction<NotesDataType[]>>
}

export const Notes = ({notesDataForAdding, setNotesDataForAdding}: PropsType) => {
    const [listRef] = useAutoAnimate<HTMLDivElement>()

    const deleteItem = (id: number) => {
        setNotesDataForAdding(prevState => {
            return prevState.filter(el=> el.id !== id)
        })
    }

    return (
        <div className={styles.notes} ref={listRef}>
            {notesDataForAdding.map(el => {
                return <Post key={el.id} id={el.id} date={el.date} text={el.text} img={el.img} deleteItem={deleteItem} setNotesDataForAdding={setNotesDataForAdding}/>
            })}
        </div>
    );
};