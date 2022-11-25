import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { MenuTabPanel } from '../index';
import { useState } from 'react';
import { menuTabs } from '../../data'
import { motion } from "framer-motion";

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

  const menuListItemAnimate = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1
      }
    }
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
              <div className="menu-list__poster">
                <img src={menuTabPanel.picturePoster} alt="" />
              </div>
              <motion.div
                className="menu-list__wrapper"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.3 }}
              >
                {menuTabPanel.items.map((item, index) => (
                  <motion.div
                    className='menu-list__item' key={index}
                    variants={menuListItemAnimate}
                  >
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
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </MenuTabPanel>
        ))
      }
    </>
  )
}

export default MenuTabs