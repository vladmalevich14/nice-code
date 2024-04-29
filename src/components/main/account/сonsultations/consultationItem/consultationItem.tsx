import styles from './consultationItem.module.scss'
import {CameraComponent} from "assets/svg/camera";
import {ReceptionComponent} from "assets/svg/reception";

type PropsType = {
    title: string
    date: string
    confirmation?: boolean
}

export const ConsultationItem = ({title, date, confirmation = false}: PropsType) => {
    return (
        <div className={styles.item}>
            <div className={styles.itemInfoContainer}>
                <div className={styles.itemInfoContainerIcon}>
                    {title === 'Online-консультация' && <CameraComponent />}
                    {title === 'Личный приём' && <ReceptionComponent />}
                </div>
                <div className={styles.itemInfoContainerData}>
                    <h5>{title}</h5>
                    <span>{date}</span>
                </div>
            </div>

            {confirmation && <div className={styles.itemConfirmation}>Не подтверждена</div>}

        </div>
    );
};