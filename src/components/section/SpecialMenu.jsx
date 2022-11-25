import Grid from '@mui/material/Grid';
import { Heading, SpecialMenuItems } from '../index';

const SpecialMenu = () => {
    return (
        <>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item xs={12} >
                    <Heading
                        subtitle="Hot Offer"
                        title="Special For Today"
                    />
                    <SpecialMenuItems />
                </Grid>
            </Grid>
        </>
    )
}

export default SpecialMenu