import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { HrefProps } from './interfaces';

const Login = ({ hrefLink }: HrefProps) => {
    const [accessToken, setAccessToken] = useState(null);
    const [email, setEmail] = useState<string>('johndoe@example.com');
    const [password, setPassword] = useState<string>('9jdsGQyjaZD8kSCZ')
    const navigate = useNavigate();

    const getAccessToken = (e: any, email: string, password: string) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        fetch(hrefLink + '/users/login', requestOptions)
            .then(res => res.json())
            .then(data => {
                setAccessToken(data.accessToken)
            });
    };

    useEffect(() => {
        if (accessToken !== null) navigate('/RestApiPage', { state: accessToken, replace: true });
    }, [accessToken]);

    return (
        <div className="bg-gray-200 h-screen w-screen max-w-xs m-0">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        E-Mail
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="E-Mail"
                        defaultValue={email}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            setEmail(target.value);
                        }
                        }
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
                        defaultValue={password}
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            setPassword(target.value);
                        }
                        }
                    />
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        onClick={(e) => getAccessToken(e, email, password)}
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Login;