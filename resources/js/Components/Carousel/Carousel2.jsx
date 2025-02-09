import React, { memo } from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import "./style.css";

function Carousel2() {
    return (
        <CCarousel
            controls
            style={{ maxWidth: '30rem' }}
            aria-label="Galeria de imagens da Clínica"
            role="region"
            aria-roledescription="carousel"
            aria-live="polite"
        >
            <CCarouselItem>
                <CImage
                    className="d-block w-100"
                    src="/images/home/banners.jpg"
                    alt="Banner da Clínica - slide de apresentação"
                    loading="lazy"
                />
            </CCarouselItem>
            <CCarouselItem>
                <CImage
                    className="d-block w-100"
                    src="/images/home/medical.jpg"
                    alt="Equipe médica em ação - slide de apresentação"
                    loading="lazy"
                />
            </CCarouselItem>
        </CCarousel>
    );
}

export default memo(Carousel2);
