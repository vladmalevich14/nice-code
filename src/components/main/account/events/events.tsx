import styles from "./video.module.scss";
import {VideoItem} from "components/main/account/video/videoItem/videoItem";
import first from '../../../../assets/images/first.png'
import second from '../../../../assets/images/second.png'
import third from '../../../../assets/images/third.png'

export const Video = () => {

    const videoData = [
        {img: first, title: 'Крабик, ходьба в бок в приседе с двумя резинками Кра…', name: 'Астахова Е.В.', date: ''},
        {img: second, title: 'Разминка для локтевого сустава', name: 'Астахова Е.В.', date: '15.01.2019 - 22.01.2019'},
        {
            img: third,
            title: 'Разминка для локтевого суставаРазминка для локтевого..',
            name: 'Астахова Е.В.',
            date: '15.01.2019 - 22.01.2019'
        }
    ]

    return (
        <div className={styles.video}>
            {videoData.map(el => {
                return <VideoItem title={el.title} name={el.name} date={el.date} img={el.img}/>
            })}
        </div>
    );
};