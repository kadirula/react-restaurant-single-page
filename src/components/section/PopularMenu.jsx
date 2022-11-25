import Grid from '@mui/material/Grid';
import { PopularMenuItems, Heading } from '../index'

const PopularMenu = () => {
    return (
        <>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item xs={12} >
                    <Heading
                        subtitle="You love"
                        title="Popular Dishes"
                    />
                    <PopularMenuItems />

                </Grid>
            </Grid>
        </ >
    )
}

export default PopularMenu