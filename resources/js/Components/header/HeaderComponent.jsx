import React from "react";
import './style.css'

export default function HeaderComponent() {
    return (
        <>
            <nav className="navbar navbar-expand">
                <div className='container w-full d-flexalign-items-center'>
                    <div className='w-full flex justify-content-between align-items-center'>
                        <div>
                            <img className="md:hidden" alt="logo clinica Amor Brasil"
                                 src="/images/logo/logo_mobile.jpg"/>

                            <img className="hidden md:block" alt="logo clinica Amor Brasil"
                                 src="/images/logo/logo.jpg"/>
                        </div>
                        <div>
                            <a href='https://wa.me/5561996246801?text=Olá, vim do site e gostaria de falar com o atendimento!' className='btn btn-entre'>ENTRE EM CONTATO</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
