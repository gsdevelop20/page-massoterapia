import React, {memo} from 'react';
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css';

const cardVariants = {
    hidden: {opacity: 0, rotate: -10, scale: 0.8},
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 120, damping: 12}
    }
};

const ProductCard = memo(function ProductCard({product}) {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.2});

    return (
        <motion.article
            ref={ref}
            className="w-full  md:w-4 border-4 card-1 flex flex-column justify-content-center p-5 bg-orange-200 rounded-lg shadow-sm"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            role="listitem" // Adicionado para garantir acessibilidade
            aria-label={product.title}
        >
            <div className='flex-column flex justify-content-center align-items-center border-green-600 p-4' style={{border: "solid 4px"}}>
                <img
                    src={product.imageSrc}
                    width={120}
                    alt={`${product.title} - imagem ilustrativa`}
                    className="w-16 h-16 mx-auto position-relative"
                    style={{bottom: '0'}}
                    loading="lazy"
                />
                <h5 className="text-xl font-medium text-gray-700\ dark:text-gray-300 text-center">
                    {product.title}
                </h5>
                {product.description && (
                    <p className="text-base font-normal text-gray-600 dark:text-gray-400 text-center">
                        {product.description}
                    </p>
                )}
            </div>
        </motion.article>
    );
});

export default memo(function Carousel({data}) {
    return (
        <section
            className="w-full flex flex-column  mt-4 container align-items-center justify-content-center"
            aria-labelledby="products-heading"
            style={{marginTop: '15px'}}
        >

            <div>
                <span className='h1 text-orange-600'>
                    MENU MASSOTERAPIA
                </span>
            </div>
            <div role="list" className="flex flex-column-reverse md:flex-row gap-6 align-items-center justify-content-center" style={{marginTop: '5rem'}}>
                {data.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </section>
    );
});
