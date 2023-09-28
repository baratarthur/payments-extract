import { Extract } from '@model/Extract'
import { useExtract } from '@core/hooks/extract'
import { List, ListItem } from '@mui/material';

import './index.css'

export function ExtractList() {
    const { extract } = useExtract();

    return <List >
        {extract.map((e: Extract, i: number) => (
            <ListItem key={i} alignItems='flex-start'>
                {e.status}
            </ListItem>
        ))}
    </List>
}