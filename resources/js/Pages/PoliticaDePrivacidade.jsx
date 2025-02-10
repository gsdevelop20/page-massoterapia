import React from "react";
import {Head} from "@inertiajs/react";
import {LayoutProvider} from "@/Layouts/layout/context/layoutcontext.jsx";
import {PrimeReactProvider} from "primereact/api";
import {FaGem} from "react-icons/fa";

const HeaderComponent = React.lazy(() => import('@/Components/header/HeaderComponent.jsx'));

export default function PoliticaDePrivacidade() {
    return (
        <PrimeReactProvider>
            <LayoutProvider>
                <Head title="Política de Privacidade"/>

                <HeaderComponent/>

                <main className="container mt-5 p-2">
                    <h1 className="text-center">Política de Privacidade</h1>

                    <p>Na Clínica Amor Brasil, respeitamos sua privacidade e nos comprometemos a proteger qualquer
                        informação pessoal. Informamos que não coletamos, armazenamos ou compartilhamos dados pessoais
                        dos usuários ao utilizar nosso site ou aplicação.</p>

                    <h3>1. Coleta de Informações</h3>
                    <p>Nosso site não coleta nenhuma informação pessoal dos usuários, garantindo total privacidade e
                        anonimato durante a navegação.</p>

                    <h3>2. Uso das Informações</h3>
                    <p>Como não coletamos informações, não realizamos qualquer tipo de processamento ou utilização de
                        dados pessoais.</p>

                    <h3>3. Compartilhamento de Informações</h3>
                    <p>Não compartilhamos informações pessoais com terceiros, pois não coletamos nenhum dado dos
                        usuários.</p>

                    <h3>4. Armazenamento e Proteção de Dados</h3>
                    <p>Como não realizamos a coleta de dados, não há necessidade de armazenamento ou aplicação de
                        medidas de proteção de informações pessoais.</p>

                    <h3>5. Direitos dos Usuários</h3>
                    <p>Os usuários têm o direito de navegar no nosso site com total privacidade, sem a preocupação de
                        coleta ou uso indevido de seus dados.</p>

                    <h3>6. Cookies e Tecnologias Semelhantes</h3>
                    <p>Nosso site não utiliza cookies ou qualquer tecnologia que rastreie a navegação dos usuários.</p>

                    <h3>7. Alterações nesta Política</h3>
                    <p>Podemos atualizar esta Política de Privacidade periodicamente para garantir sua transparência.
                        Recomendamos que os usuários revisem este documento regularmente.</p>

                    <h3>8. Contato</h3>
                    <p>Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pelo e-mail:
                        clinicaamorbrasil@gmail.com</p>
                </main>

                <footer className="text-center mt-8 text-lg-start bg-body-tertiary text-muted"
                        role="contentinfo">
                    <section
                        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                        aria-label="Redes sociais"
                    >
                        <div className="d-none w-full d-lg-block flex justify-content-center">
                            <img className="hidden md:block" width={150} alt="logo clinica Amor Brasil"
                                 src="/images/logo/logo.jpg"/>
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
                            © 2025 Copyright: Feito por <a href='https://zionpublicidade.com'>Zion
                            Publicidade.</a> Todos os direitos reservados.
                        </div>
                    </div>
                </footer>
            </LayoutProvider>
        </PrimeReactProvider>
    );
};
