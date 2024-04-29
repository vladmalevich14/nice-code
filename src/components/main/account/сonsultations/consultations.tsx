import {ConsultationItem} from "components/main/account/сonsultations/consultationItem/consultationItem";
import styles from "./consultations.module.scss";
import {ConsultationsDataType} from "types/dataTypes";
import {useAutoAnimate} from "@formkit/auto-animate/react";

type PropsType = {
    consultationsDataForAdding: ConsultationsDataType[]
}

export const Consultations = ({consultationsDataForAdding}: PropsType) => {
    const [listRef] = useAutoAnimate<HTMLDivElement>()
    return (
        <div className={styles.consultations} ref={listRef}>
            {consultationsDataForAdding.map(el => {
                return <ConsultationItem key={el.id} title={el.title} date={el.date} confirmation={el.confirmation}/>
            })}
        </div>
    );
};