import React from "react";
import './style.css'

export default function HeaderComponent() {
    return (
        <>
            <nav className="navbar navbar-expand">
                <div className='w-full mx-auto d-flexalign-items-center'>
                    <div className='w-full flex mb-1 md:mb-4 justify-content-between align-items-center'>
                        <div>
                            <img className="p-5" width={170} alt="logo w-full clinica Amor Brasil"
                                 src="/images/logo/logo.webp"/>
                        </div>

                        <div className='bg-white w-full ml-4 mr-4' style={{height: '0.2rem'}}>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
