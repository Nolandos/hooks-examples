import React, {createContext, Dispatch, SetStateAction, useState} from 'react';

type User = {
    firstName: string,
    surname: string,
    age: number
}

type Context = {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
    handleTestAlert: (msg: string) => void
};

const initialContext: Context = {
    user: {
        firstName: 'Łukasz',
        surname: 'Nolka',
        age: 26,
    },
    setUser: (): void => {
        throw new Error('setUser function must be overridden');
    },
    handleTestAlert: (msg: string) => alert(`Alert: ${msg}`),
};

export const UserContext = createContext<Context>(initialContext);

export const UserProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User>({
        firstName: 'Łukasz',
        surname: 'Nolka',
        age: 26,
    });

    const handleTestAlert = (msg: string) => alert(`Alert: ${msg}`);

    return (
        <UserContext.Provider value={{user, setUser, handleTestAlert}}>
            {children}
        </UserContext.Provider>
    );
};
