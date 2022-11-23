import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { galleries } from '../../data';
import { motion, AnimatePresence } from "framer-motion";
import { GalleryFilter, GalleryItem } from '../index';

const Gallery = () => {


  const [galleryData, setGalleryData] = useState(galleries);

  return (
    <div className='section section-gallery'>
      <Grid container maxWidth='lg' mx='auto' spacing={2}>
        <Grid item md={12} >
          <div className="heading">
            <span>Fresh & healthy food</span>
            <h3>Gallery</h3>
          </div>
          <div className="gallery">
            <GalleryFilter
              galleries={galleries}
              setGalleryData={setGalleryData}
            />

            <motion.div
              layout
              className="gallery__content"
            >
              <AnimatePresence>
                {
                  galleryData.map((galleryItem, index) => (
                    <motion.div
                      layout
                      animate={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.7 }}
                      key={index}
                      data-filter={galleryItem.filters.join(',')}
                    >
                      <GalleryItem
                        img={galleryItem.img}
                      />
                    </motion.div>
                  ))
                }
              </AnimatePresence>
            </motion.div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Gallery