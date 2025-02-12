import React, { memo } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
    hidden: { opacity: 0, rotate: -10, scale: 0.8 },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 12 }
    }
};

const ProductCard = memo(function ProductCard({ product }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            className="md:w-3 w-full border-4 h-3 hover:scale-50 border-warning flex flex-column justify-content-center p-3 shadow-lg bg-gray-100 border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ borderLeft: 'solid 2px', borderColor: '#66b5c2' }}
            as="article" // Garantindo que seja um <article> correto
            role="listitem"
            aria-label={product.title}
        >
            <img
                src={product.imageSrc}
                alt={`${product.title} - imagem ilustrativa`}
                className="md:w-4 w-4 mx-auto mb-1"
                loading="lazy"
            />
            <h5 className="text-xl font-medium text-gray-700 dark:text-gray-300 text-center mb-2">
                {product.title}
            </h5>
            {product.description && (
                <p className="text-base font-normal text-gray-600 dark:text-gray-400 text-center">
                    {product.description}
                </p>
            )}
            <a
                href={product.url}
                className="btn w-full"
                aria-label={`Agendar consulta para ${product.title}`}
                title={`Agendar consulta para ${product.title}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                AGENDAR
            </a>
        </motion.div>
    );
});

export default memo(function ProductsComponent({ data }) {
    return (
        <section
            className="w-full flex flex-column container align-items-center justify-content-center"
            aria-labelledby="products-heading"
        >
            <h2 id="products-heading" className="sr-only section-title text-white">
                EXAMES
            </h2>
            <div className="flex flex-wrap flex-row gap-6 mt-2 align-items-center justify-content-center" role="list">
                {data.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
});
