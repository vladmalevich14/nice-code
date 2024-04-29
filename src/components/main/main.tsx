import {Contacts} from "components/main/contacts/contacts";
import {Account} from "components/main/account/account";
import styles from './main.module.scss'
import {useState} from "react";
import {ContactType} from "types/dataTypes";
import {contactsData} from "fakeData/contactsData";

export const Main = () => {
    const [contactsDataForSort, setContactsDataForSort] = useState<ContactType[]>(contactsData);
    const [activeContact, setActiveContact] = useState<number>(1);

    const activeContactHandler = (id: number) => {
        setActiveContact(id)
    }

    return (
        <div className={styles.main}>
            <Contacts activeContactHandler={activeContactHandler} activeContact={activeContact} contactsDataForSort={contactsDataForSort} setContactsDataForSort={setContactsDataForSort}/>
            <Account activeContact={activeContact} contactsDataForSort={contactsDataForSort}/>
        </div>
    );
};