import {Link, Head} from '@inertiajs/react';
import {LayoutContext, LayoutProvider} from "@/Layouts/layout/context/layoutcontext.jsx";
import {PrimeReactProvider} from "primereact/api";
import React, {useContext, useState} from "react";
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
import HeaderComponent from "@/Components/HeaderComponent.jsx";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import ProductsComponent from "@/Components/ProductsComponent.jsx";
import CarouselComponent from "@/Components/CarouselComponent.jsx";

export default function Welcome({auth, laravelVersion, phpVersion}) {
    const [scale, setScale] = useState(1);

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
                    <Head title="Welcome"/>
                    <HeaderComponent auth={auth}/>

                    <section
                        className="w-100 flex align-items-center p-8"
                        style={{
                            marginTop: "2rem",
                            backgroundImage: "url('/images/home/fundo.jpg')",
                        }}
                    >
                        <div className="container mx-auto flex md:flex-row flex-column gap-6 align-items-center"
                             style={{marginTop: "3rem"}}>
                            {/* Texto */}
                            <motion.div
                                className="flex flex-column gap-6 justify-content-center align-items-center"
                                initial={{opacity: 0, y: 50}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.8}}
                            >
                                <h1 className="text-center">Cuidando da Sua Saúde com Excelência e Humanização</h1>
                                <motion.a
                                    className="btn btn-warning"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                >
                                    Entre em contato
                                </motion.a>
                            </motion.div>

                            {/* Imagem */}
                            <motion.div
                                initial={{opacity: 0, x: 50}}
                                animate={{opacity: 1, x: 0}}
                                transition={{duration: 0.8, delay: 0.2}}
                            >
                                <img
                                    className="w-full img-fluid"
                                    src="/images/home/medical.jpg"
                                    alt=""
                                    style={{maxHeight: "45rem", borderRadius: "20px"}}
                                />
                            </motion.div>
                        </div>
                    </section>

                    <ProductsComponent data={plans}/>

                    <section className='w-full p-5 mt-8 ' style={{background: '#00c3ea'}}>
                        <div className=' flex justify-content-center align-items-center'>
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

                    <section className='mt-8 p-7' style={{backgroundImage: "url('/images/home/fundo.jpg')"}}>
                        <div className="container mx-auto mt-5">
                            <div className="flex justify-content-center align-items-center flex-wrap gap-8 ">
                                {/* Informações de Contato */}
                                <div className="card p-4 shadow-lg">
                                    <h2 className="mb-4">Entre em Contato</h2>
                                    <p>
                                        <FaMapMarkerAlt className="text-danger"/> <strong>Endereço:</strong> Rua
                                        Exemplo, 123 - São Paulo, SP
                                    </p>
                                    <p>
                                        <FaPhoneAlt className="text-primary"/> <strong>Telefone:</strong> <a
                                        href="tel:+5511999999999">(11) 99999-9999</a>
                                    </p>
                                    <p>
                                        <FaEnvelope className="text-warning"/> <strong>Email:</strong> <a
                                        href="mailto:contato@empresa.com">contato@empresa.com</a>
                                    </p>
                                    <a href="https://wa.me/5511999999999" className="btn btn-success">
                                        <FaWhatsapp/> Fale pelo WhatsApp
                                    </a>
                                </div>


                                {/* Google Maps */}
                                <div className="ratio ratio-16x9 rounded shadow-lg " style={{width: '60%'}}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509366!2d144.95373531590465!3d-37.81627974202102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df0f56eaf%3A0x6f34a5c8b6f9e!2sMelbourne%2C%20VIC%2C%20Austr%C3%A1lia!5e0!3m2!1spt-BR!2sbr!4v1648903832123!5m2!1spt-BR!2sbr"
                                        allowFullScreen
                                        loading="lazy"
                                        title="Google Maps"
                                    ></iframe>
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
