import React, {useContext} from 'react';
import {UserContext} from '../../../context/UserContext';
import Button from '../../common/Button/Button';

const UserProfile: React.FC = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <Button onClickHandler={
                () => setUser({...user, firstName: 'Michalina'})
            }
            >
                Click
            </Button>
        </div>
    );
};

export default UserProfile;
