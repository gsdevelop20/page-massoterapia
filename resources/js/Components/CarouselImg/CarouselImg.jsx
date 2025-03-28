import React, { memo, useCallback } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const ImageCard = memo(({ image }) => (
    <motion.div
        className="image-card"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05 }}
    >
        <img
            src={image.src}
            alt={image.alt || "Imagem do Carrossel"}
            className="carousel-image"
            loading="lazy"
        />
    </motion.div>
));

const CarouselImg = memo(({ images }) => {
    const renderSlide = useCallback((image, index) => (
        <SwiperSlide key={index}>
            <ImageCard image={image} />
        </SwiperSlide>
    ), []);

    return (
        <section className="carousel-container">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                }}
                className="carousel"
            >
                {images.map(renderSlide)}
            </Swiper>
        </section>
    );
});

export default CarouselImg;
