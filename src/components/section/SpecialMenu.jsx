import Grid from '@mui/material/Grid';
import { Heading, SpecialMenuItems } from '../index';
import { Fade } from 'react-reveal';

const SpecialMenu = () => {
    return (
        <>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item md={12} >
                    <Fade top>
                        <Heading
                            subtitle="Hot Offer"
                            title="Special For Today"
                        />
                    </Fade>
                    <SpecialMenuItems />
                </Grid>
            </Grid>
        </>
    )
}

export default SpecialMenu