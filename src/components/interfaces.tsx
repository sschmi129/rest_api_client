import { Location } from "history";
export interface HrefProps {
    hrefLink: string
}

export interface User {
    'first_name': string,
    'last_name': string,
    'birth': string,
    'location': string,
    'email': string
}

export interface Module {
    'module_name': string,
    'compulsory_module': string,
    'credit_points': number,
    'learning_outcomes': string,
    'content': string
}

export interface Guestbook {
    'name': string,
    'message': string
}

export interface usersRequestProps {
    hrefLink: string,
    setUsers: (user: [User]) => void,
    location: Location
}

export interface modulesRequestProps {
    hrefLink: string,
    setModules: (module: [Module]) => void,
    location: Location
}

export interface guestbookRequestProps {
    hrefLink: string,
    setGuestbook: (guestbook: [Guestbook]) => void,
    location: Location
}

export interface guestbookSubmitProps{
    hrefLink: string;
    message: string;
    location: Location;
}

export interface guestbookDeleteProps{
    hrefLink: string;
    location: Location;
}

export interface guestbookDeleteByIdProps{
    hrefLink: string;
    id: string;
    location: Location;
}