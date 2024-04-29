import styles from './videoItem.module.scss'

type PropsType = {
    name: string
    title: string
    date?: string
    img: any
}

export const VideoItem = ({name, date, title, img}: PropsType) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemInfoContainer}>
                <div className={styles.itemInfoContainerVideo}>
                    <img src={img} alt="video cover"/>
                </div>
                <div className={styles.itemInfoContainerData}>
                    <h5>{title}</h5>
                    <span>{name}</span>
                </div>
            </div>

            {date && <div className={styles.itemDate}>{date}</div>}

        </div>
    );
};