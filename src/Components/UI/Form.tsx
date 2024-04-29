'use client'
import { FormEvent, useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Axios from 'axios';

import { useTheme } from '@/Components/UI/Theme/Thema';

import { Zoom, Fade } from 'react-awesome-reveal'

interface FormDataInput {
  nama: string;
  email: string;
  nomber: string;
  date: string;
}

export default function Form() {

  const { isDarkMode } = useTheme();

  const formRef = useRef<HTMLFormElement>(null);
  const scriptUrl = "https://script.google.com/macros/s/AKfycbw_YPYDnk1epYz2apJs8dEqof1JwPKYkg8s6lulgJgfL7Tr-U4RmKM1Tce9b498XPg/exec";
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const formDataInput: FormDataInput = {
      nama: formData.get('nama') as string,
      email: formData.get('email') as string,
      nomber: formData.get('nomber') as string,
      date: formData.get('date') as string,
    };

    if (formDataInput.nama && formDataInput.email && formDataInput.nomber && formDataInput.date) {
      try {
        const isDuplicate = await checkDuplicate(formDataInput.email, formDataInput.nomber);

        if (isDuplicate) {
          setErrorMessage('Email atau nomor sudah terdaftar.');
        } else {
          const response = await fetch(scriptUrl, {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            toast.success("Pesan telah dikirim 🥳");
            formRef.current?.reset();
          } else {
            toast.error("Gagal mengirim pesan 😔");
          }
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error("Gagal mengirim pesan 😔");
      }
    } else {
      toast.error('Nama, Email, Nomber, dan date harus diisi!');
    }
  };

  // Fungsi untuk memeriksa duplikat
  const checkDuplicate = async (email: string, nomber: string) => {
    try {
      const response = await Axios.get(`https://script.google.com/macros/s/AKfycbw_YPYDnk1epYz2apJs8dEqof1JwPKYkg8s6lulgJgfL7Tr-U4RmKM1Tce9b498XPg/exec?email=${email}&nomber=${nomber}`);
      return response.data.exists;
    } catch (error) {
      console.error('Error checking duplicate:', error);
      return false;
    }
  };

  return (
    <aside>
      <div className={`aside__container container grid ${isDarkMode ? "dark" : "light"}`}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form__type">
            <Zoom duration={1000} triggerOnce delay={300}>
              <input type="text" name="nama" placeholder="Nama" required />
            </Zoom>

            <Zoom duration={1000} triggerOnce delay={300}>
              <input type="email" name="email" placeholder="Email" required />
            </Zoom>

            <Zoom duration={1000} triggerOnce delay={300}>
              <input type="tel" name="nomber" placeholder="Nomber Handphone" required />
            </Zoom>

            <Zoom duration={1000} triggerOnce delay={300}>
              <input type="datetime-local" name="date" placeholder='Date' required />
            </Zoom>
          </div>

          <Fade duration={1000} triggerOnce delay={300} direction="up">
            <div className="btn">
              <button type="submit">Kirim</button>
              <ToastContainer />
            </div>
          </Fade>
        </form>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </aside>
  )
}