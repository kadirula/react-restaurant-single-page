import Grid from '@mui/material/Grid';
import { Subscribe, Social, Heading } from '../index'



const Footer = () => {
    return (
        <footer className='footer'>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item xs={12}>
                    <Heading
                        subtitle="Be updated"
                        title="Subscribe Us"
                    />

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