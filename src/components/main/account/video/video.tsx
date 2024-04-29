import {VideoItem} from "components/main/account/video/videoItem/videoItem";
import styles from "./video.module.scss";
import {VideoDataType} from "types/dataTypes";
import {useAutoAnimate} from "@formkit/auto-animate/react";

type PropsType = {
    videoDataForAdding: VideoDataType[]
}

export const Video = ({videoDataForAdding}: PropsType) => {
    const [listRef] = useAutoAnimate<HTMLDivElement>()
    return (
        <div className={styles.video} ref={listRef}>
            {videoDataForAdding.map(el => {
                return <VideoItem key={el.id} title={el.title} name={el.name} date={el.date} img={el.img}/>
            })}
        </div>
    );
};