import {Head, Link} from '@inertiajs/react';
import {LayoutProvider} from "@/Layouts/layout/context/layoutcontext.jsx";
import {PrimeReactProvider} from "primereact/api";
import {CheckCircle} from "lucide-react";
import './style.css';
import React, {useState, useMemo, Suspense, useEffect, useRef} from "react";

// Lazy load dos componentes para melhorar o carregamento inicial
const HeaderComponent = React.lazy(() => import('@/Components/header/HeaderComponent.jsx'));
const Card = React.lazy(() => import('@/Components/card/Cards'));
const Carousel = React.lazy(() => import('@/Components/Carousel/Carousel'));
const CardAboutUs = React.lazy(() => import('@/Components/card-about-us/Cards'));

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
        title: '⭐⭐⭐⭐⭐ Incrível! Me senti renovado(a)!',
        description: '"Fiz minha primeira sessão de massoterapia e foi simplesmente transformador! Saí completamente relaxado(a) e com as dores musculares muito reduzidas. Já agendei minha próxima sessão! Super recomendo!" — Rodrigo S.',
        btnClass: 'btn-eletro',
        imageSrc: '/images/home/icons/exame-de-saude.png',
    },
    {
        title: '⭐⭐⭐⭐⭐ Alívio imediato das tensões!',
        description: '"Tenho uma rotina muito estressante e sempre senti dores nas costas. Depois da massagem, senti um alívio imediato! Meu sono também melhorou muito. Experiência maravilhosa!" — Lucas T.',
        btnClass: 'btn-aso',
        imageSrc: '/images/home/icons/exame-de-saude.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar um exame ASO.'
    },
    {
        title: '⭐⭐⭐⭐⭐ Atendimento impecável e muito relaxante!',
        description: '"Além do ambiente ser super aconchegante, a massoterapeuta foi extremamente profissional e cuidadosa. Me senti completamente à vontade e relaxada durante a sessão. Vale cada minuto!" — Carla M.' +
            '— Fernanda L.',
        btnClass: 'btn-lab',
        imageSrc: '/images/home/icons/exame-de-saude.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar exames laboratoriais.'
    },
    {
        title: '⭐⭐⭐⭐⭐ Melhor escolha para cuidar de mim!',
        description: '"Achei que massagem era só um luxo, mas percebi que é essencial para minha saúde e bem-estar. Depois da primeira sessão, já senti menos estresse e muito mais disposição. Excelente atendimento!"\n' +
            '— Juliana P.',
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
        imageSrc: '/images/home/icons/massagem-facial.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um dermatologista.'
    },
    {
        title: 'Drenagem Linfática',
        description: '',
        btnClass: 'btn-end',
        imageSrc: '/images/home/icons/massagem-facial.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um endocrinologista.'
    },
    {
        title: 'Massagem Desportiva',
        description: '',
        btnClass: 'btn-gin',
        imageSrc: '/images/home/icons/massagem-facial.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ginecologista.'
    },
    {
        title: 'Massagem Shiatsu',
        description: '',
        btnClass: 'btn-gin',
        imageSrc: '/images/home/icons/massagem-facial.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ginecologista.'
    },
    {
        title: 'Auriculoterapia',
        description: '',
        btnClass: 'btn-gin',
        imageSrc: '/images/home/icons/massagem-facial.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ginecologista.'
    },
    {
        title: 'Massagem Relaxante',
        description: '',
        btnClass: 'btn-gin',
        imageSrc: '/images/home/icons/massagem-facial.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ginecologista.'
    },
    {
        title: 'Acupuntura',
        description: '',
        btnClass: 'btn-gin',
        imageSrc: '/images/home/icons/massagem-facial.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ginecologista.'
    },
    {
        title: 'Massagem Terapeutica',
        description: '',
        btnClass: 'btn-gin',
        imageSrc: '/images/home/icons/massagem-facial.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ginecologista.'
    },
    {
        title: 'Pedras Quentes',
        description: '',
        btnClass: 'btn-gin',
        imageSrc: '/images/home/icons/massagem-facial.png',
        url: 'https://wa.me/5561996246801?text=Olá, gostaria de agendar uma consulta com um ginecologista.'
    },
];

const cardAboutUsData = [
    {
        title: '1,000+',
        description: 'Pacientes Atendidos',
    },
    {
        title: '100+',
        description: 'Planos de Saúde',
    },
    {
        title: '28+',
        description: 'Anos de Experiência',
    },
    {
        title: '97%',
        description: 'Pacientes Satisfeitos',
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
    const styles = {
        section: {
            textAlign: "center",
            padding: "50px",
            backgroundColor: "#f9f5f0",
        },
        title: {
            color: "#ffffff",
            fontSize: "2.6em",
            fontWeight: "bold",
            textTransform: 'uppercase',
        },
        description: {
            fontSize: "1.4em",
            color: "#ffffff",
            maxWidth: "800px",
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
                    <Head title="Massoterapia"/>

                    {/* Skip link para navegação rápida */}
                    <a href="#main-content" className="skip-link hidden">
                        Pular para o conteúdo principal
                    </a>

                    <Suspense fallback={<div>Carregando...</div>}>
                        <header>
                            <HeaderComponent auth={auth}/>
                        </header>

                        <section className='w-full position-relative' style={{bottom: "2px"}}>
                            <div
                                className='w-full flex p-4 md:p-5  flex-column-reverse md:flex-row overflow-hidden gap-8 align-items-center justify-content-center'
                                style={{backgroundColor: '#537859', border: "solid 4px #537859"}}>
                                <div
                                    className='section-info d-flex align-items-center justify-content-center flex-column'>
                                    <h2 style={styles.title} className='text-center'>Renove Seu Corpo e Sua Mente com a
                                        Massoterapia!</h2>
                                    <img className="section-1-img-mobile hidden w-100 mb-3"
                                         style={{Width: "60%"}}
                                         alt=" imagem de massagem"
                                         src="/images/home/banner.png"/>

                                    <button
                                        onClick={(e) => window.open('https://wa.me/55993845772?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20massoterapia.%20Poderia%20me%20informar%20os%20horários%20disponíveis?', '_blank')}
                                        style={{fontSize: '22px', backgroundColor: '#d37435'}}
                                        className="btn-agendar mt-5 md:w-5 w-full text-white border-0 font-bold py-2 px-4 rounded">
                                        AGENDAR AGORA
                                    </button>
                                </div>

                                <img className="section-1-img hidden" width={700}
                                     style={{Width: "60%"}}
                                     alt="logo w-full  clinica Amor Brasil"
                                     src="/images/home/banner.png"/>
                            </div>

                            <img
                                className="position-relative"
                                style={{bottom: '2px'}}
                                alt="logo w-full clinica Amor Brasil"
                                src="/images/wave.svg"/>

                        </section>

                        <Carousel data={cards}/>

                        <section className="mt-2rem" style={{marginTop: "7rem"}}>
                            <div
                                className='w-full flex p-4 md:p-5 flex-column-reverse md:flex-row overflow-hidden gap-8 align-items-center justify-content-center'
                                style={{backgroundColor: '#537859', border: "solid 4px #537859"}}>
                                <div className='section-info d-flex flex-column gap-3'>
                                    <h2 style={styles.title}>Restaure Seu Bem-Estar!!</h2>

                                    <ul style={styles.list} className='mt-5'>
                                        <li style={styles.listItem}>
                                            <CheckCircle size={20} color="#FFFFFF"/> <strong>Alívio do estresse
                                            e ansiedade – Sinta-se mais leve e relaxado(a)</strong>
                                        </li>
                                        <li style={styles.listItem}>
                                            <CheckCircle size={20} color="#FFFFFF"/> <strong>Diminuição de tensões e
                                            dores musculares – Ideal para quem sofre com rotina intensa</strong>
                                        </li>
                                        <li style={styles.listItem}>
                                            <CheckCircle size={20} color="#FFFFFF"/> <strong>Melhoria na circulação
                                            sanguínea e qualidade do sono – Desperte mais revigorado(a)</strong>
                                        </li>
                                        <li style={styles.listItem}>
                                            <CheckCircle size={20} color="#FFFFFF"/> <strong>Aumento da disposição e
                                            equilíbrio emocional – Mais energia para o seu dia a dia
                                        </strong>
                                        </li>
                                    </ul>

                                    <button
                                        onClick={(e) => window.open('https://wa.me/55993845772?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20massoterapia.%20Poderia%20me%20informar%20os%20horários%20disponíveis?', '_blank')}
                                        className="btn-agendar-2 mt-3 md:w-4 w-full text-white border-0 font-bold py-2 px-4 rounded"
                                        style={{fontSize: '15px', backgroundColor: '#d37435'}}
                                    >
                                        AGENDAR AGORA
                                    </button>
                                </div>

                                <video
                                    src="/images/home/135151-761273523_tiny.mp4"
                                    className='video'
                                    style={{borderRadius: "20px"}}
                                    autoPlay
                                    muted
                                    loop
                                ></video>
                            </div>
                        </section>

                        <section className='about-us w-100 flex align-items-center'
                                 style={{
                                     backgroundColor: '#f7f7f7'
                                 }}
                        >
                            <div
                                className='flex flex-column gap-8 md:gap-0 md:flex-row align-items-center container mt-8 mb-8'
                            >
                                <CardAboutUs data={cardAboutUsData} />

                                <div className='abount-us-info  gap-2 flex flex-column w-75'>
                                    <span
                                        className='h3 font-bold'
                                        style={{color: '#537859'}}
                                    > Atendimento humanizado interdisciplinar com foco no paciente e em sua transformação.</span>
                                    <p>
                                        O trabalho desenvolvido por nossas especialidades se dá de forma integrada e
                                        qualitativa, aqui temos a coragem em aceitar o desafio de olhar para a saúde com
                                        foco no bem estar e não na doença, buscando estratégias para lidar com a sua
                                        realidade.
                                    </p>
                                    <button
                                        onClick={(e) => window.open('https://wa.me/55993845772?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20massoterapia.%20Poderia%20me%20informar%20os%20horários%20disponíveis?', '_blank')}
                                        className="btn-agendar-3 mt-3 md:w-4 w-full hover:bg-green-600 text-white border-0 font-bold py-2 px-4 rounded"
                                        style={{fontSize: '15px', backgroundColor: '#d37435'}}
                                    >
                                        AGENDAR AGORA
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className='mt-8'>
                            <h2 id="products-heading" className="h1 font-bold text-center text-orange-600">
                                AVALIAÇÕES
                            </h2>
                            <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25531714' frameBorder='0'
                                    width='100%' height='400'></iframe>
                        </section>

                        <footer className="text-center text-lg-start bg-body-tertiary text-muted \"
                                role="contentinfo"
                                style={{marginTop: "15rem"}}>
                            <div className="text-center p-4" style={{backgroundColor: "#c1c1c1"}}>
                                <div className="text-reset fw-bold text-white">
                                    © 2025 Copyright: Feito por <a className="text-green-800"
                                                                   href="https://zionpublicidade.com">Zion
                                    Publicidade.</a> Todos os direitos reservados.
                                </div>
                            </div>
                        </footer>
                    </Suspense>
                </LayoutProvider>
            </PrimeReactProvider>
        </>
    );
}
