'use client'
import { useTheme } from "@/Components/UI/Theme/Thema"

import { kontakHeading, dataKontak, imgKontak, socialKontak } from "@/Components/UI/Data/Data"

import Image from "next/image"

import Link from "next/link"

import "@/Components/Sass/Landing.scss"
export default function Kontak() {

  const { isDarkMode } = useTheme();

  return (
    <section className="kontak">

      <div className={`kontak__container container grid ${useTheme().isDarkMode ? "dark" : "light"}`}>

        {
          kontakHeading.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
            </div>
          ))
        }

        <div className="content">



          <div className="box__content">
            {
              dataKontak.map((item) => (
                <div className="box" key={item.id}>
                  <h3>{item.title}</h3>
                  <Link target="__blank" href={item.path}>{item.desc}</Link>
                </div>
              ))
            }

            <div className="social">
              {
                socialKontak.map((item) => (
                  <Link target="__blank" href={item.path} key={item.id}>
                    {item.icons}
                  </Link>
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
