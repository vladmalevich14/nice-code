import first from "assets/images/first.png";
import second from "assets/images/second.png";
import third from "assets/images/third.png";
import map from "assets/images/map.png";
import fourth from "assets/images/fourth.png";
import {ConsultationsDataType, EventsDataType, NotesDataType, VideoDataType} from "types/dataTypes";

export const consultationsData: ConsultationsDataType[] = [
    {id: 1, title: 'Online-консультация', date: '15.01.2019, 12:30-13:00', confirmation: false},
    {id: 2, title: 'Online-консультация', date: '15.01.2019, 12:30-13:00', confirmation: false},
    {id: 3, title: 'Личный приём', date: '15.01.2019, 12:30-13:00', confirmation: true}
]

export const videoData: VideoDataType[] = [
    {
        id: 1,
        img: first,
        title: 'Крабик, ходьба в бок в приседе с двумя резинками Кра…',
        name: 'Астахова Е.В.',
        date: ''
    },
    {
        id: 2,
        img: second,
        title: 'Разминка для локтевого сустава',
        name: 'Астахова Е.В.',
        date: '15.01.2019 - 22.01.2019'
    },
    {
        id: 3,
        img: third,
        title: 'Разминка для локтевого суставаРазминка для локтевого..',
        name: 'Астахова Е.В.',
        date: '15.01.2019 - 22.01.2019'
    }
]

export const notesData: NotesDataType[] = [
    {
        id: 1,
        date: '20.12.2019',
        text: 'Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        img: ''
    },
    {
        id: 2,
        date: '20.12.2019',
        text: 'Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.',
        img: map
    },
]

export const eventsData: EventsDataType[] = [
    {
        id: 1,
        img: first,
        title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
        type: 'Вебинар',
        date: '9 марта 2021',
        time: '17:00'
    },
    {
        id: 2,
        img: second,
        title: 'Разминка для локтевого сустава',
        type: 'Вебинар',
        date: '9 марта 2021',
        time: '17:00'
    },
    {
        id: 3,
        img: third,
        title: 'Разминка для локтевого суставаРазминка для локтевого..',
        type: 'Вебинар',
        date: '9 марта 2021',
        time: '17:00'
    },
    {
        id: 4,
        img: fourth,
        title: 'Разминка для локтевого суставаРазминка для локтевого..',
        type: 'Вебинар',
        date: '9 марта 2021',
        time: '17:00'
    }
]