import {TelegramComponent} from "assets/svg/telegram";
import {WarningComponent} from "assets/svg/warning";
import {Dispatch, SetStateAction} from "react";
import {CheckboxActiveComponent} from "assets/svg/checkboxActive";
import {CheckboxInactiveComponent} from "assets/svg/checkboxInactive";
import {ContactType} from "types/dataTypes";
import styles from './contactItem.module.scss'

type PropsType = {
    photo: string
    name: string
    notification: string
    id: number
    pin: boolean
    activeContact: number
    activeContactHandler: (id: number) => void
    isActionsActive: boolean
    selectedContactsCountChanger: (isActiveCheckbox: boolean) => void
    checked: boolean
    setContactsDataForSort: Dispatch<SetStateAction<ContactType[]>>
}

export const ContactItem = ({
                                photo,
                                name,
                                notification,
                                id,
                                pin,
                                activeContactHandler,
                                activeContact,
                                isActionsActive,
                                selectedContactsCountChanger,
                                checked,
                                setContactsDataForSort
                            }: PropsType) => {
    const checkboxActiveHandler = () => {
        selectedContactsCountChanger(checked)
        setContactsDataForSort(prevState => {
            return prevState.map(el => el.id === id ? {...el, checked: !checked} : el)
        })
    }

    const activeItemHandler = (id: number) => {
        activeContactHandler(id)
    }

    return (
        <div
            className={`${styles.contact} ${activeContact === id && styles.contactActive} ${pin && styles.contactPin}`}
            onClick={() => activeItemHandler(id)}>

            <div className={styles.contactInfo}>
                {isActionsActive &&
                    <button className={styles.contactInfoIcon} onClick={checkboxActiveHandler}>
                        {checked ? <CheckboxActiveComponent/> : <CheckboxInactiveComponent/>}
                    </button>}
                <img src={photo} alt={photo}/>
                <span>{name.split(' ').slice(0, 2).join(' ')}</span>
            </div>
            {notification === 'telegram' && <TelegramComponent/>}
            {notification === 'warning' && <WarningComponent/>}
        </div>
    );
};