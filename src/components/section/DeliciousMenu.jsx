import Grid from '@mui/material/Grid';
import { MenuTabs, Heading } from '../index';

const DeliciouseMenu = () => {

  return (
    <>
      <Grid container maxWidth='lg' mx='auto' spacing={2}>
        <Grid item xs={12}>

        <Heading
              subtitle="Yummy n testy"
              title="Delicious Menu"
            />

          <MenuTabs />

        </Grid>
      </Grid>
    </>
  )
}

export default DeliciouseMenu