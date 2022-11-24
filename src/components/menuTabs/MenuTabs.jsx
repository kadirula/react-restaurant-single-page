import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { MenuTabPanel } from '../index';
import { useState } from 'react';
import { menuTabs } from '../../data'
import { Fade } from 'react-reveal';

const MenuTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const generateId = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <Box>
        <Tabs
          value={selectedTab}
          centered
          onChange={handleChange}
          TabIndicatorProps={{
            style: { backgroundColor: "transparent" }
          }}
          aria-label="basic tabs example"
          className='tabs'
        >
          {
            menuTabs.map((menuFilter, index) => (
              <Tab label={menuFilter.title} {...generateId(index)} />
            ))
          }

        </Tabs>
      </Box>
      {
        menuTabs.map((menuTabPanel, index) => (
          <MenuTabPanel value={selectedTab} index={index}>
            <div className="menu-list">
              <Fade left>
                <div className="menu-list__poster">
                  <img src={menuTabPanel.picturePoster} alt="" />
                </div>
              </Fade>
              <div className="menu-list__wrapper">
                {menuTabPanel.items.map(item => (
                  <Fade bottom>
                    <div className='menu-list__item'>
                      <div className="menu-list__image">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="menu-list__info">
                        <div className="menu-list__info-flex">
                          <div className="menu-list__title">{item.title}</div>
                          <div className="menu-list__price">{item.price}</div>
                        </div>
                        <div className="menu-list__desc">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>

            </div>

          </MenuTabPanel>
        ))
      }
    </>
  )
}

export default MenuTabs