import {Contacts} from "components/main/contacts/contacts";
import {Account} from "components/main/account/account";
import styles from './main.module.scss'
import {useState} from "react";

export const Main = () => {
    const [activeContact, setActiveContact] = useState<number>(1);

    const activeContactHandler = (id: number) => {
        setActiveContact(id)
    }

    return (
        <div className={styles.main}>
            <Contacts activeContactHandler={activeContactHandler} activeContact={activeContact}/>
            <Account activeContact={activeContact}/>
        </div>
    );
};