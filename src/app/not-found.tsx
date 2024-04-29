'use client'

import { useTheme } from '@/Components/UI/Theme/Thema'

import { notFoundData } from '@/Components/UI/Data/Data'

import Image from 'next/image'

import Link from 'next/link'

import "@/Components/Sass/Page.scss"

export default function notFound() {

  const { isDarkMode } = useTheme();

  return (
    <section className="notfound">
      <div className={`notfound__container container grid ${isDarkMode ? "dark" : "light"}`}>

        {
          notFoundData.map((item) => (
            <div className="box">
              <Image src={item.img} alt="" />
              <h2>{item.text}</h2>
              <Link href={item.path}>{item.btn}</Link>
            </div>
          ))
        }

      </div>
    </section>
  )
}
