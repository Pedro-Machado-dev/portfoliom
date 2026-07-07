import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import { MdEmail, MdPhone, MdDownload } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';

function App() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const skills = [
    'Atendimento ao Público',
    'Vendas',
    'Rotinas Administrativas',
    'Setor Financeiro',
    'Call Center',
    'Pacote Office',
    'Word',
    'Excel',
    'PowerPoint',
    'Organização de Documentos',
    'Trabalho em Equipe',
    'Inglês Básico',
  ];

  return (
    <div className="app">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">
          {language === 'pt' ? 'Sobre Mim' : 'About Me'}
        </h2>

        <div className="text-block">
          {language === 'pt' ? (
            <p>
              Sou graduanda em Engenharia Biomédica pelo Instituto Nacional de Telecomunicações - Inatel.
              Tenho sólida experiência prática em atendimento ao público, vendas, call center e setor financeiro,
              além de vivência em rotinas administrativas. Atualmente estou iniciando uma Iniciação Científica
              e busco oportunidades que me permitam desenvolver novas competências, adquirir experiência profissional
              e contribuir para resultados positivos.
            </p>
          ) : (
            <p>
              I am a Biomedical Engineering undergraduate at Instituto Nacional de Telecomunicações - Inatel.
              I have solid hands-on experience in customer service, sales, call center operations and the financial sector,
              as well as experience with administrative routines. I am currently starting a Scientific Initiation project
              and looking for opportunities that allow me to develop new skills, gain professional experience
              and contribute to positive results.
            </p>
          )}
        </div>
      </section>

      <Experience language={language} />

      {/* Education */}
      <section id="education" className="section">
        <h2 className="section-title">
          {language === 'pt' ? 'Formação Acadêmica' : 'Education'}
        </h2>

        <div className="cards-list">
          <div className="education-card">
            <h3>Engenharia Biomédica – Inatel</h3>

            <p className="card-accent">
              {language === 'pt'
                ? 'Previsão de conclusão: Dezembro de 2030'
                : 'Expected graduation: December 2030'}
            </p>

            <p>
              {language === 'pt'
                ? 'Bacharelado em Engenharia Biomédica pelo Instituto Nacional de Telecomunicações.'
                : 'Bachelor’s Degree in Biomedical Engineering at Instituto Nacional de Telecomunicações.'}
            </p>
          </div>

          <div className="education-card">
            <h3>{language === 'pt' ? 'Ensino Médio Completo' : 'High School'}</h3>
            <p>Escola Monsenhor José Paulino – Pouso Alegre, 2025</p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="section">
        <h2 className="section-title">
          {language === 'pt' ? 'Cursos Complementares' : 'Additional Courses'}
        </h2>

        <div className="cards-list">
          <div className="education-card">
            <h3>Assistente Administrativo</h3>
            <p className="card-accent">SENAC – Pouso Alegre</p>
            <p>
              {language === 'pt'
                ? 'Concluído em 2023 • 400 horas'
                : 'Completed in 2023 • 400 hours'}
            </p>
          </div>

          <div className="education-card">
            <h3>Informática Profissionalizante</h3>
            <p className="card-accent">Ápice Treinamentos – Pouso Alegre</p>
            <p>
              {language === 'pt'
                ? 'Concluído em 2022 • 80 horas'
                : 'Completed in 2022 • 80 hours'}
            </p>
          </div>

          <div className="education-card">
            <h3>{language === 'pt' ? 'Inglês Básico' : 'Basic English'}</h3>
            <p className="card-accent">CapSchool – Pouso Alegre</p>
            <p>
              {language === 'pt'
                ? 'Concluído em 2023 • 80 horas'
                : 'Completed in 2023 • 80 hours'}
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2 className="section-title">
          {language === 'pt' ? 'Habilidades & Competências' : 'Skills & Competencies'}
        </h2>

        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">
          {language === 'pt' ? 'Contato' : 'Contact'}
        </h2>

        <div className="contact-grid">
          <a href="mailto:mdepietrolopes@gmail.com" className="contact-card">
            <div className="contact-icon">
              <MdEmail />
            </div>

            <div className="contact-content">
              <h3>Email</h3>
              <p>mdepietrolopes@gmail.com</p>
            </div>
          </a>

          <a href="tel:+5535999448728" className="contact-card">
            <div className="contact-icon">
              <MdPhone />
            </div>

            <div className="contact-content">
              <h3>{language === 'pt' ? 'Telefone' : 'Phone'}</h3>
              <p>(35) 99944-8728</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/maria-luiza-lopes-6571202a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaLinkedin />
            </div>

            <div className="contact-content">
              <h3>LinkedIn</h3>
              <p>maria-luiza-lopes-6571202a8</p>
            </div>
          </a>
        </div>

        <a
          href="/curriculo-maria-luiza.pdf"
          download="Curriculo_Maria_Luiza_De_Pietro_Lopes.pdf"
          className="btn btn-primary resume-button"
        >
          <MdDownload />
          {language === 'pt' ? 'Baixar Currículo (PDF)' : 'Download CV (PDF)'}
        </a>

        <p className="contact-note">
          {language === 'pt'
            ? 'Estou aberta a oportunidades de estágio, iniciação científica ou posições administrativas/júnior.'
            : 'I am open to internship, scientific initiation or junior/administrative positions.'}
        </p>
      </section>

      <footer className="footer">
      <p>© {new Date().getFullYear()} Maria Luiza De Pietro Lopes</p>

      <p className="footer-credit">
        Desenvolvido por{' '}
        <a
          href="https://www.pedromachado.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pedro Machado
        </a>
      </p>
    </footer>
    </div>
  );
}

export default App;