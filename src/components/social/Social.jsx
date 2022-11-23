import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Social = () => {
    return (
        <div className='social'>
            <a href="#" className='social__item'>
                <FacebookIcon className='social__icon' />
            </a>
            <a href="#" className='social__item'>
                <InstagramIcon className='social__icon' />
            </a>
            <a href="#" className='social__item'>
                <TwitterIcon className='social__icon' />
            </a>
            <a href="#" className='social__item'>
                <YouTubeIcon className='social__icon' />
            </a>
        </div>
    )
}

export default Social