import {DotsComponent} from "assets/svg/dots";
import styles from "components/main/account/dropDown/dropDown.module.scss";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";

type PropsType = {
    id: number
    deleteItem: (id: number) => void
    setIsEditMode: Dispatch<SetStateAction<boolean>>
}

export const DropDown = ({deleteItem, id, setIsEditMode}: PropsType) => {
    const [active, setActive] = useState<boolean>(false);
    const dropDownRef = useRef<any>(null)

    const deleteItemHandler = () => {
        deleteItem(id)
    }

    const editItemHandler = () => {
        setIsEditMode(true)
    }

    const changeActiveStatusHandler = () => {
        setActive(!active)
    }

    const onBlurHandler = (e: any) => {
        if(dropDownRef.current && !dropDownRef.current.contains(e.target)) {
            setActive(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', onBlurHandler)
        return ()=> {
            document.removeEventListener('mousedown', onBlurHandler)
        }
    }, [])

    return (
        <div className={`${styles.dropDown} ${active && styles.dropDownActive}`} onClick={changeActiveStatusHandler}
             onBlur={onBlurHandler} ref={dropDownRef}>
            <DotsComponent/>
            {active && <div className={styles.dropDownList}>
                <div className={styles.dropDownListItem} onClick={editItemHandler}>
                    Изменить
                </div>
                <div className={styles.dropDownListItem} onClick={deleteItemHandler}>
                    Удалить
                </div>
            </div>}
        </div>
    );
};