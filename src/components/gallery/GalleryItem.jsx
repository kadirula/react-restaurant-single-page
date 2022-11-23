import { FancyBox } from "../index";
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';

const GalleryItem = ({ img }) => {
    return (
        <FancyBox options={{ infinite: false }}>
            <div
                className="gallery__item"
                data-fancybox="gallery"
                data-src={img}
            >
                <ZoomOutMapOutlinedIcon className="gallery__icon"/>
                <img src={img} />
            </div>
        </FancyBox>
    )
}

export default GalleryItem