import React from 'react';
import { Guestbook, Module, User } from './interfaces';


export const buildUsersTable = (users:[User]|undefined) => {
    if (users === undefined) {
        return <></>
    }
    let x: JSX.Element[] = [];
    let usersTable =
        <>
            <table className='table-auto'>
                <thead>
                    <tr>
                        <th className='border-2 border-black'>First Name</th>
                        <th className='border-2 border-black'>Last Name</th>
                        <th className='border-2 border-black'>Birth</th>
                        <th className='border-2 border-black'>Location</th>
                        <th className='border-2 border-black'>E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {x}
                </tbody>
            </table>
        </>
    for (let i = 0; i < users.length; i++) {
        let y: JSX.Element[] = []
        for (let key in users[i]) {
            y.push(
                <td className='border-2 border-black'>
                    {users[i][key as 'first_name' | 'last_name' | 'birth' | 'location' | 'email']}
                </td>
            )
        }
        x.push(
            <tr>
                {y}
            </tr>
        )
    }
    return usersTable
}


export const buildModulesTable = (modules:[Module]|undefined) => {
    if (modules === undefined) {
        return <></>
    }
    let x: JSX.Element[] = [];
    let modulesTable =
        <>
            <table className='table-auto'>
                <thead>
                    <tr>
                        <th className='border-2 border-black'>Module Name</th>
                        <th className='border-2 border-black'>Compulsory Module</th>
                        <th className='border-2 border-black'>Credit Points</th>
                        <th className='border-2 border-black'>Learning Outcomes</th>
                        <th className='border-2 border-black'>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {x}
                </tbody>
            </table>
        </>
    for (let i = 0; i < modules.length; i++) {
        let y: JSX.Element[] = []
        for (let key in modules[i]) {
            y.push(
                <td className='border-2 border-black'>
                    {modules[i][key as 'module_name' | 'compulsory_module' | 'credit_points' | 'learning_outcomes' | 'content']}
                </td>
            )
        }
        x.push(
            <tr>
                {y}
            </tr>
        )
    }
    return modulesTable
}


export const buildGuestbookTable = (guestbook:[Guestbook]|undefined) => {
    if (guestbook === undefined ) {
        return <></>
    }
    if (guestbook[0]) {
        
    }
    console.log(guestbook[0]);
    
    console.log(guestbook.length);
    
    let x: JSX.Element[] = [];
    let guestbookTable =
        <>
            <table>
                <thead>
                    <tr>
                        <th className='border-2 border-black'>id</th>
                        <th className='border-2 border-black'>Name</th>
                        <th className='border-2 border-black'>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {x}
                </tbody>
            </table>
        </>
    for (let i = 0; i < guestbook.length; i++) {
        let y: JSX.Element[] = []
        for (let key in guestbook[i]) {
            y.push(
                <td className='border-2 border-black'>
                    {guestbook[i][key as 'name' | 'message']}
                </td>
            )
        }
        x.push(
            <tr className='border-2 border-black'>
                {y}
            </tr>
        )
    }
    return guestbookTable
}
