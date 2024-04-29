import {EventsItem} from "components/main/account/events/eventsItem/eventsItem";
import styles from "./events.module.scss";
import {EventsDataType} from "types/dataTypes";
import {useAutoAnimate} from "@formkit/auto-animate/react";

type PropsType = {
    eventsDataForAdding: EventsDataType[]
}

export const Events = ({eventsDataForAdding}: PropsType) => {
    const [listRef] = useAutoAnimate<HTMLDivElement>()
    return (
        <div className={styles.events} ref={listRef}>
            {eventsDataForAdding.map(el => {
                return <EventsItem key={el.id} title={el.title} type={el.type} date={el.date} img={el.img}
                                   time={el.time}/>
            })}
        </div>
    );
};