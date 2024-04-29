'use client'
import { useTheme } from "@/Components/UI/Theme/Thema"

import { kontakHeading, dataKontak, imgKontak, socialKontak } from "@/Components/UI/Data/Data"

import Image from "next/image"

import Link from "next/link"

import "@/Components/Sass/Landing.scss"

import { Fade, Zoom } from 'react-awesome-reveal'

export default function Kontak() {

  const { isDarkMode } = useTheme();

  return (
    <section className="kontak">

      <div className={`kontak__container container grid ${useTheme().isDarkMode ? "dark" : "light"}`}>

        {
          kontakHeading.map((item) => (
            <div className="heading">
              <Fade direction='left' duration={1000} delay={500} triggerOnce>
                <h1>{item.title}</h1>
              </Fade>
            </div>
          ))
        }

        <div className="content">

          <div className="box__content">
            {
              dataKontak.map((item) => (
                <div className="box" key={item.id}>
                  <Fade direction='down' duration={1000} delay={500} triggerOnce>
                    <h3>{item.title}</h3>
                  </Fade>

                  <Fade direction='up' duration={1000} delay={500} triggerOnce>
                    <Link target="__blank" href={item.path}>{item.desc}</Link>
                  </Fade>
                </div>
              ))
            }

            <div className="social">
              {
                socialKontak.map((item) => (
                  <Zoom duration={1000} delay={500} triggerOnce>
                    <Link target="__blank" href={item.path} key={item.id}>
                      {item.icons}
                    </Link>
                  </Zoom>
                ))
              }
            </div>
          </div>



          {
            imgKontak.map((item) => (
              <div className="img">
                <Image src={item.img} alt="" />
              </div>
            ))
          }

        </div>

      </div>

    </section >
  )
}
