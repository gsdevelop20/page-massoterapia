import {Head} from '@inertiajs/react';
import {LayoutProvider} from "@/Layouts/layout/context/layoutcontext.jsx";
import {PrimeReactProvider} from "primereact/api";
import { CheckCircle, ArrowDown, MessageCircle } from "lucide-react";
import './style.css';
import React, {useState, useMemo, Suspense, useEffect, useRef} from "react";

// Lazy load dos componentes para melhorar o carregamento inicial
const HeaderComponent = React.lazy(() => import('@/Components/header/HeaderComponent.jsx'));
const ProductsComponent = React.lazy(() => import('@/Components/ProductsComponent.jsx'));
const Card = React.lazy(() => import('@/Components/card/Cards'));

import {
    FaGem,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaClock,
    FaWhatsapp
} from "react-icons/fa";

// Dados estáticos dos planos (definidos fora do componente para evitar recriação)
const plans = [
    {
        title: 'Eletrocardiograma',
        description: '',
        btnClass: 'btn-eletro',
        imageSrc: '/images/home/icons/eletrocardiograma.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar um exame de Eletrocardiograma.'
    },
    {
        title: 'Exame ASO',
        description: '',
        btnClass: 'btn-aso',
        imageSrc: '/images/home/icons/exame-medico.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar um exame ASO.'
    },
    {
        title: 'Exames Laboratoriais',
        description: '',
        btnClass: 'btn-lab',
        imageSrc: '/images/home/icons/exame-de-saude.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar exames laboratoriais.'
    }
];

const cards = [
    {
        title: 'Liberação Miofascial',
        description: '',
        btnClass: 'btn-der',
        imageSrc: '/images/home/icons/planta-cacto.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um dermatologista.'
    },
    {
        title: 'Drenagem Linfática',
        description: '',
        btnClass: 'btn-end',
        imageSrc: '/images/home/icons/planta-cacto.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um endocrinologista.'
    },
    {
        title: 'Massagem Desportiva',
        description: '',
        btnClass: 'btn-gin',
        imageSrc: '/images/home/icons/planta-cacto.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ginecologista.'
    },
    {
        title: 'Massagem Shiatsu',
        description: '',
        btnClass: 'btn-gin',
        imageSrc: '/images/home/icons/planta-cacto.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ginecologista.'
    },
];

// Componente LazyIframe aprimorado para carregar o iframe somente quando estiver na viewport
const LazyIframe = ({src, title, style, ...rest}) => {
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Se IntersectionObserver não for suportado, carrega imediatamente
        if (!('IntersectionObserver' in window)) {
            setIsInView(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.25}
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} style={style}>
            {isInView ? (
                <iframe
                    src={src}
                    title={title}
                    frameBorder="0"
                    style={style}
                    allowFullScreen
                    loading="lazy"
                    {...rest}
                ></iframe>
            ) : (
                <div style={{
                    ...style,
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <span>Carregando avaliações...</span>
                </div>
            )}
        </div>
    );
};

export default function Welcome({auth, laravelVersion, phpVersion}) {
    const [scale, setScale] = useState(1);

    // Memoiza os estilos dos botões para evitar recriações desnecessárias
    const whatsappButtonStyle = useMemo(() => ({
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        width: "70px",
        height: "70px",
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
        bottom: "190px",
        right: "20px",
        zIndex: 9999,
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        backgroundColor: "#e5e5e5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.6s ease-in-out",
        transform: `scale(${scale})`,
    }), [scale]);

    const instaButtonStyle = useMemo(() => ({
        position: "fixed",
        bottom: "103px",
        right: "20px",
        zIndex: 9999,
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        backgroundColor: "#e5e5e5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.6s ease-in-out",
        transform: `scale(${scale})`,
    }), [scale]);

    const styles = {
        section: {
            textAlign: "center",
            padding: "50px",
            backgroundColor: "#f9f5f0",
        },
        title: {
            color: "#1e833d",
            fontSize: "2em",
            fontWeight: "bold",
            textTransform: 'uppercase'
        },
        description: {
            fontSize: "1.2em",
            color: "#ffffff",
            maxWidth: "800px",
            margin: "auto",
        },
        list: {
            padding: 0,
            fontSize: "1.1em",
            color: "#ffffff",
        },
        listItem: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            margin: "8px 0",
        },
        button: {
            display: "inline-flex",
            alignItems: "center",
            padding: "15px 25px",
            fontSize: "1.2em",
            color: "white",
            backgroundColor: "#d37435",
            textDecoration: "none",
            borderRadius: "5px",
            marginTop: "20px",
            border: "none",
            cursor: "pointer",
        },
    };

    return (
        <>
            <PrimeReactProvider>
                <LayoutProvider>
                    <Head title="Msssoterapia"/>

                    {/* Skip link para navegação rápida */}
                    <a href="#main-content" className="skip-link hidden">
                        Pular para o conteúdo principal
                    </a>

                    <Suspense fallback={<div>Carregando...</div>}>
                        <header>
                            <HeaderComponent auth={auth}/>
                        </header>

                        <section className='className'>
                            <div className='w-full flex gap-8 align-items-center justify-content-center' style={{backgroundColor: '#d37435'}}>
                                <div className='w-50'>
                                    <h2 style={styles.title}>🌿 Renove Seu Corpo e Sua Mente com a Massoterapia</h2>
                                    <p style={styles.description}>
                                        Sinta o alívio do estresse e das tensões do dia a dia com nossas{" "}
                                        <strong>massagens terapêuticas</strong>! Cuidar do seu bem-estar não é um luxo,
                                        é uma necessidade.
                                    </p>

                                    <ul style={styles.list} className='mt-5'>
                                        <li style={styles.listItem}>
                                            <CheckCircle size={20} color="#FFFFFF"/> <strong>Alívio imediato do estresse
                                            e ansiedade</strong>
                                        </li>
                                        <li style={styles.listItem}>
                                            <CheckCircle size={20} color="#FFFFFF"/> <strong>Redução de dores musculares
                                            e tensões</strong>
                                        </li>
                                        <li style={styles.listItem}>
                                            <CheckCircle size={20} color="#FFFFFF"/> <strong>Melhora na circulação e na
                                            qualidade do sono</strong>
                                        </li>
                                    </ul>

                                    <button
                                        className="bg-green-700 btn-agendar mt-3 w-5 hover:bg-green-600 text-white border-0 font-bold py-2 px-4 rounded">
                                        AGENDAR AGORA
                                    </button>
                                </div>

                                <div>
                                    <img className="hidden md:block" width={500}
                                         alt="logo w-full clinica Amor Brasil"
                                         src="/images/home/banner.png"/>
                                </div>
                            </div>

                            <img className="hidden md:block" alt="logo w-full clinica Amor Brasil"
                                 src="/images/wave.svg"/>

                            <Card data={cards}/>
                        </section>

                        {/*<main id="main-content">
                             Seção do Banner
                            <section aria-labelledby="banner-heading">
                                <div
                                    className="w-full banner flex justify-content-center flex-wrap gap-8"
                                    style={{backgroundImage: `url("/images/home/banners.webp")`}}
                                    role="img"
                                    aria-label="Banner da Clínica Amor Brasil com imagem de fundo"
                                >
                                    <div
                                        className="container flex flex-column md:flex-row justify-content-center align-items-center gap-5">
                                        <img
                                            src="/images/home/medica.webp"
                                            alt="Médica sorridente representando a Clínica"
                                            className="md:block hidden"
                                            width={400}
                                            height="auto"
                                        />
                                        <div
                                            className="d-flex flex-column justify-content-center align-items-center gap-5">
                                            <h1 id="banner-heading" className="tile text-center font-bold text-white">
                                                Unimos atendimento humanizado a preços que cabem no seu bolso, cuidando de você e de quem você ama
                                            </h1>
                                            <a
                                                href="https://wa.me/5561996246801?text=Olá, vim do site e gostaria de falar com o atendimento!"
                                                className="btn w-full md:w-17rem btn-fale"
                                                aria-label="Entre em contato"
                                            >
                                                FALE CONOSCO
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>

                             Seção Sobre Nós
                            <section className="w-full mt-8" aria-labelledby="about-us-heading">
                                <h2 id="about-us-heading" className="font-bold text-center">
                                    SOBRE NÓS
                                </h2>
                                <div
                                    className="container flex-column md:flex-row rounded about-us p-5 md:p-8 flex justify-content-center align-items-center gap-8">
                                    <div>
                                        <img
                                            className="rounded about-us-img"
                                            src="/images/home/medical.jpg"
                                            width={390}
                                            alt="Equipe médica em ação"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="w-full text-justify">
                                            Na Clínica Amor Brasil, acreditamos que o cuidado com a saúde vai além de
                                            exames e tratamentos. Nosso compromisso é com o bem-estar completo de nossos
                                            pacientes, oferecendo um atendimento humanizado, acolhedor e personalizado.
                                            Nossa missão é proporcionar uma experiência de saúde em que você se sinta
                                            valorizado, escutado e, acima de tudo, cuidado com carinho e respeito.
                                        </p>
                                        <p className="w-full text-justify">
                                            Com uma equipe de profissionais altamente qualificados e infraestrutura
                                            moderna, buscamos sempre as melhores soluções para sua saúde, com um olhar
                                            atento e dedicado a cada necessidade. Na Clínica Amor Brasil, entendemos que
                                            a saúde é um ato de amor, e estamos aqui para cuidar de você com a máxima
                                            atenção e competência.
                                        </p>
                                        <a
                                            href="https://wa.me/5561996246801?text=Olá, vim do site e gostaria de falar com o atendimento!"
                                            className="btn w-full btn-saiba"
                                            aria-label="Entre em contato"
                                        >
                                            SAIBA MAIS
                                        </a>
                                    </div>
                                </div>
                            </section>

                             Seção de Serviços/Produtos
                            <section
                                className="w-full mt-5 banner banner-2 flex justify-content-center align-items-center caroucel-slider"
                                aria-labelledby="services-heading"
                                style={{backgroundImage: 'url("/images/home/hospital.webp")'}}
                            >
                                <h2 id="services-heading" className="visually-hidden" style={{zIndex: 1}}>
                                    Nossos Serviços
                                </h2>
                                <div className="flex gap-5 flex-column md:flex-row align-items-center"
                                     style={{zIndex: 1}}>
                                    <ProductsComponent data={plans}/>
                                </div>
                            </section>

                            <Card data={cards}/>

                             Seção de Contato
                            <section id="contato" className="contact-section mt-8" aria-labelledby="contact-heading">
                                <div className="container">
                                    <h2 id="contact-heading" className="text-center section-title">
                                        Não perca tempo e agende sua consulta
                                    </h2>
                                    <div className="row">
                                         Coluna dos Dados de Contato
                                        <div className="col-md-6 mb-4">
                                            <div className="contact-card p-4">
                                                <h4 className="mb-4">CONTATO</h4>
                                                <address>
                                                    <p>
                                                        <FaMapMarkerAlt aria-hidden="true" className="me-2"/>
                                                        <strong>Endereço:</strong> Qd 02, Conj. D, Lote 40, Loja 01,
                                                        Vila Buritis, Planaltina/DF
                                                    </p>
                                                    <p>
                                                        <FaPhoneAlt aria-hidden="true" className="me-2"/>
                                                        <strong>Telefone:</strong> (61) 3489-3571
                                                    </p>
                                                    <p>
                                                        <FaWhatsapp aria-hidden="true" className="me-2"/>
                                                        <strong>WhatsApp:</strong> (61) 99624-6801
                                                    </p>
                                                    <p>
                                                        <FaClock aria-hidden="true" className="me-2"/>
                                                        <strong>Horário:</strong> Segunda a Sexta: 08h às 19h Sábados:
                                                        08h às 12h
                                                    </p>
                                                </address>
                                                <a
                                                    href="tel:556134893571"
                                                    className="btn w-full mt-3 md:w-13rem btn-lig"
                                                    aria-label="Ligar para a Clínica"
                                                >
                                                    Ligue agora
                                                </a>
                                            </div>
                                        </div>
                                         Coluna do Mapa/Avaliações (LazyIframe)
                                        <div className="col-md-6">
                                            <div className="map-container rounded shadow">
                                                <LazyIframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.122347701234!2d-47.6478812!3d-15.6171571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6d30aa79a461%3A0x811a9a4592f18913!2sCl%C3%ADnica%20Amor%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
                                                    title="Avaliações do Google"
                                                    style={{border: 0, width: "100%", height: "340px"}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                             Seção de Avaliações (LazyIframe para performance)
                            <section className="w-full mt-8">
                                <h2 id="services-heading" className="text-center section-title" style={{zIndex: 1}}>
                                    AVALIAÇÕES
                                </h2>
                                <div className="map-container rounded">
                                    <LazyIframe
                                        src="https://24bf17270e424b5b831c36886639bc16.elf.site"
                                        title="Avaliações do Google"
                                        style={{border: 0, width: "100%", height: "340px"}}
                                    />
                                </div>
                            </section>
                        </main>

                         Botões Flutuantes
                        <a
                            href="https://wa.me/5561996246801?text=Olá, vim do site e gostaria de falar com o atendimento!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="float-btn btn-whats"
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
                            className="float-btn btn-inst"
                            style={instaButtonStyle}
                            onMouseEnter={() => setScale(1.1)}
                            onMouseLeave={() => setScale(1)}
                            aria-label="Perfil no Instagram"
                        >
                            <img
                                src="/images/home/icons/instagram.png"
                                width={50}
                                alt="Ícone do Instagram"
                            />
                        </a>

                        <a
                            href="tel:556134893571"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="float-btn btn-cha"
                            style={instagramButtonStyle}
                            onMouseEnter={() => setScale(1.1)}
                            onMouseLeave={() => setScale(1)}
                            aria-label="Ligar para a Clínica"
                        >
                            <img
                                src="/images/home/icons/telefone.png"
                                width={45}
                                alt="Ícone do Telefone"
                            />
                        </a>

                        <footer className="text-center mt-8 text-lg-start bg-body-tertiary text-muted"
                                role="contentinfo">
                            <section
                                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                                aria-label="Redes sociais"
                            >
                                <div className="d-none w-full d-lg-block flex justify-content-center">
                                    <img
                                        className="hidden md:block"
                                        width={150}
                                        alt="logo clinica Amor Brasil"
                                        src="/images/logo/logo.jpg"
                                    />
                                </div>
                            </section>

                            <section>
                                <div className="container text-center text-md-start mt-5">
                                    <div className="row mt-3">
                                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                            <h6 className="text-uppercase fw-bold mb-4">
                                                <FaGem aria-hidden="true" className="me-3"/>
                                                Clínica Amor Brasil
                                            </h6>
                                            <p>
                                                A melhor clínica, com qualidade excepcional e preços acessíveis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                                <div className="text-reset fw-bold">
                                    © 2025 Copyright: Feito por <a href="https://zionpublicidade.com">Zion
                                    Publicidade.</a> Todos os direitos reservados.
                                </div>
                            </div>
                        </footer>*/}
                    </Suspense>
                </LayoutProvider>
            </PrimeReactProvider>
        </>
    );
}
