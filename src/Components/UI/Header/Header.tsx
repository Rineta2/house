'use client';

import { useState, useEffect } from "react";

import { navLink } from "@/Components/UI/Data/Data";

import { MdOutlineMenuBook, MdOutlineHouse } from "react-icons/md";

import { TiTimesOutline } from "react-icons/ti";

import Link from "next/link";

import '@/Components/Sass/Header.scss';

import { useTheme } from "@/Components/UI/Theme/Thema";

import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false);

  const [fixed, setFixed] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { isDarkMode, setIsDarkMode } = useTheme();

  const [selectedTheme, setSelectedTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "";
  });


  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);

    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      setSelectedTheme(prefersDarkMode ? "dark" : "light");
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      setSelectedTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener('change', listener);

    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, []);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = event.target.value;
    setSelectedTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    if (selectedTheme === "dark") {
      setIsDarkMode(true);
    } else if (selectedTheme === "light") {
      setIsDarkMode(false);
    }
  };

  return (
    <header className={`header ${fixed ? "fixed" : ""} ${isDarkMode ? "dark" : "light"}`}>
      <nav className={`nav container ${isDarkMode ? "dark" : "light"}`}>
        <Link className="logo" href={'/'}>
          <i><MdOutlineHouse /></i>Refined Elegance
        </Link>

        <ul className={`nav__list ${isOpen ? "open" : ""}`}>
          {navLink.map((item) => (
            <li key={item.id} className="nav__item">
              <Link href={item.path} className={`nav__link ${pathname === item.path ? "active" : ""}`} onClick={() => setIsOpen(false)}>{item.name}</Link>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <div className="toggle">
            {isOpen ? (
              <TiTimesOutline className="close" onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <MdOutlineMenuBook className="icons" onClick={() => setIsOpen(!isOpen)} />
            )}
          </div>

          <div className="theme">
            <select onChange={handleThemeChange} value={selectedTheme}>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
        </div>
      </nav>
    </header >
  );
}