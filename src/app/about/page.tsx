'use client'

import { aboutHeading, dataAbout, penawaran } from '@/Components/UI/Data/Data'

import dynamic from 'next/dynamic';

const DynamicImage = dynamic(() => import('next/image'), { ssr: false });

import { useTheme } from '@/Components/UI/Theme/Thema'
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import '@/Components/Sass/Page.scss'

interface NumberProps {
  n: number;
}

export default function About() {

  const { isDarkMode } = useTheme();

  const DL: React.FC<NumberProps> = ({ n }) => {
    const { ref, inView } = useInView();

    const { number } = useSpring({
      from: { number: 0 },
      to: { number: inView ? n : 0 },
      number: n,
      delay: 100,
      reset: true,
      onStart: () => console.log('onStart'),
      config: { mass: 1, tension: 20, friction: 10 },
    });

    // Gunakan useEffect untuk menampilkan pesan saat komponen dimulai
    useEffect(() => {
      console.log('onStart');
    }, []);

    return (
      <div ref={ref}>
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      </div>
    );
  };

  const SRS: React.FC<NumberProps> = ({ n }) => {
    const { ref, inView } = useInView();

    const { number } = useSpring({
      from: { number: 0 },
      to: { number: inView ? n : 0 },
      number: n,
      delay: 100,
      reset: true,
      onStart: () => console.log('onStart'),
      config: { mass: 1, tension: 20, friction: 10 },
    });

    // Gunakan useEffect untuk menampilkan pesan saat komponen dimulai
    useEffect(() => {
      console.log('onStart');
    }, []);

    return (
      <div ref={ref}>
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      </div>
    );
  };

  const EDI: React.FC<NumberProps> = ({ n }) => {
    const { ref, inView } = useInView();

    const { number } = useSpring({
      from: { number: 0 },
      to: { number: inView ? n : 0 },
      number: n,
      delay: 100,
      reset: true,
      onStart: () => console.log('onStart'),
      config: { mass: 1, tension: 20, friction: 10 },
    });

    // Gunakan useEffect untuk menampilkan pesan saat komponen dimulai
    useEffect(() => {
      console.log('onStart');
    }, []);

    return (
      <div ref={ref}>
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      </div>
    );
  };

  const COO: React.FC<NumberProps> = ({ n }) => {
    const { ref, inView } = useInView();

    const { number } = useSpring({
      from: { number: 0 },
      to: { number: inView ? n : 0 },
      number: n,
      delay: 100,
      reset: true,
      onStart: () => console.log('onStart'),
      config: { mass: 1, tension: 20, friction: 10 },
    });

    // Gunakan useEffect untuk menampilkan pesan saat komponen dimulai
    useEffect(() => {
      console.log('onStart');
    }, []);

    return (
      <div ref={ref}>
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      </div>
    );
  };
  const SG: React.FC<NumberProps> = ({ n }) => {
    const { ref, inView } = useInView();

    const { number } = useSpring({
      from: { number: 0 },
      to: { number: inView ? n : 0 },
      number: n,
      delay: 100,
      reset: true,
      onStart: () => console.log('onStart'),
      config: { mass: 1, tension: 20, friction: 10 },
    });

    // Gunakan useEffect untuk menampilkan pesan saat komponen dimulai
    useEffect(() => {
      console.log('onStart');
    }, []);

    return (
      <div ref={ref}>
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      </div>
    );
  };

  const BOF: React.FC<NumberProps> = ({ n }) => {
    const { ref, inView } = useInView();

    const { number } = useSpring({
      from: { number: 0 },
      to: { number: inView ? n : 0 },
      number: n,
      delay: 100,
      reset: true,
      onStart: () => console.log('onStart'),
      config: { mass: 1, tension: 20, friction: 10 },
    });

    // Gunakan useEffect untuk menampilkan pesan saat komponen dimulai
    useEffect(() => {
      console.log('onStart');
    }, []);

    return (
      <div ref={ref}>
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
      </div>
    );
  };

  return (
    <section className="about">

      <div className={`about__container container grid ${isDarkMode ? 'dark' : 'light'}`}>

        {
          aboutHeading.map((item) => (
            <div className="heading">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          ))
        }

        <div className="content">
          {
            dataAbout.map((item) => (
              <div className="img" key={item.id}>
                <DynamicImage src={item.img} alt="" />
              </div>
            ))
          }
        </div>

        <div className="penawaran">
          {
            penawaran.map((item) => (
              <div className="box__content" key={item.id}>
                <div className="string"></div>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
              </div>
            ))
          }
        </div>

        <div className="services">
          <div className="box">
            <h1>DREAMCARD LOYALTY</h1>
            <div className="row"></div>
            <h3>
              <DL n={2} /> M
            </h3>
          </div>

          <div className="box">
            <h1>SQM OF RETAIL SPACE</h1>
            <div className="row"></div>
            <h3>
              +
              <SRS n={200} /> K
            </h3>
          </div>

          <div className="box">
            <h1>Elegant Design & Interior</h1>
            <div className="row"></div>
            <h3>+
              <EDI n={10} /> K
            </h3>
          </div>

          <div className="box">
            <h1>COUNTRIES IN OUR OPERATION</h1>
            <div className="row"></div>
            <h3>
              <COO n={20} />
            </h3>
          </div>

          <div className="box">
            <h1>STORES GLOBALLY</h1>
            <div className="row"></div>
            <h3>
              <SG n={1005} />
            </h3>
          </div>

          <div className="box">
            <h1>BRANDS OWNED & FRANCHISED</h1>
            <div className="row"></div>
            <h3>
              <BOF n={23} />
            </h3>
          </div>
        </div>

      </div>

    </section>
  )
}