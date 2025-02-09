import React, { memo } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Definido fora do componente para evitar recriação a cada render
const cardVariants = {
    hidden: { opacity: 0, rotate: -10, scale: 0.8 },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 12 }
    }
};

// Componente memoizado para cada cartão de produto
const ProductCard = memo(function ProductCard({ product }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.article
            ref={ref}
            className="md:w-4 w-full border-4 flex flex-column justify-content-center p-2 shadow-lg bg-gray-100 rounded-lg shadow-sm"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ borderLeft: 'solid 2px', borderColor: '#f31ca1' }}
            role="listitem"
            aria-label={product.title}
        >
            {/* Imagem com lazy loading e alt descritivo */}
            <img
                src={product.imageSrc}
                width={100}
                alt={`${product.title} - imagem ilustrativa`}
                className="w-16 h-16 mx-auto mb-2"
                loading="lazy"
            />

            {/* Título */}
            <h5 className="text-xl font-medium text-gray-700 dark:text-gray-300 text-center mb-2">
                {product.title}
            </h5>

            {/* Descrição (renderizada apenas se houver conteúdo) */}
            {product.description && (
                <p className="text-base font-normal text-gray-600 dark:text-gray-400 text-center">
                    {product.description}
                </p>
            )}
        </motion.article>
    );
});

// Componente principal memoizado
export default memo(function Card({ data }) {
    return (
        <section
            className="w-full flex flex-column mt-8 container align-items-center justify-content-center"
            aria-labelledby="products-heading"
        >
            {/* Título para tecnologias assistivas (visualmente oculto) */}
            <h2 id="products-heading" className="sr-only font-weight-bold mb-3 text-center">
                Conheça algumas de nossas expecialidades
            </h2>

            <div className="flex flex-wrap mt-8 w-full flex-row gap-6 mt-2 align-items-center justify-content-center" role="list">
                {data.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    );
});
