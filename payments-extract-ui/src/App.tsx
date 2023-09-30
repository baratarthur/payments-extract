import { useExtract } from '@core/hooks/extract'
import { SummaryCard } from './shared/summary';
import { ExtractList } from './shared/extract';
import {
  CircularProgress,
  Grid,
  Typography
} from '@mui/material';
import { ColorToggle } from './shared/colorToggle';

interface Props {
  testMode: boolean
}

function App({testMode}: Props) {
  const {loading} = useExtract();

  if(loading) return <Grid container sx={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
    <CircularProgress />
  </Grid>;

  return (
    <Grid container spacing={2} sx={{padding: '1rem'}}  >
      <Grid item md={6} xs={12}>
        <Typography variant="h3" sx={{marginBottom: '1rem', marginX: 'auto'}}>
          Summary
        </Typography>
        <SummaryCard />
      </Grid>
      <Grid item md={6} xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {!testMode && <ColorToggle />}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{marginBottom: '1rem', marginX: 'auto'}}>
          Extract
        </Typography>
        <ExtractList />
      </Grid>
    </Grid>
  )
}

export default App
