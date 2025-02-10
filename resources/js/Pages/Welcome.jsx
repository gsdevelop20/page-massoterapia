import { Link, Head } from '@inertiajs/react';
import { LayoutProvider } from "@/Layouts/layout/context/layoutcontext.jsx";
import { PrimeReactProvider } from "primereact/api";
import './style.css';
import React, {useState, useMemo, Suspense, useEffect} from "react";

// Lazy load dos componentes para melhorar o carregamento inicial
const HeaderComponent = React.lazy(() => import('@/Components/header/HeaderComponent.jsx'));
const Carousel2 = React.lazy(() => import('@/Components/Carousel/Carousel2.jsx'));
const ProductsComponent = React.lazy(() => import('@/Components/ProductsComponent.jsx'));
const Card = React.lazy(() => import('@/Components/card/Cards'));

import {
    FaInstagram,
    FaGem,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaClock
} from "react-icons/fa";

// Dados estáticos dos planos (definidos fora do componente para evitar recriação)
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

const cards = [
    {
        title: 'Ortopedia ',
        description: '',
        imageSrc: '/images/home/icons/simbolo-de-medicina.png',
    },
    {
        title: 'Dermatologia',
        description: '',
        imageSrc: '/images/home/icons/simbolo-de-medicina.png',
    },
    {
        title: 'Pediatria',
        description: '',
        imageSrc: '/images/home/icons/simbolo-de-medicina.png',
    }
];

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [scale, setScale] = useState(1);

    // Memoiza o objeto de estilo do botão do WhatsApp para evitar recriações a cada render
    const whatsappButtonStyle = useMemo(() => ({
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
    }), [scale]);

    const instagramButtonStyle = useMemo(() => ({
        position: "fixed",
        bottom: "120px",
        right: "20px",
        zIndex: 9999,
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#ff387f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.6s ease-in-out",
        transform: `scale(${scale})`,
    }), [scale]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);


    return (
        <>
            <PrimeReactProvider>
                <LayoutProvider>
                    <Head title="Clínica Amor Brasil" />

                    {/* Link para pular a navegação para o conteúdo principal */}
                    <a href="#main-content" className="skip-link hidden">
                        Pular para o conteúdo principal
                    </a>

                    <Suspense fallback={<div>Carregando...</div>}>
                        <header>
                            <HeaderComponent auth={auth} />
                        </header>

                        <main id="main-content">
                            {/* Seção do Banner */}
                            <section aria-labelledby="banner-heading">
                                <div
                                    className="w-full banner flex justify-content-center flex-wrap gap-8"
                                    style={{backgroundImage: `url("/images/home/banners.jpg")`}}
                                    role="img"
                                    aria-label="Banner da Clínica Amor Brasil com imagem de fundo"
                                >
                                    <div
                                        className="container flex flex-column md:flex-row justify-content-center align-items-center gap-5">
                                        <img
                                            src="/images/home/medica.webp"
                                            alt="Médica sorridente representando a Clínica"
                                            width={400}
                                        />
                                        <div
                                            className="d-flex flex-column justify-content-center align-items-center gap-5">
                                            <h1 id="banner-heading" className="tile text-center font-bold text-white">
                                                A melhor clínica da região, com qualidade excepcional e preços
                                                acessíveis.
                                            </h1>
                                            <a
                                                href="#contato"
                                                className="btn w-full md:w-13rem"
                                                aria-label="Entre em contato"
                                            >
                                                Entre em contato
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Seção Sobre Nós */}
                            <section className="w-full mt-8" aria-labelledby="about-us-heading">
                                <h2 id="about-us-heading" className="font-bold text-center">Sobre Nós</h2>
                                <div
                                    className="container flex-column md:flex-row rounded about-us p-5 md:p-8 flex justify-content-center align-items-center gap-8">
                                    <div>
                                        <img
                                            className="rounded"
                                            src="/images/home/medical.jpg"
                                            width={400}
                                            alt="Equipe médica em ação"
                                            loading="lazy"  // Lazy load para imagens
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <p className='w-full'>
                                            Na Amor Saúde, acreditamos que o cuidado com a saúde vai além de exames e
                                            tratamentos. Nosso compromisso é com o bem-estar completo de nossos
                                            pacientes, oferecendo um atendimento humanizado, acolhedor e personalizado.
                                            Nossa missão é proporcionar uma experiência de saúde em que você se sinta
                                            valorizado, escutado e, acima de tudo, cuidado com carinho e respeito.
                                        </p>
                                        <p className='w-full'>
                                            Com uma equipe de profissionais altamente qualificados e infraestrutura
                                            moderna, buscamos sempre as melhores soluções para sua saúde, com um olhar
                                            atento e dedicado a cada necessidade. Na Amor Saúde, entendemos que a saúde
                                            é um ato de amor, e estamos aqui para cuidar de você com a máxima atenção e
                                            competência.
                                        </p>
                                        <a
                                            href="#contato"
                                            className="btn w-full"
                                            aria-label="Entre em contato"
                                        >
                                            Entre em contato
                                        </a>
                                    </div>
                                </div>
                            </section>

                            {/* Seção de Serviços/Produtos */}
                            <section
                                className="w-full mt-5 banner banner-2 flex justify-content-center align-items-center caroucel-slider"
                                aria-labelledby="services-heading"
                                style={{backgroundImage: 'url("/images/home/hospital.jpg")'}}
                            >
                                <h2 id="services-heading" className="visually-hidden" style={{zIndex: 1}}>
                                    Nossos Serviços
                                </h2>
                                <div className="flex gap-5 flex-column md:flex-row align-items-center"
                                     style={{zIndex: 1}}>
                                    <Carousel2/>
                                    <ProductsComponent data={plans}/>
                                </div>
                            </section>

                            <Card data={cards}/>

                            {/* Seção de Contato */}
                            <section id="contato" className="contact-section mt-8" aria-labelledby="contact-heading">
                                <div className="container">
                                    <h2 id="contact-heading" className="text-center section-title">
                                        Não perca tempo e agende sua consulta
                                    </h2>
                                    <div className="row">
                                        {/* Coluna dos Dados de Contato */}
                                        <div className="col-md-6 mb-4">
                                            <div className="contact-card p-4">
                                                <h4 className="mb-4">Dados de Contato</h4>
                                                <address>
                                                    <p>
                                                        <FaMapMarkerAlt aria-hidden="true" className="me-2"/>
                                                        <strong>Endereço:</strong> St. Res. Leste | Buritís Q 2 | -
                                                        Planaltina, Brasília - DF
                                                    </p>
                                                    <p>
                                                        <FaPhoneAlt aria-hidden="true" className="me-2"/>
                                                        <strong>Telefone:</strong> (61) 99624-6801
                                                    </p>
                                                    <p>
                                                        <FaClock aria-hidden="true" className="me-2"/>
                                                        <strong>Horário:</strong> Segunda a Sexta: 8h - 19h e aos
                                                        Sábados: 8h - 12h
                                                    </p>
                                                </address>
                                                <a
                                                    href="tel:5561996246801"
                                                    className="btn w-full mt-3 md:w-13rem"
                                                    aria-label="Ligar para a Clínica"
                                                >
                                                    Ligue agora
                                                </a>
                                            </div>
                                        </div>
                                        {/* Coluna do Mapa */}
                                        <div className="col-md-6">
                                            <div className="map-container rounded shadow">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.122347701234!2d-47.6478812!3d-15.6171571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6d30aa79a461%3A0x811a9a4592f18913!2sCl%C3%ADnica%20Amor%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
                                                    title="Localização da Clínica Amor Brasil"
                                                    frameBorder="0"
                                                    style={{border: 0, width: "100%", height: "295px"}}
                                                    allowFullScreen=""
                                                    loading="lazy"  // Lazy load para o iframe
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className='w-full mt-8'>
                                <h2 id="services-heading" className='text-center section-title' style={{zIndex: 1}}>
                                    Avaliações
                                </h2>
                                <div className="elfsight-app-24bf1727-0e42-4b5b-831c-36886639bc16 container reviwer"
                                     data-elfsight-app-lazy></div>
                            </section>
                        </main>

                        {/* Botão flutuante do WhatsApp */}
                        <a
                            href="https://wa.me/5561996246801"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="float-btn"
                            style={whatsappButtonStyle}
                            onMouseEnter={() => setScale(1.1)}
                            onMouseLeave={() => setScale(1)}
                            aria-label="Chat via WhatsApp"
                        >
                            <img
                                src="/images/home/icons/whatsapp.png"
                                width={50}
                                alt="Ícone do WhatsApp"
                            />
                        </a>

                        <a
                            href="https://www.instagram.com/clinicaamorbrasil/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="float-btn"
                            style={instagramButtonStyle}
                            onMouseEnter={() => setScale(1.1)}
                            onMouseLeave={() => setScale(1)}
                            aria-label="Instagram"
                        >
                            <img
                                src="/images/home/icons/instagram.png"
                                width={50}
                                alt="Ícone do WhatsApp"
                            />
                        </a>

                        <footer className="text-center mt-8 text-lg-start bg-body-tertiary text-muted"
                            role="contentinfo">
                            <section
                                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                                aria-label="Redes sociais"
                            >
                                <div className="me-5 d-none d-lg-block">
                                    <span>Conecte-se conosco nas redes sociais:</span>
                                </div>
                                <div>
                                    <a href="https://www.instagram.com/clinicaamorbrasil/" className="me-4 text-reset" aria-label="Instagram">
                                        <FaInstagram aria-hidden="true" />
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                </div>
                            </section>

                            <section>
                                <div className="container text-center text-md-start mt-5">
                                    <div className="row mt-3">
                                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                            <h6 className="text-uppercase fw-bold mb-4">
                                                <FaGem aria-hidden="true" className="me-3" />
                                                Clínica Amor Brasil
                                            </h6>
                                            <p>
                                                A melhor clínica da região, com qualidade excepcional e preços
                                                acessíveis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                                <div className="text-reset fw-bold">
                                    © 2025 Copyright: Clínica Amor Brasil
                                </div>
                            </div>
                        </footer>
                    </Suspense>
                </LayoutProvider>
            </PrimeReactProvider>
        </>
    );
}
