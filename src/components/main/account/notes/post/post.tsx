import styles from "components/main/account/notes/post/post.module.scss";
import {DropDown} from "components/main/account/dropDown/dropDown";
import map from "assets/images/map.png";
import {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from "react";
import {NotesDataType} from "types/dataTypes";

type PropsType = {
    id: number
    date?: string
    text: string
    img: string
    deleteItem: (id: number) => void
    setNotesDataForAdding: Dispatch<SetStateAction<NotesDataType[]>>
}

export const Post = ({date, text, img, deleteItem, id, setNotesDataForAdding}: PropsType) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [value, setValue] = useState<string>(text);

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            setIsEditMode(false)
            setNotesDataForAdding(prevState => {
                return prevState.map(el => el.id === id ? {...el, text: value} : el)
            })
        }
    }

    const onBlurHandler = () => {
        setIsEditMode(false)
        setNotesDataForAdding(prevState => {
            return prevState.map(el => el.id === id ? {...el, text: value} : el)
        })
    }

    return (
        <div className={styles.post}>
            {isEditMode ?
                <div>
                    <span>{date}</span>
                    <textarea value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}
                              className={styles.postInput} onBlur={onBlurHandler}/>
                    {img && <div>
                        <img src={map} alt="map" className={styles.postImg}/>
                    </div>}
                </div>
                :
                <div>
                    <span>{date}</span>
                    {text}
                    {img && <div>
                        <img src={map} alt="map" className={styles.postImg}/>
                    </div>}
                </div>
            }

            <DropDown deleteItem={deleteItem} id={id} setIsEditMode={setIsEditMode}/>
        </div>
    );
};