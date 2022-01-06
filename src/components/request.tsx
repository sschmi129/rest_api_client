import { Guestbook, guestbookDeleteByIdProps, guestbookDeleteProps, guestbookRequestProps, guestbookSubmitProps, Module, modulesRequestProps, User, usersRequestProps } from './interfaces';
import { Location } from "history";

const requestOptionsBuilder = (location: Location) => {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${location.state}`
        },
    };
    return requestOptions;
}

export const usersRequest = ({ hrefLink, setUsers, location }: usersRequestProps) => {
    fetch(`${hrefLink}/api/users`, requestOptionsBuilder(location))
        .then(res => res.json())
        .then(
            (result: [User]) => {
                setUsers(result);
            },
            (error) => {
                console.log(error);
            }
        )
}

export const modulesRequest = ({ hrefLink, setModules, location }: modulesRequestProps) => {
    fetch(`${hrefLink}/api/modules`, requestOptionsBuilder(location))
        .then(res => res.json())
        .then(
            (result: [Module]) => {
                setModules(result);
            },
            (error) => {
                console.log(error);
            }
        )
}

export const guestbookRequest = ({ hrefLink, setGuestbook, location }: guestbookRequestProps) => {
    fetch(`${hrefLink}/api/guestbook`, requestOptionsBuilder(location))
        .then(res => res.json())
        .then(
            (result: [Guestbook]) => {
                setGuestbook(result);
            },
            (error) => {
                console.log(error);
            }
        )
}

export const guestbookSubmit = ({ hrefLink, message, location }: guestbookSubmitProps) => {
    fetch(`${hrefLink}/guestbook/add`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + location.state
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({message: message}) // body data type must match "Content-Type" header
    });
    //   return response.json();
}

export const guestbookDelete = ({ hrefLink, location }: guestbookDeleteProps) => {
    fetch(`${hrefLink}/guestbook/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${location.state}`
        },
    });
}

export const guestbookDeleteById = ({hrefLink, id, location}: guestbookDeleteByIdProps) => {
    fetch(`${hrefLink}/guestbook/deletebyid`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${location.state}` 
        },
        body: JSON.stringify({id : id})
    });
}