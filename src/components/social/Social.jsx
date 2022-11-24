import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Fade } from 'react-reveal';

const Social = () => {
    return (
        <div className='social'>
            <Fade left>
                <a href="#" className='social__item'>
                    <FacebookIcon className='social__icon' />
                </a>
            </Fade>
            <Fade bottom>
                <a href="#" className='social__item'>
                    <InstagramIcon className='social__icon' />
                </a>
            </Fade>
            <Fade bottom>
                <a href="#" className='social__item'>
                    <TwitterIcon className='social__icon' />
                </a>
            </Fade>
            <Fade right>
                <a href="#" className='social__item'>
                    <YouTubeIcon className='social__icon' />
                </a>
            </Fade>
        </div>
    )
}

export default Social