import Grid from '@mui/material/Grid';
import { Subscribe, Social } from '../index'



const Footer = () => {
    return (
        <footer className='footer'>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item md={12} >
                    <div className="heading">
                        <span>Be updated</span>
                        <h3>SUBSCRIBE US</h3>
                    </div>

                    <Subscribe />

                    <Social />

                    <p className="footer__copyright">
                        &copy; {new Date().getFullYear()}, , All Rights Reserved, Developer <span> Kadir Ula </span>
                    </p>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer