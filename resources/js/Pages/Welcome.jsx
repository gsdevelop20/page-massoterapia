import {Link, Head} from '@inertiajs/react';
import {LayoutContext, LayoutProvider} from "@/Layouts/layout/context/layoutcontext.jsx";
import {PrimeReactProvider} from "primereact/api";
import './style.css'
import React, {useContext, useState} from "react";
import Carousel2 from "@/Components/Carousel/Carousel2.jsx";
import {
    FaFacebookF,
    FaBullhorn,
    FaHandshake,
    FaChartLine,
    FaTwitter,
    FaGoogle,
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaGem,
    FaHome,
    FaEnvelope,
    FaPhone,
    FaPrint,
    FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt
} from "react-icons/fa";
import HeaderComponent from "@/Components/header/HeaderComponent.jsx";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import ProductsComponent from "@/Components/ProductsComponent.jsx";
import CarouselComponent from "@/Components/CarouselComponent.jsx";

export default function Welcome({auth, laravelVersion, phpVersion}) {
    const [scale, setScale] = useState(1);

    const plans = [
        {
            title: 'Atestado Admissional',
            description: '',
            imageSrc: '/images/home/icons/estetoscopio.png',
        },
        {
            title: 'Exames laboratóriais',
            description: '',
            imageSrc: '/images/home/icons/estetoscopio.png',
        },
        {
            title: 'Consultas Médicas',
            description: '',
            imageSrc: '/images/home/icons/estetoscopio.png',
        }
    ];

    const cardVariants = {
        hidden: {opacity: 0, rotate: -10, scale: 0.8},
        visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {type: "spring", stiffness: 120, damping: 12}
        }
    };

    const cards = [
        {id: 1, icon: <FaBullhorn/>, title: "Digital Marketing"},
        {id: 2, icon: <FaChartLine/>, title: "Consulting Services"},
        {id: 3, icon: <FaChartLine/>, title: "Consulting Services"},
        {id: 4, icon: <FaHandshake/>, title: "Business Solutions"}
    ];

    return (
        <>
            <PrimeReactProvider>
                <LayoutProvider>
                    <Head title="Clínica Amor Brasil"/>

                    <HeaderComponent auth={auth}/>

                    <section>
                        <div
                            className="w-full banner flex justify-content-center flex-wrap gap-8"
                            style={{backgroundImage: `url("/images/home/banners.jpg")`}}
                        >
                            <div
                                className='container flex flex-column md:flex-row justify-content-center align-items-center gap-5'>
                                <img className='' width={400} alt='médica' src='/images/home/medica.webp'/>
                                <div className='d-flex flex-column justify-content-center align-items-center gap-5'>
                                    <h1 className='tile text-center font-bold text-white'>
                                        A melhor clínica da região, com qualidade excepcional e preços acessíveis.
                                    </h1>

                                    <a href='#contact' className='btn w-full md:w-13rem'>Entre em contato </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full mt-8">
                        <h2 className='font-bold text-center'>Sobre Nós</h2>
                        <div
                            className='container flex-column md:flex-row rounded about-us p-8 flex justify-content-center align-items-center gap-8'>
                            <div>
                                <img className='rounded' src='/images/home/medical.jpg' width={400} alt='medical'/>
                            </div>

                            <div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.
                                </p>
                                <a href='#contact' className='btn w-full md:w-13rem'>Entre em contato</a>
                            </div>
                        </div>
                    </section>

                    <section className='w-full p-5 mt-5 flex justify-content-center align-items-center caroucel-slider'>
                        <div className='flex gap-5 flex-column md:flex-row align-items-center'>
                            <Carousel2/>
                            <ProductsComponent data={plans}/>
                        </div>
                    </section>

                    <section id="contact" className="contact-section mt-8">
                        <div className="container">
                            <h2 className="text-center section-title">Entre em Contato</h2>
                            <div className="row">
                                {/* Coluna dos Dados de Contato */}
                                <div className="col-md-6 mb-4">
                                    <div className="contact-card p-4">
                                        <h4 className="mb-4">Dados de Contato</h4>
                                        <p>
                                            <i className="bi bi-geo-alt-fill me-2"></i>
                                            <strong>Endereço:</strong> St. Res. Leste | Buritís Q 2 | - Planaltina,
                                            Brasília - DF
                                        </p>
                                        <p>
                                            <i className="bi bi-telephone-fill me-2"></i>
                                            <strong>Telefone:</strong> (61) 99624-6801
                                        </p>
                                        <p>
                                            <i className="bi bi-clock-fill me-2"></i>
                                            <strong>Horário:</strong> Segunda a Sexta: 8h - 19h e aos Sábados: 8h - 12h
                                        </p>
                                        <a href='' className='btn w-full mt-3 md:w-13rem'>Entre em contato</a>
                                    </div>
                                </div>
                                {/* Coluna do Mapa */}
                                <div className="col-md-6">
                                    <div className="map-container rounded shadow">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.122347701234!2d-47.6478812!3d-15.6171571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6d30aa79a461%3A0x811a9a4592f18913!2sCl%C3%ADnica%20Amor%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
                                            title="Localização"
                                            frameBorder="0"
                                            style={{border: 0, width: "100%", height: "295px"}}
                                            allowFullScreen=""
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="float-btn"
                        style={{
                            position: "fixed",
                            bottom: "20px",
                            right: "20px",
                            zIndex: 9999,
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            backgroundColor: "#25D366",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                            transition: "transform 0.6s ease-in-out",
                            transform: `scale(${scale})`,
                        }}
                        onMouseEnter={() => setScale(1.1)}
                        onMouseLeave={() => setScale(1)}
                    >
                        <img src="/images/home/icons/whatsapp.png" width={50} alt="WhatsApp"/>
                    </a>
                    <footer className="text-center mt-8 text-lg-start bg-body-tertiary text-muted">
                        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                            <div className="me-5 d-none d-lg-block">
                                <span>Get connected with us on social networks:</span>
                            </div>
                            <div>
                                <a href="#" className="me-4 text-reset">
                                    <FaFacebookF/>
                                </a>
                                <a href="#" className="me-4 text-reset">
                                    <FaTwitter/>
                                </a>
                                <a href="#" className="me-4 text-reset">
                                    <FaGoogle/>
                                </a>
                                <a href="#" className="me-4 text-reset">
                                    <FaInstagram/>
                                </a>
                                <a href="#" className="me-4 text-reset">
                                    <FaLinkedin/>
                                </a>
                                <a href="#" className="me-4 text-reset">
                                    <FaGithub/>
                                </a>
                            </div>
                        </section>

                        <section>
                            <div className="container text-center text-md-start mt-5">
                                <div className="row mt-3">
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">
                                            <FaGem className="me-3"/> Company name
                                        </h6>
                                        <p>
                                            Here you can use rows and columns to organize your footer content. Lorem
                                            ipsum
                                            dolor sit amet, consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                        <p><a href="#" className="text-reset">Angular</a></p>
                                        <p><a href="#" className="text-reset">React</a></p>
                                        <p><a href="#" className="text-reset">Vue</a></p>
                                        <p><a href="#" className="text-reset">Laravel</a></p>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                        <p><a href="#" className="text-reset">Pricing</a></p>
                                        <p><a href="#" className="text-reset">Settings</a></p>
                                        <p><a href="#" className="text-reset">Orders</a></p>
                                        <p><a href="#" className="text-reset">Help</a></p>
                                    </div>
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                        <p><FaHome className="me-3"/> New York, NY 10012, US</p>
                                        <p><FaEnvelope className="me-3"/> info@example.com</p>
                                        <p><FaPhone className="me-3"/> + 01 234 567 88</p>
                                        <p><FaPrint className="me-3"/> + 01 234 567 89</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                            © 2021 Copyright:
                            <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
                        </div>
                    </footer>
                </LayoutProvider>
            </PrimeReactProvider>
        </>
    );
}
