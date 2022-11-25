import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { galleries } from '../../data';
import { motion, AnimatePresence } from "framer-motion";
import { GalleryFilter, GalleryItem, Heading } from '../index';

const Gallery = () => {


  const [galleryData, setGalleryData] = useState(galleries);

  return (
    <>
      <Grid container maxWidth='lg' mx='auto' spacing={2}>
        <Grid item xs={12} >

          <Heading
            subtitle="Fresh & healthy food"
            title="Gallery"
          />

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
    </>
  )
}

export default Gallery