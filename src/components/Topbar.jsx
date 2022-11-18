import { Container } from '@mui/material';

import { AccessTime } from '@mui/icons-material'

const Topbar = () => {
  return (
    <div className='topbar'>
      <Container maxWidth='lg'>
        <div className="topbar__wrapper">

          <div className="topbar__left">
            <div className="topbar__info">
              <div className="topbar__info-item">
                <AccessTime className='topbar__info-icon' />
                <p>Mon to Sat : 08:00 - 15:30</p>
              </div>
            </div>
          </div>
          <div className="topbar__right">
            <div className="topbar__info">
              <div className="topbar__info-item">
                <AccessTime className='topbar__info-icon' />
                <p>+1 801 4545 87</p>
              </div>
              <div className="topbar__info-item">
                <AccessTime className='topbar__info-icon' />
                <p>info@info.com</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Topbar