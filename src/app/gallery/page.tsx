'use client'

import { useState, useRef, useEffect } from 'react'

import { galleryHeading, dataGallery } from '@/Components/UI/Data/Data'

import Image from 'next/image'

import '@/Components/Sass/Page.scss'

import { Zoom, Fade } from 'react-awesome-reveal'

import { StaticImageData } from 'next/image'

export default function Gallery() {

  const [tempingSrc, setTempImgSrc] = useState<StaticImageData | null>(null);

  const getImg = (Image: StaticImageData) => {
    setTempImgSrc(Image)
    setIsVisible(true)
  }

  const [isVisible, setIsVisible] = useState(false);

  const modalRef = useRef(null);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="gallery">

      <div className="gallery__container container grid">

        {
          galleryHeading.map((item) => (
            <div className="heading">
              <Fade direction='down' duration={1000} delay={500} triggerOnce>
                <h1>{item.title}</h1>
              </Fade>
            </div>
          ))
        }

        <div className="content">
          {
            dataGallery.map((item) => (
              <div className="img" key={item.id}>
                <Zoom duration={1000} delay={500} triggerOnce>
                  <Image src={item.img} alt="" onClick={() => getImg(item.img)} />
                </Zoom>
              </div>
            ))
          }

        </div>

        <div className={isVisible ? "model open" : "model"} >
          {
            isVisible && (
              <div className="model__content" ref={modalRef}>
                {tempingSrc && <Image src={tempingSrc} alt='' />}
              </div>
            )
          }
        </div>
      </div>

    </section>
  )
}
