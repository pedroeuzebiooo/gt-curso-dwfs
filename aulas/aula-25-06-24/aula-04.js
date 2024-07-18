const pedro = {
  experiencia: [
    {
      cargo: "Desenvolvedor Full Stack",
      empresa: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
    },
  ],
  formacaoAcademica: [
    {
      diploma: "Tecnólogo em Sistemas para Internet",
      instuicao: "Universidade Estácio de Sá",
    },
    {
      diploma: "Técnico em Informática",
      instuicao: "EEEP de Baturité",
    },
  ],
};

alert(`Pedro possui o diploma de ${pedro.formacaoAcademica[1].diploma}`);
