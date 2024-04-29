export type ContactType = {
    id: number
    photo: string
    name: string
    notification: string
    age: string
    gender: string
    pin: boolean
}

export type NotesDataType = {
    id: number
    date: string
    text: string
    img: string
}

export type ConsultationsDataType = {
    id: number
    title: string
    date: string
    confirmation: boolean
}

export type VideoDataType = {
    id: number
    img: string
    title: string
    name: string
    date: string
}

export type EventsDataType = {
    id: number
    img: string
    title: string
    type: string
    date: string
    time: string
}