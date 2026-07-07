import { useState } from 'react';

interface NavbarProps {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
}

const Navbar = ({ language, setLanguage }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = {
    pt: ['Sobre', 'Experiência', 'Formação', 'Cursos', 'Habilidades', 'Contato'],
    en: ['About', 'Experience', 'Education', 'Courses', 'Skills', 'Contact'],
  };

  const ids = ['about', 'experience', 'education', 'courses', 'skills', 'contact'];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">Maria Luiza</div>

        <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '×' : '☰'}
      </button>

        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          {navItems[language].map((item, index) => (
            <a
              key={item}
              href={`#${ids[index]}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(ids[index]);
              }}
            >
              {item}
            </a>
          ))}

          <button
            className="lang-toggle"
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;