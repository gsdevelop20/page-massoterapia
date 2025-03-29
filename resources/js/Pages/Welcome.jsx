import {Head} from '@inertiajs/react';
import {LayoutProvider} from "@/Layouts/layout/context/layoutcontext.jsx";
import {PrimeReactProvider} from "primereact/api";
import {CheckCircle} from "lucide-react";
import './style.css';
import React, {useState, useMemo, Suspense, useEffect, useRef} from "react";
import {FaClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp} from "react-icons/fa";

// Lazy load dos componentes para melhorar o carregamento inicial
const Carousel = React.lazy(() => import('@/Components/Carousel/Carousel'));
const CarouselImg = React.lazy(() => import('@/Components/CarouselImg/CarouselImg'));

const cards = [
    {
        "title": "Liberação Miofascial",
        "description": "É uma técnica preventiva de lesões e alívio de dores musculares, Que aplica pressão em alguns pontos do corpo a fim de liberar a fáscia do músculo. É feita de maneira manual, com a manipulação de" +
            "tecidos por meio de deslizamento, apoios e pressões.",
        "price": "R$110.00* - 30 min",
        "btnClass": "btn-mio",
        "imageSrc": "/images/home/icons/massagem-facial.png",
        "url": "https://wa.me/+556193845772?text=Olá, gostaria de agendar uma sessão de Liberação Miofascial.",
        "modalImage" : '/images/home/massagem/man-being-given-back-massage-by-physiotherapist-compressed.webp'
    },
    {
        "title": "Drenagem Linfática",
        "description": "A função da drenagem linfática é mobilizar a linfa que fica acumulada entre as células e encaminhá-la de volta aos gânglios, melhorando o transporte pelos vasos linfáticos, favorecendo a eliminação de toxinas e metabólitos, diminuindo o inchaço, edemas e celulite." ,
        "price": "R$220.00* - 50 min",
        "btnClass": "btn-dren",
        "imageSrc": "/images/home/icons/massagem-facial.png",
        "url": "https://wa.me/+556193845772?text=Olá, gostaria de agendar uma sessão de Drenagem Linfática.",
        "modalImage" : '/images/home/massagem/woman-receiving-belly-massage-spa-salon-_1_-compressed.webp'
    },

    {
        "title": "Ventosaterapia",
        "description": "É uma técnica alternativa que melhorar a circulação sanguínea, elimina as contraturas musculares promovendo assim o relaxamento do corpo e da mente." ,
        "price": "R$100.00* - 10 a 15 min",
        "btnClass": "btn-vent",
        "imageSrc": "/images/home/icons/massagem-facial.png",
        "url": "https://wa.me/+556193845772?text=Olá, gostaria de agendar uma sessão Ventosaterapia.",
        "modalImage" : '/images/home/massagem/client-with-suction-cup-process-compressed.webp'
    },
    {
        "title": "Massagem Desportiva",
        "description": "A massagem desportiva é uma importante forma para tratar a tensão muscular de atletas ou praticantes de exercícios, podendo ser utilizada com regularidade para ajudar a prevenir lesões por esgotamento.",
        "btnClass": "btn-desp",
        "price": 'R$ 170,00* - 50min',
        "imageSrc": "/images/home/icons/massagem-facial.png",
        "url": "https://wa.me/+556193845772?text=Olá, gostaria de agendar uma sessão de Massagem Desportiva.",
        "modalImage" : '/images/home/massagem/man-being-given-back-massage-by-physiotherapist-compressed.webp'
    },
    {
        "title": "Massagem Shiatsu",
        "description": "É uma massagem de origem oriental energética que trata doenças e distúrbios de forma natural e segura. São feitas pressões em pontos específicos do corpo que traz benefícios incríveis",
        "btnClass": "btn-shi",
        "price": 'R$ 150,00* - 50 min',
        "imageSrc": "/images/home/icons/massagem-facial.png",
        "url": "https://wa.me/+556193845772?text=Olá, gostaria de agendar uma sessão de Massagem Shiatsu.",
        "modalImage" : '/images/home/massagem/woman-receiving-belly-massage-spa-salon-_1_-compressed.webp'
    },
    {
        "title": "Auriculoterapia",
        "description": "É uma técnica que consiste na aplicação de pressão em pontos específicos da orelha para auxiliar no tratamento de enxaqueca, insônia, ansiedade, depressão, dores crônicas, entre outros.",
        "btnClass": "btn-aur",
        "price": 'R$ 80,00*',
        "imageSrc": "/images/home/icons/massagem-facial.png",
        "url": "https://wa.me/+556193845772?text=Olá, gostaria de agendar uma sessão de Auriculoterapia.",
        "modalImage" : '/images/home/massagem/man-being-given-back-massage-by-physiotherapist-compressed.webp'
    },
    {
        "title": "Massagem Relaxante",
        "description": "Massagem que tem como objetivo o relaxamento do corpo, com movimentos suaves e toque leve e firme.",
        "price": 'R$ 80,00*',
        "btnClass": "btn-relax",
        "imageSrc": "/images/home/icons/massagem-facial.png",
        "url": "https://wa.me/+556193845772?text=Olá, gostaria de agendar uma sessão de Massagem Relaxante.",
        "modalImage" : '/images/home/massagem/woman-receiving-belly-massage-spa-salon-_1_-compressed.webp'
    },
    {
        "title": "Acupuntura/ Auriculoterapia",
        "description": "É a estimulação de pontos específicos do corpo de origem Chinesa a fim de atingir um efeito terapêutico, proporcionando equilíbrio e bem-estar. Podem ser utilizadas agulhas, auriculoterapia, moxabustão, stiper e cromoterapia.",
        "price": 'R$ 170,00* - 40 min',
        "btnClass": "btn-acu",
        "imageSrc": "/images/home/icons/massagem-facial.png",
        "url": "https://wa.me/+556193845772?text=Olá, gostaria de agendar uma sessão de Acupuntura.",
        "modalImage" : '/images/home/massagem/acupuncture-process-compressed.webp'
    },
    {
        "title": "Massagem Terapêutica",
        "description": "Massagem com objetivo diminuir tensões no corpo provocadas por stress, contratura muscular,  má  postura ou esforço repetitivo. O profissional irá realizar uma massagem especializada na sua demanda pessoal.",
        "price": 'R$ 150,00* - 50 min (Quick Massagem - R$ 85,00* - 30 min)',
        "btnClass": "btn-terap",
        "imageSrc": "/images/home/icons/massagem-facial.png",
        "url": "https://wa.me/+556193845772?text=Olá, gostaria de agendar uma sessão de Massagem Terapêutica.",
        "modalImage" : '/images/home/massagem/man-being-given-back-massage-by-physiotherapist-compressed.webp'
    },
    {
        "title": "Pedras Quentes",
        "description": "Uma das melhores massagens para proporcionar relaxamento e bem estar , fazendo uso de pedras quentes vulcanizadas (basalto) que são colocadas em pontos estratégicos do corpo. Contudo, seus benefícios vão muito além da promoção de bem-estar.",
        "price": 'R$220.00* - 50 min*',
        "btnClass": "btn-pedras",
        "imageSrc": "/images/home/icons/massagem-facial.png",
        "url": "https://wa.me/+556193845772?text=Olá, gostaria de agendar uma sessão de Pedras Quentes.",
        "modalImage" : '/images/home/massagem/woman-getting-massage-back-by-hot-stones-_1_-compressed.webp'
    }
];

const images = [
    { src: "/images/home/carouselImg/Espaço_Begonia_-_Método_Padovan.webp", alt: "Espaço Begonia" },
    { src: "/images/home/carouselImg/Espaço_Calathea_-_Método-Padovan.webp", alt: "Espaço Calathea" },
    { src: "/images/home/carouselImg/Espaço_Ficus_Lyrata_-_Fisioterapia.webp", alt: "Espaço Ficus Lyrata" },
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
    const styles = {
        section: {
            textAlign: "center",
            padding: "50px",
            backgroundColor: "#f9f5f0",
        },
        title: {
            color: "#ffffff",
            fontSize: "1.5em",
            fontWeight: "800",
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
    };

    const whatsappButtonStyle = useMemo(() => ({
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999,
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
        zIndex: 999,
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
        zIndex: 999,
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

    return (
        <>
            <PrimeReactProvider>
                <LayoutProvider>
                    <Head title="Massoterapia">
                        <link
                            rel="preload"
                            as="image"
                            href="/images/home/banner.webp"
                            type="image/webp"
                        />
                    </Head>

                    {/* Skip link para navegação rápida */}
                    <a href="#main-content" className="skip-link hidden">
                        Pular para o conteúdo principal
                    </a>

                    <Suspense fallback={<div>Carregando...</div>}>
                        <section className='w-full position-relative section-header'
                                 style={{
                                     bottom: "2px",
                                     backgroundColor: '#537859',
                                     height: '45rem',
                                     backgroundImage: 'url(/images/home/bannerr_Easy-Resize.com.jpg)'
                                 }}>
                            <div className="overlay"></div>
                            <div className='w-full mx-auto d-flexalign-items-center content'
                                 style={{background: 'transparent'}}>
                                <div className='w-full flex mb-1 md:mb-4 justify-content-between align-items-center'>
                                    <div>
                                        <img className="p-5 logo" alt="logo Leví Saúde integrada"
                                             src="/images/home/icons/Lévi6_png.png"
                                             loading="eager"
                                             decoding="async"
                                             fetchPriority="high"/>
                                    </div>

                                    <div className='bg-white w-full ml-4 mr-4 mt-4' style={{height: '0.2rem'}}>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='w-full flex p-4 md:p-5 flex-column-reverse md:flex-row overflow-hidden gap-8 align-items-center justify-content-center'>
                                <div
                                    className='section-info d-flex flex-column'>
                                    <h2 style={styles.title} className=''>Renove seu corpo e sua mente! <br/>
                                        Relaxe, alivie o estresse e recarregue suas energias com o poder massoterapia.
                                    </h2>
                                    <p className='text-white'>
                                        Os benefícios da massagem vão além do simples relaxamento, sendo uma excelente
                                        opção para a sua saúde física e mental.
                                    </p>
                                    <img className="section-1-img-mobile w-100 mt-7 mb-5"
                                         style={{Width: "60%"}}
                                         alt=" imagem de massagem"
                                         src="/images/home/banner_Easy-Resize.com.jpg"/>

                                    <button
                                        onClick={(e) => window.open('https://wa.me/+556193845772?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20massoterapia.%20Poderia%20me%20informar%20os%20horários%20disponíveis?', '_blank')}
                                        style={{fontSize: '22px', backgroundColor: '#01d758'}}
                                        className="btn-agendar mt-5 md:w-7 btn-pulse w-full text-white border-0 font-bold py-2 px-4 rounded">
                                        AGENDAR AGORA
                                    </button>
                                </div>

                                <img className="section-1-img " width={500}
                                     style={{Width: "60%"}}
                                     alt="logo w-full Leví Saúde integrada"
                                     src="/images/home/banner_Easy-Resize.com.jpg"
                                     loading="eager"
                                     decoding="async"
                                     fetchPriority="high"/>
                            </div>
                        </section>

                        <Carousel data={cards}/>

                        <section className="mt-2rem" style={{marginTop: "7rem"}}>
                            <div
                                className='w-full flex p-4 md:p-5 flex-column-reverse md:flex-row overflow-hidden gap-8 align-items-center justify-content-center'
                                style={{backgroundColor: '#537859', border: "solid 4px #537859"}}>
                                <div className='section-info d-flex flex-column gap-'>
                                    <h2 style={styles.title} className='md:text-left text-center'>PACOTES ESPECIAIS</h2>

                                    <ul style={styles.list} className='mt-5 d-flex flex-column gap-3'>
                                        <li style={styles.listItem}>
                                            <div>
                                                <CheckCircle size={20} color="#FFFFFF"/>
                                            </div>
                                            <strong>PACOTE: 10 Massagens
                                                (qualquer tipo): R$ 1.200,00*</strong>
                                        </li>
                                        <li style={styles.listItem}>
                                            <div>
                                                <CheckCircle size={20} color="#FFFFFF"/>
                                            </div>
                                            <strong>PACOTE: Revigoração Profunda: 2
                                                massagens terapêuticas de 50 min - R$ 200,00*</strong>
                                        </li>
                                        <li style={styles.listItem}>
                                            <div>
                                                <CheckCircle size={20} color="#FFFFFF"/>
                                            </div>
                                            <strong>PACOTE: Relaxamento Total: 2 massagens terapêuticas + 1 massagem
                                                Ayurvédica
                                                + 1 sessão de acupuntura e auriculoterapia + 1 Quick Massagem com
                                                Ventosoterapia - R$ 400,00*</strong>
                                        </li>
                                    </ul>

                                    <p className='text-white' style={{fontSize: '12px'}}>
                                        *Os valores estão sujeitos a alterações
                                    </p>

                                    <button
                                        onClick={(e) => window.open('https://wa.me/+556193845772?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20massoterapia.%20Poderia%20me%20informar%20os%20horários%20disponíveis?', '_blank')}
                                        className="btn-agendar-2 mt-3 md:w-6 w-full text-white border-0 font-bold py-2 px-4 rounded"
                                        style={{fontSize: '22px', backgroundColor: '#01d758'}}
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
                                    tabIndex="0"
                                ></video>
                            </div>
                        </section>

                        <section className='about-us w-100 flex align-items-center'
                                 style={{
                                     backgroundColor: '#f7f7f7'
                                 }}
                        >
                            <div
                                className='flex flex-column gap-8 md:flex-row align-items-center container mt-8 mb-8'
                            >
                                <CarouselImg images={images}/>

                                <div className='abount-us-info  gap-4 flex flex-column md:75 w-100'>
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
                                        onClick={(e) => window.open('https://levisaudeintegrada.com.br/', '_blank')}
                                        className="btn-site animate-pulse mt-3 md:w-8 w-full text-white border-0 font-bold py-2 px-4 rounded"
                                        style={{fontSize: '20px', backgroundColor: '#d37435'}}
                                    >
                                        SAIBA MAIS SOBRE A LÉVI
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className='mt-8'>
                            <h2 id="products-heading" className="h1 font-bold text-center mb-8 text-orange-600">
                                AVALIAÇÕES
                            </h2>
                            <LazyIframe
                                src="https://5a07bed189ae46e099d1b681e961c665.elf.site"
                                title="Avaliações do Google"
                                style={{border: 0, width: "100%", height: "340px"}}
                            />
                        </section>

                        <section id="contato" className="contact-section mt-8" aria-labelledby="contact-heading">
                            <div className="container">
                                <div className="d-flex justify-content-center w-100">
                                    {/* Coluna dos Dados de Contato */}
                                    <div className="col-md-6 mb-4">
                                        <div className="contact-card shadow p-4">
                                            <h4 className="mb-4">CONTATO</h4>
                                            <address>
                                                <p>
                                                    <a className='text-black contact-address' href='https://www.google.com.br/maps/place/L%C3%A9vi+Sa%C3%BAde+Integrada/@-15.7873444,-47.8850211,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3afdd4d1d22f:0x393e9b2d86b2f435!8m2!3d-15.7873444!4d-47.8824462!16s%2Fg%2F11bwf795cd?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D'>
                                                        <FaMapMarkerAlt aria-hidden="true" className="me-2"/>
                                                        <strong>Endereço:</strong> SCN Quadra 01 Bloco F, Ed. America Office Tower,
                                                        Salas 512 a 514 - Asa Norte, Brasília DF
                                                    </a>
                                                </p>
                                                <p>
                                                    <FaPhoneAlt aria-hidden="true" className="me-2"/>
                                                    <strong>Telefone:</strong> (61) 3328-9566
                                                    (61) 99384-5772 / (61) 98275-0333
                                                </p>
                                                <p>
                                                    <a
                                                        href="https://wa.me/+556193845772?text=Olá, vim do site e gostaria de falar com o atendimento!"
                                                        className="contact-btn-whats text-black"
                                                        aria-label="Chat via WhatsApp"
                                                    >
                                                        <FaWhatsapp aria-hidden="true" className="me-2"/>
                                                        <strong>WhatsApp:</strong> (61) 9384-5772
                                                    </a>
                                                </p>
                                                <p>
                                                    <FaClock aria-hidden="true" className="me-2"/>
                                                    <strong>Horário:</strong> Segunda a Sexta-feira das 8h às 20h.
                                                    Sábado e Domingo Fechado
                                                </p>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <a
                            href="https://wa.me/+5561993845772?text=Olá, vim do site e gostaria de falar com o atendimento!"
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
                            href="https://www.instagram.com/levisaudeintegrada/"
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
                            href="tel:+556133289566"
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

                        <footer className="text-center text-lg-start bg-body-tertiary text-muted"
                                role="contentinfo"
                                style={{marginTop: "10rem"}}>
                            <div className='w-100 p-3 bg-gray-60 d-flex justify-content-center'>
                                <span className='font-bold'>Lévi Saúde Integrada - 00.931.670/0001-21</span>
                            </div>
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
