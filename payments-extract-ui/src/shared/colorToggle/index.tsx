import { useColorMode } from "@core/hooks/color";
import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export function ColorToggle() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const theme: any = useTheme();
    const colorMode = useColorMode();

    const handleClick = () => {
        colorMode.toggleColorMode();
    }
    
    return (
        <Button color="primary" variant="outlined" onClick={handleClick}>
            {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
    )
}