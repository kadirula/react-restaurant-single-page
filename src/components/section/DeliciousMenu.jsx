import Grid from '@mui/material/Grid';
import { MenuTabs } from '../index';



const DeliciouseMenu = () => {

  return (
    <div className='section section-delicious-menu'>
      <Grid container maxWidth='lg' mx='auto' spacing={2}>
        <Grid item md={12} >
          <div className="heading">
            <span>Yummy n testy</span>
            <h3>DELICIOUS MENU</h3>
          </div>
          <MenuTabs />
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliciouseMenu