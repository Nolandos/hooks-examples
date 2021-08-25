import React from 'react';
import i18n from '../../../i18n/config';
import {LanguageButtonProps} from './types';

const LanguageButton: React.FC<LanguageButtonProps> = ({lang, flagSrc}) => (
    <button onClick={() => i18n.changeLanguage(lang)}>
        <img src={flagSrc} alt={lang} />
    </button>
);

export default LanguageButton;
