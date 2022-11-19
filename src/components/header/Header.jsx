
import Box from '@mui/material/Box';

/* Components */
import { Navbar, Topbar } from '../index';

const Header = () => {
    return (
        <Box className="header">
            <Topbar />
            <Navbar />
        </Box>
    )
}

export default Header