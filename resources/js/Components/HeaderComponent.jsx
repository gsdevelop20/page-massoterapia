import {Link, Head} from '@inertiajs/react';
import React, {useContext} from "react";

export default function HeaderComponent({auth}) {
    return (
        <>
            <div className="flex position-fixed top-0 border-bottom border-warning border-4 h-5rem p-4 header justify-content-between align-items-center w-100"
                 style={{zIndex: '999999', background: '#00c3ea'}}>
                <img width={55} src='/images/home/icons/logo.jpg' alt='box'/>
                <div className="flex align-items-center gap-5">
                    <Link className='btn btn-warning' href='/'>Entre em contato</Link>
                </div>
            </div>
        </>
    );
}
