import { ExtractContext } from '@core/contexts/Extract';
import {useContext} from 'react'

export const useExtract = () => {
    return useContext(ExtractContext);
}