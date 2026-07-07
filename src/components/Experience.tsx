interface ExperienceProps {
  language: 'pt' | 'en';
}

const Experience = ({ language }: ExperienceProps) => {
  const experiences = [
    {
      title: {
        pt: 'Bolsista - Start_Inatel de Produção',
        en: 'Scholarship Holder - Start_Inatel Production',
      },
      company: 'Instituto Nacional de Telecomunicações - Inatel',
      period: {
        pt: 'Março 2026 - Atual',
        en: 'March 2026 - Present',
      },
      description: {
        pt: 'Participação no programa Start_Inatel de Produção, desenvolvendo atividades vinculadas ao ambiente acadêmico e profissional, com foco em aprendizado, responsabilidade e desenvolvimento de competências.',
        en: 'Participation in the Start_Inatel Production program, carrying out activities related to the academic and professional environment, focused on learning, responsibility and skill development.',
      },
    },
    {
      title: {
        pt: 'Estágio - Atendimento ao Público',
        en: 'Internship - Customer Service',
      },
      company: 'Caixa Econômica Federal',
      period: {
        pt: 'Junho 2024 - Agosto 2025',
        en: 'June 2024 - August 2025',
      },
      description: {
        pt: 'Atendimento ao público, suporte em operações financeiras, orientação aos clientes e apoio em rotinas administrativas no setor bancário.',
        en: 'Customer service, support in financial operations, client guidance and assistance with administrative routines in the banking sector.',
      },
    },
    {
      title: {
        pt: 'Jovem Aprendiz - Assistente Administrativo',
        en: 'Young Apprentice - Administrative Assistant',
      },
      company: 'Methodos Laboratório',
      period: {
        pt: 'Fevereiro 2023 - Fevereiro 2024',
        en: 'February 2023 - February 2024',
      },
      description: {
        pt: 'Apoio em rotinas administrativas, organização de documentos, atendimento interno, suporte às demandas do escritório e trabalho em equipe.',
        en: 'Support with administrative routines, document organization, internal service, office task assistance and teamwork.',
      },
    },
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">
        {language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}
      </h2>

      <div className="cards-list">
        {experiences.map((exp) => (
          <div key={exp.title.pt} className="experience-card">
            <div className="experience-header">
              <div className="experience-main">
                <h3>{exp.title[language]}</h3>
                <p className="card-accent">{exp.company}</p>
              </div>

              <span className="experience-period">{exp.period[language]}</span>
            </div>

            <p>{exp.description[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;