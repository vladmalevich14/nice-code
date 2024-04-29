import styles from './contactItem.module.scss'
import {TelegramComponent} from "assets/svg/telegram";
import {WarningComponent} from "assets/svg/warning";
import {useEffect, useState} from "react";
import {CheckboxActiveComponent} from "assets/svg/checkboxActive";
import {CheckboxInactiveComponent} from "assets/svg/checkboxInactive";

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
    isActiveCheckboxStatus: boolean
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
                                isActiveCheckboxStatus
                            }: PropsType) => {
    const [isActiveCheckbox, setIsActiveCheckbox] = useState<boolean>(false);

    const checkboxActiveHandler = () => {
        setIsActiveCheckbox(!isActiveCheckbox)
        selectedContactsCountChanger(isActiveCheckbox)
    }

    const activeItemHandler = (id: number) => {
        activeContactHandler(id)
    }

    useEffect(() => {
        if (isActiveCheckboxStatus) {
            setIsActiveCheckbox(true)
        } else {
            setIsActiveCheckbox(false)
        }
    }, [isActiveCheckboxStatus]);

    return (
        <div
            className={`${styles.contact} ${activeContact === id && styles.contactActive} ${pin && styles.contactPin}`}
            onClick={() => activeItemHandler(id)}>

            <div className={styles.contactInfo}>
                {isActionsActive &&
                    <button className={styles.contactInfoIcon} onClick={checkboxActiveHandler}>
                        {isActiveCheckbox ? <CheckboxActiveComponent/> : <CheckboxInactiveComponent/>}
                    </button>}
                <img src={photo} alt={photo}/>
                <span>{name.split(' ').slice(0, 2).join(' ')}</span>
            </div>
            {notification === 'telegram' && <TelegramComponent/>}
            {notification === 'warning' && <WarningComponent/>}
        </div>
    );
};