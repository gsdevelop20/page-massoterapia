import React, { memo, useCallback } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css';

const cardVariants = {
    hidden: { opacity: 0, rotate: -10, scale: 0.8 },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 12 }
    }
};

const ProductCard = memo(({ product }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.article
            ref={ref}
            className="w-full md:w-10 z-40 border-4 card-1 flex flex-column justify-content-center p-5 rounded-xl shadow-sm"
            variants={cardVariants}
            initial="hidden"
            style={{
                height: '20rem'
            }}
            animate={inView ? "visible" : "hidden"}
            role="listitem"
            aria-label={product.title}
        >
            <div className='flex-column flex justify-content-center gap-4 align-items-center p-4'>
                <img
                    src={product.imageSrc}
                    width={120}
                    alt={`${product.title} - imagem ilustrativa`}
                    className="w-16 h-16 mx-auto position-relative"
                    loading="lazy"
                />
                <h5 className="h4 font-medium text-gray-700 dark:text-gray-300 text-center">
                    {product.title}
                </h5>
                {product.description && (
                    <p className="text-base font-normal text-gray-600 dark:text-gray-400 text-center">
                        {product.description}
                    </p>
                )}
                <a
                    href={product.url}
                    className={`btn w-full mt-1 text-white ` + product.btnClass}
                    aria-label={`Agendar consulta para ${product.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{background: '#00ba1a', fontWeight: 'bold', fontSize: '20px'}}
                >
                    AGENDAR
                </a>
            </div>
        </motion.article>
    );
});

const Carousel = memo(({data}) => {
    // useCallback evita recriação desnecessária da função
    const renderSlide = useCallback((product, index) => (
        <SwiperSlide key={index} className="flex justify-content-center">
            <ProductCard product={product}/>
        </SwiperSlide>
    ), []);

    return (
        <section
            className="w-full flex flex-column container align-items-center justify-content-center"
            aria-labelledby="products-heading"
            style={{ marginTop: '15px' }}
        >
            <div>
                <span className='h1 font-bold text-orange-600'>
                    MENU MASSOTERAPIA
                </span>
            </div>

            {/* Swiper Carrossel */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: false }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                lazyPreloadPrevNext={2} // Melhora a performance carregando apenas os necessários
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="w-full"
                style={{ marginTop: '3rem', padding: '3rem' }}
            >
                {data.map(renderSlide)}
            </Swiper>
        </section>
    );
});

export default Carousel;
