import {Link, Head} from '@inertiajs/react';
import { Carousel } from 'primereact/carousel';
import React, {useContext, useEffect, useState} from "react";
import {Tag} from "primereact/tag";
import {Button} from "primereact/button";

export default function CarouselComponent() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
       setProducts([
            {id: '1000', name: 'Bamboo Watch', price: 65
                , inventoryStatus: 'INSTOCK', image: 'bamboo-watch.jpg'},
            {id: '1001', name: 'Black Watch', price: 72
                , inventoryStatus: 'INSTOCK', image: 'black-watch.jpg'},
            {id: '1002', name: 'Blue Band', price: 79
                , inventoryStatus: 'LOWSTOCK', image: 'blue-band.jpg'},
            {id: '1003', name: 'Blue T-Shirt', price: 29
                , inventoryStatus: 'INSTOCK', image: 'blue-t-shirt.jpg'},
            {id: '1004', name: 'Bracelet', price: 15
                , inventoryStatus: 'OUTOFSTOCK', image: 'bracelet.jpg'},
       ]);

    }, []);


    const productTemplate = (product) => {
        return (

            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" rounded />
                        <Button icon="pi pi-star-fill" rounded severity="success" />
                    </div>
                </div>
            </div>
        );
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };


    return (
        <>
            <div className="card">
                <Carousel value={products} numVisible={2} numScroll={3} responsiveOptions={responsiveOptions}
                          itemTemplate={productTemplate} autoplayInterval={5000}/>
            </div>
        </>
    );
}
