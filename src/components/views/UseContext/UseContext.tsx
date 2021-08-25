import React from 'react';
import {StyledUseContextContainer} from './StyledUseContext';
import {UserProvider} from '../../../context/UserContext';
import Dashboard from './Dashboard';

const UseContext: React.FC = () => (
    <UserProvider>
        <StyledUseContextContainer>
            <Dashboard />
        </StyledUseContextContainer>
    </UserProvider>
);

export default UseContext;
