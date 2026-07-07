interface HeroProps {
  language: 'pt' | 'en';
}

const Hero = ({ language }: HeroProps) => {
  const content = {
  pt: {
    greeting: "Olá, eu sou",
    name: "Maria Luiza De Pietro Lopes",
    role: "Estudante de Engenharia Biomédica | Administração & Atendimento ao Público",
    description:
      "Graduanda em Engenharia Biomédica pelo Inatel, com experiência em atendimento ao público, rotinas administrativas, setor financeiro e call center. Busco oportunidades para desenvolver minhas competências e crescer profissionalmente unindo organização, tecnologia e saúde.",
    btnExperience: "Ver Experiência",
    btnContact: "Entrar em Contato",
  },
  en: {
    greeting: "Hi, I'm",
    name: "Maria Luiza De Pietro Lopes",
    role: "Biomedical Engineering Student | Administration & Customer Service",
    description:
      "Biomedical Engineering undergraduate at Inatel, with experience in customer service, administrative routines, financial operations and call center. I am looking for opportunities to develop my skills and grow professionally by combining organization, technology and healthcare.",
    btnExperience: "View Experience",
    btnContact: "Get in Touch",
  },
};

  const t = content[language];

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>

      <div className="hero-content">
        <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>
          {t.greeting}
        </p>
        <h1 className="hero-name">
        <span>Maria Luiza</span>
        <span>De Pietro</span>
        <span>Lopes</span>
      </h1>
        <h2 className="highlight" style={{ fontSize: '1.75rem', marginBottom: '24px', lineHeight: '1.3' }}>
          {t.role}
        </h2>
        <p>{t.description}</p>

        <div className="hero-buttons">
          <a href="#experience" className="btn btn-primary">{t.btnExperience}</a>
          <a href="#contact" className="btn btn-secondary">{t.btnContact}</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;