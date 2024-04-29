import Kravtsova from '../assets/images/contacts/kravtsova-alexandra.png'
import Rozhkov from '../assets/images/contacts/rozhkov-denis.png'
import Dibrova from '../assets/images/contacts/dibrova-alevtina.png'
import Ivanov from '../assets/images/contacts/ivanov-dmitry.png'
import Fors from '../assets/images/contacts/fors-alexandr.png'
import Ahmedov from '../assets/images/contacts/ahmedov-artur.png'
import Blazhevich from '../assets/images/contacts/blazhevich-igor.png'
import Valieva from '../assets/images/contacts/valieva-rufina.png'
import Voloshina from '../assets/images/contacts/voloshina-viktoriya.png'
import Noname from 'assets/images/contacts/no-name.png'
import {ContactType} from "types/dataTypes";

export const contactsData: ContactType[] = [
    {id: 1, photo: Kravtsova, name: 'Кравцова Александра Семёновна', notification: 'telegram', age: '24 года', gender: 'жен', pin: true},
    {id: 2, photo: Rozhkov, name: 'Рожков Денис Петрович', notification: '', age: '28 лет', gender: 'муж', pin: false },
    {id: 3, photo: Noname, name: 'Кравченко Александр Семёнович', notification: 'warning', age: '31 год', gender: 'муж', pin: false },
    {id: 4, photo: Dibrova, name: 'Диброва Алевтина Петровна', notification: '', age: '32 года', gender: 'жен', pin: false },
    {id: 5, photo: Ivanov, name: 'Иванов Дмитрий Павлович', notification: '', age: '30 лет', gender: 'муж', pin: false },
    {id: 6, photo: Noname, name: 'nosikov@list.ru', notification: '', age: '50 лет', gender: 'муж', pin: false },
    {id: 7, photo: Fors, name: 'Форс Александр Егорович', notification: '', age: '36 лет', gender: 'муж', pin: false },
    {id: 8, photo: Ahmedov, name: 'Ахмедов Артур Арменович', notification: '', age: '56 лет', gender: 'муж', pin: false },
    {id: 9, photo: Blazhevich, name: 'Блажевич Игорь Артёмович', notification: '', age: '64 года', gender: 'муж', pin: false },
    {id: 10, photo: Valieva, name: 'Валиева Руфина Борисовна', notification: '', age: '35 лет', gender: 'жен', pin: false },
    {id: 11, photo: Voloshina, name: 'Волошина Виктория Гамлетовна', notification: '', age: '47 лет', gender: 'жен', pin: false },
    {id: 12, photo: Noname, name: 'Воломейцев Виктор Григорьевич', notification: '', age: '18 лет', gender: 'муж', pin: false },
    {id: 13, photo: Noname, name: 'Борисов Илья Витальевич', notification: '', age: '27 лет', gender: 'муж', pin: false },
    {id: 14, photo: Noname, name: 'Чудов Валерий Вячеславович', notification: '', age: '44 года', gender: 'муж', pin: false },
]