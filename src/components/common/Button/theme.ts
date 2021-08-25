import {variants} from './types';
import {appColors} from '../../../assets/colors';

const {PRIMARY, SECONDARY, ACTION} = variants;

export const app: {[index: string]: any} = {
    [PRIMARY]: {
        background: appColors.pureMidnight,
        border: `1px solid ${appColors.pureMidnight}`,
        borderHover: `1px solid ${appColors.pureMidnight}`,
        backgroundHover: appColors.white,
        borderColorHover: appColors.pureMidnight,
        colorHover: appColors.pureMidnight,
        color: appColors.white,
    },
    [SECONDARY]: {
        background: appColors.white,
        border: `1px solid ${appColors.pureMidnight}`,
        borderColor: appColors.pureMidnight,
        backgroundHover: appColors.pureMidnight,
        borderColorHover: appColors.transparent,
        colorHover: appColors.white,
        color: appColors.pureMidnight,
    },
    [ACTION]: {
        background: appColors.hotPepperGreen,
        border: `1px solid ${appColors.hotPepperGreen}`,
        borderHover: `1px solid ${appColors.hotPepperGreen}`,
        backgroundHover: appColors.white,
        borderColorHover: appColors.hotPepperGreen,
        colorHover: appColors.hotPepperGreen,
        color: appColors.white,
    },
};
