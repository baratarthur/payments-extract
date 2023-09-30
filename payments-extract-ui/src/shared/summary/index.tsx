import { useExtract } from '@core/hooks/extract'
import { Card, CardContent, Typography, Grid, Divider, Box } from '@mui/material';
import { Currency } from '@core/utils/currency';
import { PureDate } from '@core/utils/date';

export function SummaryCard() {
    const { summary } = useExtract();

    const valuesAsCurrency = {
        totalAmount: new Currency(summary?.totalAmount).getBRL(),
        totalAverageAmount: new Currency(summary?.totalAverageAmount).getBRL(),
        totalNetAmount: new Currency(summary?.totalNetAmount).getBRL()
    }

    const valuesAsDate = {
        initialDate: new PureDate(summary?.initialDate).toDateString(),
        finalDate: new PureDate(summary?.finalDate).toDateString(),
    }

    return (    
        <Card>
            <CardContent>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '.5rem'}}>
                    <Typography color="text.primary">Total ammount: {valuesAsCurrency.totalAmount}</Typography>
                    <Typography color="text.primary">Total avarage ammount: {valuesAsCurrency.totalAverageAmount}</Typography>
                    <Typography color="text.primary">Total net ammount: {valuesAsCurrency.totalNetAmount}</Typography>
                    <Typography color="text.primary">Total quantity: {summary?.totalQuantity}</Typography>
                </Box>
                <Divider sx={{marginY: '1rem'}} />
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Typography color="text.secundary">Initial date: {valuesAsDate.initialDate}</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography color="text.secundary">Final date: {valuesAsDate.finalDate}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
