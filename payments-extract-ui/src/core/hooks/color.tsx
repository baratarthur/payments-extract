import { ColorModeContext } from '@core/contexts/Color';
import {useContext} from 'react'

export const useColorMode = () => {
    return useContext(ColorModeContext);
}