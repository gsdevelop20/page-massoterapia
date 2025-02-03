import {Link, Head} from '@inertiajs/react';
import {LayoutContext, LayoutProvider} from "@/Layouts/layout/context/layoutcontext.jsx";
import {PrimeReactProvider} from "primereact/api";
import React, {useContext} from "react";
import { FaFacebookF,FaBullhorn, FaHandshake, FaChartLine, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from "react-icons/fa";
import HeaderComponent from "@/Components/HeaderComponent.jsx";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import ProductsComponent from "@/Components/ProductsComponent.jsx";
import CarouselComponent from "@/Components/CarouselComponent.jsx";

export default function Welcome({auth, laravelVersion, phpVersion}) {
    const plans = [
        {
            title: 'Standard plan',
            description: 'The standard plan is the best option for those who want to start their business.',
            imageSrc: '/images/home/icons/box.png',
        },
        {
            title: 'Standard plan',
            description: 'The standard plan is the best option for those who want to start their business.',
            imageSrc: '/images/home/icons/box.png',
        },
        {
            title: 'Standard plan',
            description: 'The standard plan is the best option for those who want to start their business.',
            imageSrc: '/images/home/icons/box.png',
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, rotate: -10, scale: 0.8 },
        visible: {
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 120, damping: 12 }
        }
    };

    const cards = [
        { id: 1, icon: <FaBullhorn />, title: "Digital Marketing" },
        { id: 2, icon: <FaChartLine />, title: "Consulting Services" },
        { id: 3, icon: <FaChartLine />, title: "Consulting Services" },
        { id: 4, icon: <FaHandshake />, title: "Business Solutions" }
    ];

    return (
        <>
            <PrimeReactProvider>
                <LayoutProvider>
                    <Head title="Welcome"/>
                    <HeaderComponent auth={auth}/>

                    <section className="container-slider w-100 border-bottom border-warning border-4">
                        <img className='w-full img-fluid' src='/images/home/arquitetura.jpg' alt=''
                             style={{maxHeight: '45rem'}}/>
                    </section>

                    <ProductsComponent data={plans}/>

                    <section className='w-full p-4 pt-8 pb-8 mt-8 bg-warning'>
                        <div className='container flex justify-content-center align-items-center'>
                            <CarouselComponent/>
                        </div>
                    </section>
                    <section className="py-16 mt-8 p-5">
                        <div className="container mx-auto px-4 flex flex-column items-center gap-8">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
                            </div>

                            <div className="flex flex-wrap justify-content-center gap-8 w-full">
                                {cards.map((card, index) => {
                                    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.2});

                                    return (
                                        <motion.div
                                            key={card.id}
                                            ref={ref}
                                            className="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
                                            variants={cardVariants}
                                            initial="hidden"
                                            animate={inView ? "visible" : "hidden"}
                                        >
                                            <div className="text-blue-500 text-5xl mb-4">{card.icon}</div>
                                            <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                                            <p className="text-gray-600">
                                                Short description for the ones who look for something new
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
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
