'use client'

import { useTheme } from '@/Components/UI/Theme/Thema';

import { headingPenawaran, dataPenawaran } from '@/Components/UI/Data/Data'

import Image from 'next/image';
export default function Featured() {

  const { isDarkMode } = useTheme();

  return (
    <section className="featured">

      <div className={`featured__container container grid ${isDarkMode ? "dark" : "light"}`}>

        {
          headingPenawaran.map((item) => (
            <div className="heading">
              <h2>{item.title}</h2>
            </div>
          ))
        }

        <div className="box__featured">
          {
            dataPenawaran.map((item) => (
              <div className="box" key={item.id}>
                <Image src={item.img} alt="" />

                <div className="text">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))
          }
        </div>

      </div>

    </section>
  )
}
