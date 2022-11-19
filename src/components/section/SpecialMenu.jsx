import Grid from '@mui/material/Grid';

const SpecialMenu = () => {
    return (
        <div className='section section-special'>
            <Grid container maxWidth='lg' mx='auto' spacing={2}>
                <Grid item md={12} >
                    <div className="heading">
                        <span>Hot Offer</span>
                        <h3>Special For Today</h3>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default SpecialMenu