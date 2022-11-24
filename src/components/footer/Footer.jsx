import Grid from '@mui/material/Grid';
import { Subscribe, Social, Heading } from '../index'
import { Fade } from 'react-reveal';



const Footer = () => {
    return (
        <footer className='footer'>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item md={12} >

                    <Fade top>
                        <Heading
                            subtitle="Be updated"
                            title="Subscribe Us"
                        />
                    </Fade>

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