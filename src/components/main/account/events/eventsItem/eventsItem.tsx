import styles from './eventsItem.module.scss'
import video from "assets/svg/video.svg";
import clock from "assets/svg/time.svg";
import calendar from "assets/svg/calendar.svg";

type PropsType = {
    time: string
    title: string
    type: string
    date?: string
    img: string
}

export const EventsItem = ({time, date, title, img, type}: PropsType) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemInfoContainer}>
                <div className={styles.itemInfoContainerImg}>
                    <img src={img} alt="event cover"/>
                </div>
                <div className={styles.itemInfoContainerData}>
                    <h5>{title}</h5>
                    <div className={styles.itemInfoContainerDataInfo}>
                        <div><span><img src={video} alt={video}/></span><span>{type}</span></div>
                        <div><span className={styles.itemInfoContainerDataInfoSVG}><img src={calendar} alt={calendar}/></span><span>{date}</span></div>
                        <div><span><img src={clock} alt={clock}/></span><span>{time}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};