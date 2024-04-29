import {contactsData} from "fakeData/contactsData";
import {ContactItem} from "components/main/contacts/contactsBlock/contactItem/contactItem";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {CheckboxActiveComponent} from "assets/svg/checkboxActive";
import {CheckboxInactiveComponent} from "assets/svg/checkboxInactive";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {ContactType} from "types/dataTypes";
import styles from './contactsBlock.module.scss'

type PropsType = {
    activeContactHandler: (id: number) => void
    activeContact: number
    contactsDataForSort: ContactType[]
    setContactsDataForSort: Dispatch<SetStateAction<ContactType[]>>
}

export const ContactsBlock = ({activeContactHandler, activeContact, contactsDataForSort, setContactsDataForSort}: PropsType) => {
    const [isActionsActive, setIsActionsActive] = useState<boolean>(false);
    const [isActiveCheckbox, setIsActiveCheckbox] = useState<boolean>(false);
    const [selectedContactsCount, setSelectedContactsCount] = useState<number>(0);
    const [listRef] = useAutoAnimate<HTMLDivElement>()

    const actionsActiveHandler = () => {
        setIsActionsActive(!isActionsActive)
    }

    const checkboxActiveHandler = () => {
        setIsActiveCheckbox(!isActiveCheckbox)
        selectedAllContacts()
        setContactsDataForSort(prevState => {
            return prevState.map(el => ({...el, checked: !isActiveCheckbox}))
        })
    }

    const selectedContactsCountChanger = (isActiveCheckbox: boolean) => {
        if (isActiveCheckbox) {
            setSelectedContactsCount(prevState => prevState - 1)
        } else {
            setSelectedContactsCount(prevState => prevState + 1)
        }
    }

    const selectedAllContacts = () => {
        if (selectedContactsCount < contactsDataForSort.length) {
            setSelectedContactsCount(contactsDataForSort.length)
        } else {
            setSelectedContactsCount(0)
        }
    }

    useEffect(() => {
        if (selectedContactsCount < contactsDataForSort.length) {
            setIsActiveCheckbox(false)
        } else {
            setIsActiveCheckbox(true)
        }
    }, [selectedContactsCount]);

    return (
        <div className={styles.contactsBlock}>
            <div className={styles.contactsBlockActions}>
                {isActionsActive ?
                    <div className={styles.contactsBlockActionsCheckbox}>
                        <button className={styles.contactsBlockActionsCheckboxIcon} onClick={checkboxActiveHandler}>
                            {isActiveCheckbox ? <CheckboxActiveComponent/> : <CheckboxInactiveComponent/>}
                        </button>
                        <button>Все</button>
                        <span
                            className={`${styles.contactsBlockActionsCount} ${styles.contactsBlockActionsCountActive}`}>{selectedContactsCount}</span>
                    </div>
                    :
                    <span className={styles.contactsBlockActionsCount}>{contactsData.length}</span>}
                {isActionsActive ?
                    <div className={styles.contactsBlockActionsBtns}>
                        <button>Действия</button>
                        <button onClick={actionsActiveHandler}>Отменить</button>
                    </div>
                    :
                    <button className={styles.contactsBlockActionsBtnSelect}
                            onClick={actionsActiveHandler}>Выбрать</button>}
            </div>

            <div className={styles.contactsBlockItems} ref={listRef}>
                {contactsDataForSort.map(el => {
                    return <ContactItem key={el.id} id={el.id} photo={el.photo} name={el.name} pin={el.pin} checked={el.checked}
                                        notification={el.notification} activeContactHandler={activeContactHandler}
                                        activeContact={activeContact} isActionsActive={isActionsActive}
                                        selectedContactsCountChanger={selectedContactsCountChanger}
                                        setContactsDataForSort={setContactsDataForSort}
                    />
                })}
            </div>
        </div>
    );
};
