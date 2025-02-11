import React, {memo} from 'react';
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

// Definido fora do componente para evitar recriação a cada render
const cardVariants = {
    hidden: {opacity: 0, rotate: -10, scale: 0.8},
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {type: "spring", stiffness: 120, damping: 12}
    }
};

// Componente memoizado para cada cartão de produto
const ProductCard = memo(function ProductCard({product}) {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.2});

    return (
        <motion.article
            ref={ref}
            className="md:w-3 w-full border-4 h-3 hover:scale-50 border-warning flex flex-column justify-content-center p-3 shadow-lg bg-gray-100 border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{borderLeft: 'solid 2px', borderColor: '#66b5c2'}}
            role="listitem"
            aria-label={product.title}
        >
            {/* Imagem com lazy loading e alt descritivo */}
            <img
                src={product.imageSrc}

                alt={`${product.title} - imagem ilustrativa`}
                className="md:w-4 w-4 mx-auto mb-1"
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

            <a
                href={product.url}
                className="btn w-full"
                aria-label="Entre em contato"
                target='_blank'
            >
                AGENDAR
            </a>
        </motion.article>
    );
});

// Componente principal memoizado
export default memo(function ProductsComponent({data}) {
    return (
        <section
            className="w-full flex flex-column container align-items-center justify-content-center"
            aria-labelledby="products-heading"
        >
            {/* Título para tecnologias assistivas (visualmente oculto) */}
            <h2 id="products-heading" className="sr-only section-title text-white">
                EXAMES
            </h2>

            <div className="flex flex-wrap flex-row gap-6 mt-2 align-items-center justify-content-center" role="list">
                {data.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </section>
    );
});
