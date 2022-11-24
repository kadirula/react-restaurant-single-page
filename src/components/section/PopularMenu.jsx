import Grid from '@mui/material/Grid';
import { PopularMenuItems, Heading } from '../index'
import { Fade } from 'react-reveal';

const PopularMenu = () => {
    return (
        <>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item md={12} >
                    <Fade top>
                        <Heading
                            subtitle="You love"
                            title="Popular Dishes"
                        />
                    </Fade>
                    <PopularMenuItems />

                </Grid>
            </Grid>
        </ >
    )
}

export default PopularMenu