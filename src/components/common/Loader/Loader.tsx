import React from 'react';
import './Loader.scss';

const Loader: React.FC = () => (
    <div className="ball-loader">
        <div className="ball-loader-ball ball1" />
        <div className="ball-loader-ball ball2" />
        <div className="ball-loader-ball ball3" />
    </div>
);

export default Loader;
