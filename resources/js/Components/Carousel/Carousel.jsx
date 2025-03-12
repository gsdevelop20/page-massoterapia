import React, { memo, useCallback, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaTimes } from "react-icons/fa";
import Modal from 'react-modal';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './style.css';

// Definição de animação do card
const cardVariants = {
    hidden: { opacity: 0, rotate: -10, scale: 0.8 },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 12 }
    }
};

// Define o modal para acessibilidade
Modal.setAppElement('#app');

const ProductCard = memo(({ product, onOpenModal }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.article
            ref={ref}
            className="w-full md:w-10 z-40 border-4 card-1 flex flex-column justify-content-center p-5 rounded-xl shadow-sm"
            variants={cardVariants}
            initial="hidden"
            style={{ height: '20rem' }}
            animate={inView ? "visible" : "hidden"}
            role="listitem"
            aria-label={product.title}
        >
            <div className='flex-column flex justify-content-between gap-4 align-items-center p-4'>
                <img
                    src={product.modalImage}
                    width={170}
                    alt={`${product.title} - imagem ilustrativa`}
                    className="h-16 position-relative"
                    loading="lazy"
                />
                <h5 className="h4 font-medium text-gray-700 dark:text-gray-300 text-center">
                    {product.title}
                </h5>

                <button
                    className="btn w-full mt-1 text-white"
                    aria-label={`Agendar consulta para ${product.title}`}
                    onClick={() => onOpenModal(product)}
                    style={{ background: '#d37435', fontWeight: 'bold', fontSize: '18px' }}
                >
                    SAIBA MAIS
                </button>
            </div>
        </motion.article>
    );
});

const Carousel = memo(({ data }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (modalIsOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [modalIsOpen]);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedProduct(null);
    };

    const renderSlide = useCallback((product, index) => (
        <SwiperSlide key={index} className="flex justify-content-center">
            <ProductCard product={product} onOpenModal={openModal} />
        </SwiperSlide>
    ), []);

    return (
        <>
            <section
                className="w-full flex flex-column container align-items-center justify-content-center"
                aria-labelledby="products-heading"
                style={{ marginTop: '75px' }}
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
                    lazyPreloadPrevNext={2}
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

            {/* Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Agendamento"
                className={`modal-content ${isMobile ? "modal-fullscreen" : ""}`}
                overlayClassName="modal-overlay"
                style={{
                    content: {
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: isMobile ? '90%' : '50%',
                        height: isMobile ? '80%' : 'auto',
                        maxWidth: '800',
                        overflow: 'none',
                        padding: '20px',
                        maxHeight: '750px',
                        borderRadius: '10px',
                        background: '#ffffff',
                    },
                    overlay: {
                        background: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }
                }}
            >
                <div className='flex justify-content-end'>
                    <button
                        className=" bg-transparent border-0 w-1"
                        onClick={closeModal}
                    >
                        <FaTimes color='#f21313' size={20} />
                    </button>
                </div>
                <h2>{selectedProduct ? selectedProduct.title : "Agendamento"}</h2>
                {selectedProduct && (
                    <div className='overflow-auto'>
                        <img
                            src={selectedProduct.modalImage}
                            alt={selectedProduct.title}
                            className="w-full max-h-40 object-cover rounded"
                        />
                        <p className='text-left mt-3'>{selectedProduct.description}</p>
                        <div className='w-100 flex justify-content-start'><span className='h4 font-bold text-orange-700 text-left'>VALOR: {selectedProduct.price}</span></div>
                    </div>
                )}
                <div className="flex justify-content-between mt-4">
                    <a
                        href={selectedProduct ? selectedProduct.url : "#"}
                        className={"btn w-full mt-1 text-white "}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ background: '#01d758', fontWeight: 'bold', fontSize: '20px' }}
                    >
                        AGENDAR
                    </a>
                </div>
            </Modal>
        </>
    );
});

export default Carousel;
