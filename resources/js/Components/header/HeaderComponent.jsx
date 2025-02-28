import React from "react";
import './style.css'

export default function HeaderComponent() {
    return (
        <>
            <nav className="navbar navbar-expand">
                <div className='container w-full d-flexalign-items-center'>
                    <div className='w-full flex justify-content-between align-items-center'>
                        <div>
                            <img className="hidden md:block pt-5 pb-5" width={100} alt="logo w-full clinica Amor Brasil"
                                 src="/images/logo/logo.webp"/>
                        </div>

                        <div className='bg-white w-full ml-4' style={{height: '0.2rem'}}>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
