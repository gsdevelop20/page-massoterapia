import { Link, Head } from '@inertiajs/react';
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProductsComponent({ data }) {
    const cardVariants = {
        hidden: { opacity: 0, rotate: -10, scale: 0.8 },
        visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 120, damping: 12 }
        }
    };

    return (
        <>
            <Head title="Nossos Serviços" />

            <section className="w-full flex flex-column container align-items-center justify-content-center mt-8">
                <div className="flex w-full justify-content-center align-items-center">
                    <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-gray-200">
                        Conheça os nossos serviços
                    </h1>
                </div>

                <div className="flex flex-wrap flex-row gap-6 mt-6 align-items-center justify-content-center">
                    {data.map((product, index) => {
                        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                className="md:w-20rem w-full border-4 border-warning flex flex-column justify-content-center p-6 bg-gray-200 border-gray-300 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                                variants={cardVariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                            >
                                {/* Imagem */}
                                <img
                                    src={product.imageSrc}
                                    width={100}
                                    alt={product.title}
                                    className="w-16 h-16 mx-auto mb-4"
                                />

                                {/* Título */}
                                <h5 className="text-xl font-medium text-gray-700 dark:text-gray-300 text-center mb-2">
                                    {product.title}
                                </h5>

                                {/* Descrição */}
                                <p className="text-base font-normal text-gray-600 dark:text-gray-400 text-center">
                                    {product.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <Link href="/contato" className="btn btn-warning mt-5">
                    Entre em contato
                </Link>
            </section>
        </>
    );
}
