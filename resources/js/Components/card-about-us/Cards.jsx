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
            className="w-full md:w-5 border-4 card-1 flex flex-column justify-content-center rounded-xl shadow-sm"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            role="listitem" // Adicionado para garantir acessibilidade
            aria-label={product.title}
        >
            <div className='flex-column flex justify-content-center gap-1 align-items-center p-4'>
                <h5 className="h2 font-bold text-green-800 dark:text-gray-300 text-center">
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
        <section className="w-full md:w-0"
            aria-labelledby="products-heading"
            >

            <div role="list"
                 className="flex flex-wrap flex-column-reverse md:flex-row gap-6 align-items-center justify-content-center">
                {data.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </section>
    );
});
