import {ContactsBlock} from "components/main/contacts/contactsBlock/contactsBlock";
import styles from "./contacts.module.scss";
import {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";
import {LoopComponent} from "assets/svg/loop";
import {FilterComponent} from "assets/svg/filter";
import {PlusComponent} from "assets/svg/plus";
import Noname from 'assets/images/contacts/no-name.png'
import {randomInteger} from "utils/randomInteger";
import {ContactType} from "types/dataTypes";
import {contactsData} from "fakeData/contactsData";

type PropsType = {
    activeContactHandler: (id: number) => void
    activeContact: number
    contactsDataForSort: ContactType[]
    setContactsDataForSort: Dispatch<SetStateAction<ContactType[]>>
}

export const Contacts = ({
                             activeContactHandler,
                             activeContact,
                             contactsDataForSort,
                             setContactsDataForSort
                         }: PropsType) => {
    const [isSearchInputActive, setIsSearchInputActive] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const searchInputActiveHandler = () => {
        setIsSearchInputActive(!isSearchInputActive)
    }

    const sortContactsHandler = () => {
        if(contactsDataForSort[0].id === 1) {
            setContactsDataForSort(prevState => {
                return [...prevState.sort((a, b) => a.name.localeCompare(b.name, 'ru'))]
            })
        } else {
            setContactsDataForSort(prevState => {
                return [...prevState.sort((a, b) => a.id - b.id)]
            })
        }
    }

    const addContactHandler = () => {
        const newUser = {
            id: randomInteger(20, 100),
            photo: Noname,
            name: 'Новый контакт',
            notification: '',
            age: `${randomInteger(5, 20)} лет`,
            gender: 'жен',
            pin: false,
            checked: false
        }

        contactsData.unshift(newUser)

        setContactsDataForSort(prevState => {
            return [newUser, ...prevState]
        })
    }

    function searchByName(query: string) {
        const searchTerm = query.toLowerCase();

        const filteredContacts = contactsData.filter(contact => {
            const name = contact.name.toLowerCase();
            return name.includes(searchTerm);
        });

        return filteredContacts;
    }

    useEffect(() => {
        const searchResult = searchByName(value)
        setContactsDataForSort(searchResult)
    }, [value]);

    return (
        <div className={styles.contacts}>
            <div className={styles.contactsSortBtns}>
                {isSearchInputActive ?
                    <div className={styles.contactsSortBtnsActive}>
                        <span className={styles.contactsSortBtnsActiveLoop}><LoopComponent/></span>
                        <input type="search" value={value} onChange={onChangeHandler}
                               className={styles.contactsSortBtnsActiveInput}/>
                        <span className={styles.contactsSortBtnsActiveCross}
                              onClick={searchInputActiveHandler}><PlusComponent/></span>
                    </div>
                    :
                    <div className={styles.contactsSortBtnsInactive}>
                        <span onClick={searchInputActiveHandler}><LoopComponent/></span>
                        <div className={styles.contactsSortBtnsInactiveBox}>
                            <span onClick={sortContactsHandler}><FilterComponent/></span>
                            <span onClick={addContactHandler}><PlusComponent/></span>
                        </div>
                    </div>
                }
            </div>
            <ContactsBlock activeContactHandler={activeContactHandler} activeContact={activeContact}
                           contactsDataForSort={contactsDataForSort} setContactsDataForSort={setContactsDataForSort}/>
        </div>
    );
};