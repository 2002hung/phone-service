import Box from '@mui/material/Box'
import Slider from "react-slick";
import styles from './styles.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderImage() {
  const { sliderImg, sliderDotsCustom } = styles

  const images = [
    "https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/5.1-min.jpg",
    "https://xstore.8theme.com/elementor/demos/phone-service/wp-content/uploads/sites/79/2022/05/5.2-min.jpg",
  ];

  const handleMouseMove = (e) => {
    const img = e.currentTarget;
    const { left, top, width, height } = img.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(1.4)';
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget;
    img.style.transform = 'scale(1)';
    img.style.transformOrigin = 'center center';
  };

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    customPaging: i => (
      <img
        src={images[i]}
        style={{
          width: '60px',
          height: '60px',
          objectFit: 'cover',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
    ),
    dotsClass: `slick-dots ${sliderDotsCustom}`,
  }

  return (
    <Box sx={{
      border: '1px solid #e1e1e1',
      borderRadius: '4px'
    }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              overflow: 'hidden',
              position: 'relative',
              '&:hover img': { cursor: 'zoom-in', transform: 'scale(1.05)' },
              outline: 'none',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className={sliderImg}
              src={src}
              alt={`Slide ${index}`}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default SliderImage