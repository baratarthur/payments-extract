import { useExtract } from '@core/hooks/extract'
import { SummaryCard } from './shared/summary';
import { ExtractList } from './shared/extract';
import { Grid } from '@mui/material';

import './App.css'

function App() {
  const {loading} = useExtract();

  if(loading) return <span>loading...</span>

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}><SummaryCard /></Grid>
      <Grid item xs={6}></Grid>
      <Grid item xs={12}><ExtractList /></Grid>
    </Grid>
  )
}

export default App
