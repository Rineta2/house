'use client'

import { useTheme } from '@/Components/UI/Theme/Thema';

import { headingPenawaran, dataPenawaran } from '@/Components/UI/Data/Data'

import Image from 'next/image';

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Featured() {

  const { isDarkMode } = useTheme();

  return (
    <section className="featured">

      <div className={`featured__container container grid ${isDarkMode ? "dark" : "light"}`}>

        {
          headingPenawaran.map((item) => (
            <div className="heading">
              <Fade direction='left' duration={1000} delay={500} triggerOnce>
                <h2>{item.title}</h2>
              </Fade>
            </div>
          ))
        }

        <div className="box__featured">
          {
            dataPenawaran.map((item) => (
              <div className="box" key={item.id}>
                <Image src={item.img} alt="" />

                <div className="text">
                  <Fade direction='down' duration={1000} delay={100} triggerOnce>
                    <h2>{item.title}</h2>
                  </Fade>

                  <Fade direction='up' duration={1000} delay={100} triggerOnce>
                    <p>{item.desc}</p>
                  </Fade>
                </div>
              </div>
            ))
          }
        </div>

      </div>

    </section >
  )
}
