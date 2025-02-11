import React, {memo} from 'react';
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css';

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
            className="w-full md:w-3 border-4 card-1 flex flex-column justify-content-center p-5 bg-gray-100 rounded-lg shadow-sm"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            aria-label={product.title}
        >
            {/* Imagem */}
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

            {/* Descrição (se houver) */}
            {product.description && (
                <p className="text-base font-normal text-gray-600 dark:text-gray-400 text-center">
                    {product.description}
                </p>
            )}

            <a
                href={product.url}
                className="btn w-full mt-1 text-white"
                aria-label={`Agendar consulta para ${product.title}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{background: '#00ba1a', fontWeight: 'bold', fontSize: '20px'}}
            >
                AGENDAR
            </a>
        </motion.article>
    );
});

// Componente principal memoizado
export default memo(function Carousel({data}) {
    return (
        <section
            className="w-full flex flex-column container align-items-center justify-content-center"
            aria-labelledby="products-heading"
            role="region"  // Define a região para tecnologias assistivas
            style={{marginTop: '100px'}}
        >
            {/* Título para tecnologias assistivas */}
            <h2 id="products-heading" className="text-center section-title" style={{fontSize: '35px'}}>
                ESPECIALIDADES
            </h2>

            {/* Envolvendo Swiper em uma div com role="list" */}
            <div role="list" className="flex flex-wrap flex-row gap-6 mt-2 align-items-center justify-content-center">
                {data.map((product, index) => (
                    <ProductCard product={product}/>
                ))}
            </div>
        </section>
    );
});
