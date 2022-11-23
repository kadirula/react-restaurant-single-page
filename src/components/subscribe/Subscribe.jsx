import SendIcon from '@mui/icons-material/Send';

const Subscribe = () => {
    return (
        <div className="subscribe">
            <p className="subscribe__desc">
                Subscribe to our Newsletter to get first
            </p>
            <div className="subscribe__form">
                <input type="text" placeholder='Enter your email' />
                <button>
                    <SendIcon />
                </button>
            </div>
        </div>
    )
}

export default Subscribe