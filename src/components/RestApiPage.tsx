import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Location } from "history";
import '../App.css';
import { buildGuestbookTable, buildModulesTable, buildUsersTable } from './buildTable';
import { Guestbook, HrefProps, Module, User } from './interfaces';
import { guestbookDelete, guestbookDeleteById, guestbookRequest, guestbookSubmit, modulesRequest, usersRequest } from './request';


const RestApiPage = ({ hrefLink }: HrefProps) => {
  const [users, setUsers] = useState<[User]>();
  const [modules, setModules] = useState<[Module]>();
  const [guestbook, setGuestbook] = useState<[Guestbook]>();
  const location: Location = useLocation();

  return (
    <div className="mx-auto p-0 pb-12 w-full flex flex-col flex-nowrap justify-center">
      <div className="pt-6 lg:px-36">
        <h1 className="text-6xl font-bold">RestAPI Test</h1>
        <p className='text-lg pt-3'>
          Frontend: React<br />
          Backend: NodeJS, Express, JWT, SQLite, Let's Encrypt<br />
          Backend deployed on Raspberry Pi.
        </p>
      </div>

      {/* Users */}
      <div className="lg:px-36 pt-6">
        <h2 className='text-xl font-bold'>Users</h2>
        <p className="text-lg">
          Get users information:
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={(e) => usersRequest({ hrefLink, setUsers, location })}
          >
            Retrieve
          </button>
        </p>
        {buildUsersTable(users)}
      </div>

      {/* Modules */}
      <div className="lg:pl-36 pt-6">
        <h2 className="text-xl font-bold">Modules</h2>
        <p className="text-lg">Get modules information:
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={(e) => modulesRequest({ hrefLink, setModules, location })}

          >
            Retrieve
          </button>
        </p>
        {buildModulesTable(modules)}
      </div>

      {/* Guestbook */}
      <div className="lg:pl-36 pt-6">
        <h2 className='text-xl font-bold'>Guestbook</h2>
        <p>Leave a message/Update the message</p>
        <form className="" action=""
          onSubmit={
            (e) => {
              e.preventDefault();
              const x = e.target as HTMLFormElement;

              const id = (x[0] as HTMLInputElement).value;
              const message = (x[1] as HTMLInputElement).value;
              console.log(id);
              console.log(message);

              if (message !== '') {
                if (id !== '') {
                  //update
                } else {
                  guestbookSubmit({ hrefLink, message, location });
                }
              }
              (x[0] as HTMLInputElement).value = "";
              (x[1] as HTMLInputElement).value = "";
            }
          }>

          <input
            type="number"
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
            text-gray-700
            bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="id"
            placeholder="Message ID >0"
            min={0}
          />
          <textarea
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlTextarea1"
            rows={3}
            placeholder="Your message"
          />
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Send"
          />

        </form>
        <p className='pt-6 text-lg'>
          Get guestbook posts:
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={(e) => guestbookRequest({ hrefLink, setGuestbook, location })}
          >
            Retrieve/Renew
          </button>
        </p>
        {buildGuestbookTable(guestbook)}
        <p className='pt-6'>
          Delete all posts from John Doe:
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={(e) => guestbookDelete({ hrefLink, location })}
          >
            Delete
          </button>
        </p>
        <form
          className='pt-6'
          onSubmit={
            (e) => {
              e.preventDefault();
              const x = e.target as HTMLFormElement; 
              const id = (x[0] as HTMLInputElement).value;
              console.log('sdfwesf');
              if(id === ''){
                console.log('sdfwesf');
                return;
              }
              console.log('hallo');
              
              guestbookDeleteById({ hrefLink, id, location });
              (x[0] as HTMLInputElement).value = '';
            }
          }
        >
          Delete by id from John Doe:
          <input
            type="number"
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
            text-gray-700
            bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="id"
            placeholder="Message ID >0"
            min={1}
          />
         
          <input
            type="submit"
            value="Delete"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </form>
        <footer />
      </div>
    </div>
  );
}

export default RestApiPage;
