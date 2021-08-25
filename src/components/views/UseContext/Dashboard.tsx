import React, {useContext} from 'react';
import {DashboardContainer} from './StyledUseContext';
import {UserContext} from '../../../context/UserContext';
import UserProfile from './UserProfile';
import Button from '../../common/Button/Button';

const Dashboard: React.FC = () => {
    const {user, handleTestAlert} = useContext(UserContext);

    return (
        <DashboardContainer>
            <h1>USE CONTEXT</h1>
            {user.firstName}
            {' '}
            {user.surname}
            <UserProfile />
            <Button variant="action" onClickHandler={() => handleTestAlert('Dashboard')}>Test Alert</Button>
        </DashboardContainer>
    );
};

export default Dashboard;
