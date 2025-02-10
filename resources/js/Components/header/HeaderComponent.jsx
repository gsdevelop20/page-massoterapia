import {Link, Head} from '@inertiajs/react';
import React, {useContext} from "react";
import {Navbar} from "flowbite-react";
import './style.css'

export default function HeaderComponent({auth}) {
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
                            <a href='#contato' className='btn'>ENTRE EM CONTATO</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
