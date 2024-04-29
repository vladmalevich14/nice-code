import {ContactsBlock} from "components/main/contacts/contactsBlock/contactsBlock";
import styles from "./contacts.module.scss";
import {ChangeEvent, useEffect, useState} from "react";
import {LoopComponent} from "assets/svg/loop";
import {FilterComponent} from "assets/svg/filter";
import {PlusComponent} from "assets/svg/plus";
import {contactsData} from "fakeData/contactsData";
import Noname from 'assets/images/contacts/no-name.png'
import {randomInteger} from "utils/randomInteger";
import {ContactType} from "types/dataTypes";

type PropsType = {
    activeContactHandler: (id: number) => void
    activeContact: number
}

export const Contacts = ({activeContactHandler, activeContact}: PropsType) => {
    const [isSearchInputActive, setIsSearchInputActive] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const [contactsDataForSort, setContactsDataForSort] = useState<ContactType[]>(contactsData);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const searchInputActiveHandler = () => {
        setIsSearchInputActive(!isSearchInputActive)
    }

    const sortContactsHandler = () => {
        if(contactsDataForSort[contactsDataForSort.length-1].id !== 1) {
            setContactsDataForSort(prevState => {
                return [...prevState.sort((a, b) => b.id - a.id)]
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
            pin: false
        }

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
                           contactsDataForSort={contactsDataForSort}/>
        </div>
    );
};