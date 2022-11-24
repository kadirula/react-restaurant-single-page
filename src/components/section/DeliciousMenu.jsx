import Grid from '@mui/material/Grid';
import { MenuTabs, Heading } from '../index';
import { Fade } from 'react-reveal';

const DeliciouseMenu = () => {

  return (
    <>
      <Grid container maxWidth='lg' mx='auto' spacing={2}>
        <Grid item xs={12}>

          <Fade top>
            <Heading
              subtitle="Yummy n testy"
              title="Delicious Menu"
            />
          </Fade>

          <MenuTabs />

        </Grid>
      </Grid>
    </>
  )
}

export default DeliciouseMenu