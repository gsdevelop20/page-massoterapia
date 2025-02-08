import React from 'react'
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'
import "./style.css"

export default function Carousel2() {
    return (
        <CCarousel controls indicators style={{maxWidth: '50rem'}}>
            <CCarouselItem>
                <CImage className="d-block w-100" src="/images/home/banners.jpg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src="/images/home/medical.jpg" alt="slide 2" />
            </CCarouselItem>
        </CCarousel>
    )
}
