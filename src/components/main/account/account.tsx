import styles from "./account.module.scss";
import {useState} from "react";
import {DropDown} from "components/main/account/dropDown/dropDown";
import {Notes} from "components/main/account/notes/notes";
import {Consultations} from "components/main/account/сonsultations/consultations";
import {Video} from "components/main/account/video/video";
import {Events} from "components/main/account/events/events";
import {PlusComponent} from "assets/svg/plus";
import {consultationsData, eventsData, notesData, videoData} from "fakeData/accountsData";
import {randomInteger} from "utils/randomInteger";
import {ConsultationsDataType, ContactType, EventsDataType, NotesDataType, VideoDataType} from "types/dataTypes";
import third from "assets/images/third.png";
import fourth from "assets/images/fourth.png";
import {contactsData} from "fakeData/contactsData";

type PropsType = {
    activeContact: number
    contactsDataForSort: ContactType[]
}

export const Account = ({activeContact, contactsDataForSort}: PropsType) => {
    const [switcherValue, setSwitcherValue] = useState<string>('Заметки');
    const [notesDataForAdding, setNotesDataForAdding] = useState<NotesDataType[]>(notesData);
    const [consultationsDataForAdding, setConsultationsDataForAdding] = useState<ConsultationsDataType[]>(consultationsData);
    const [videoDataForAdding, setVideoDataForAdding] = useState<VideoDataType[]>(videoData);
    const [eventsDataForAdding, setEventsDataForAdding] = useState<EventsDataType[]>(eventsData);

    const changeSwitcherHandler = (itemName: string) => {
        setSwitcherValue(itemName)
    }

    const addItemHandler = () => {
        if (switcherValue === 'Заметки') {
            setNotesDataForAdding(prevState => {
                return [{
                    id: randomInteger(100, 1000),
                    date: '01.05.2024',
                    text: 'Важно не переусердствовать в выполнении ЛФК,  следует заниматься согласно разработанной врачом программе.',
                    img: ''
                }, ...prevState]
            })
        }
        if (switcherValue === 'Консультации') {
            setConsultationsDataForAdding(prevState => {
                return [{id: randomInteger(100, 1000), title: 'Личный приём', date: '01.05.2024, 14:15-15:00', confirmation: false}, ...prevState]
            })
        }
        if (switcherValue === 'Видео') {
            setVideoDataForAdding(prevState => {
                return [{
                    id: randomInteger(100, 1000),
                    img: third,
                    title: 'Упражнения при болях в суставах',
                    name: 'Малахов Г.П.',
                    date: '01.05.2024 - 14.05.2024'
                }, ...prevState]
            })
        }
        if (switcherValue === 'Мероприятия') {
            setEventsDataForAdding(prevState => {
                return [{
                    id: randomInteger(100, 1000),
                    img: fourth,
                    title: 'Физкультура для суставов',
                    type: 'Вебинар',
                    date: '1 мая 2024',
                    time: '14:00'
                }, ...prevState]
            })
        }
    }

    const userArr = contactsDataForSort.filter(el => el.id === activeContact)
    const user = userArr.length ? userArr : contactsData.filter(el => el.id === activeContact)

    return (
        <div className={styles.account}>
            <div className={styles.accountUserInfo}>
                <div className={styles.accountUserInfoBlock}>
                    <img src={user[0].photo} alt="User"/>
                    <div>
                        <h5>{user[0].name}</h5>
                        <span>{user[0].age}, {user[0].gender}</span>
                    </div>
                </div>
                <DropDown id={0} deleteItem={()=>{}} setIsEditMode={()=>{}}/>
            </div>

            <div className={styles.accountSwitcher}>
                <div className={styles.accountSwitcherContainer}>
                    <button
                        className={`${styles.accountSwitcherItem} ${switcherValue === 'Заметки' && styles.accountSwitcherActiveItem}`}
                        onClick={() => changeSwitcherHandler('Заметки')}
                    >
                        Заметки
                    </button>
                    <span className={styles.accountSwitcherSeparator}></span>
                    <button
                        className={`${styles.accountSwitcherItem} ${switcherValue === 'Консультации' && styles.accountSwitcherActiveItem}`}
                        onClick={() => changeSwitcherHandler('Консультации')}
                    >Консультации
                    </button>
                    <span className={styles.accountSwitcherSeparator}></span>
                    <button
                        className={`${styles.accountSwitcherItem} ${switcherValue === 'Видео' && styles.accountSwitcherActiveItem}`}
                        onClick={() => changeSwitcherHandler('Видео')}
                    >Видео
                    </button>
                    <span className={styles.accountSwitcherSeparator}></span>
                    <button
                        className={`${styles.accountSwitcherItem} ${switcherValue === 'Мероприятия' && styles.accountSwitcherActiveItem}`}
                        onClick={() => changeSwitcherHandler('Мероприятия')}
                    >Мероприятия
                    </button>
                </div>
                <button className={styles.accountSwitcherAddBtn} onClick={addItemHandler}>
                    {switcherValue === 'Заметки' && 'Новая заметка'}
                    {switcherValue === 'Консультации' && 'Записать'}
                    {(switcherValue === 'Видео' || switcherValue === 'Мероприятия') && 'Рекомендовать'}
                    <div>
                        <PlusComponent/>
                    </div>
                </button>
            </div>

            <div className={styles.accountWall}>
                {switcherValue === 'Заметки' && <Notes notesDataForAdding={notesDataForAdding} setNotesDataForAdding={setNotesDataForAdding}/>}
                {switcherValue === 'Консультации' && <Consultations consultationsDataForAdding={consultationsDataForAdding}/>}
                {switcherValue === 'Видео' && <Video videoDataForAdding={videoDataForAdding}/>}
                {switcherValue === 'Мероприятия' && <Events eventsDataForAdding={eventsDataForAdding}/>}
            </div>
        </div>
    );
};