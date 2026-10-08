const DADOS = {
  curriculoPdf: "",

  pitch: "Atuo no setor privado com foco em Java, Spring Boot e Angular. As experiências com Suporte Técnico e Customer Success me aproximaram de quem usa o produto, hoje isso me ajuda a contribuir positivamente em tarefas, transitando de regras de negócio complexas para interfaces atrativas, claras e fáceis de usar, com qualidade técnica e entregas bem testadas.",

  meta: [
    { icone:"pin",  texto:"Campo Grande, MS" },
    { icone:"lang", texto:"Inglês intermediário" },
    { icone:"bag",  texto:"AZ Tecnologia em Gestão | EFCAZ SRM - Gestão de Fornecedores e Terceiros" }
  ],

  contatos: {
    email:    "mailto:aliane.eamaral@gmail.com",
    linkedin: "https://www.linkedin.com/in/alianeamaral",
    github:   "https://github.com/AlianeAmaral",
  },

  projetos: [
    {
      status:"dev", destaque:true, icone:"cat",
      titulo:"Amicats",
      descricao:"Sistema web e mobile para uma ONG de proteção felina, desenvolvido em equipe como trabalho de conclusão de curso para cliente real. Reúne a gestão dos gatinhos, o controle de saúde e as prescrições do médico veterinário.",
      fiz:[
        "Back-end em Java e Spring Boot.",
        "Clean Architecture e migrations com Flyway.",
        "Telas Web em Angular e Mobile em React Native com Expo.",
        "Sincronização offline.",
        "Deploy com Docker, Nginx, SSL e CI/CD no GitHub Actions.",
        "Sistema hospedado e publicado em uso."
      ],
      tags:["Java","Spring Boot","PostgreSQL","Flyway","Angular","React Native","Expo","SQLite","Docker","Nginx"],
      demo:"", codigo:""
    },
    {
      status:"done", icone:"owl",
      titulo:"Atlaz Biblioteca",
      descricao:"Sistema de gestão de biblioteca com API REST, Java e Vue.js.",
      fiz:[
        "API REST com Spring Boot e JPA/Hibernate.",
        "Front-end em Vue.js consumindo a API."
      ],
      tags:["Java","Spring Boot","JPA","Hibernate","Maven","Vue.js"],
      demo:"", codigo:""
    },
    {
      status:"dev", icone:"dna",
      titulo:"Synapse Sistema Escolar",
      descricao:"Sistema de gestão escolar que estou desenvolvendo, com back-end em Java e front-end em React.",
      tags:["Java","Spring Boot","JPA","Hibernate","Maven","React"],
      demo:"", codigo:""
    }
  ],

  diferenciais: [
    { titulo:"Trabalho em equipe", texto:"Acredito que um time unido pode entregar muito mais valor, dividindo para conquistar. Estou sempre disposta a aprender, ajudar e dividir conhecimento." },
    { titulo:"Olhar criativo", texto:"Tenho bagagem em artes e costumo ser detalhista e ter facilidade para enxergar possibilidades de melhoria em interfaces e fluxos." },
    { titulo:"Testes e qualidade", texto:"Testo minhas tarefas a fundo antes da entrega e tenho facilidade para encontrar bugs, até mesmo que já existem, mas sempre ponderando foco e prioridades." },
    { titulo:"Aprendizado rápido", texto:"Gosto de estudar, ler e me adapto bem a tecnologias novas. Isso me ajudou muito durante minha jornada." },
    { titulo:"Visão do usuário", texto:"Anos atendendo clientes tanto no Suporte Técnico quanto na área de Customer Success me ensinaram a entender o problema com a visão de quem também está utilizando e pagando pelo produto." },
    { titulo:"Versionamento e agilidade", texto:"Tenho boa vivência com versionamento de código e com rotinas de metodologias ágeis, como daily, sprints, retrospectiva e planejamento em equipe." }
  ],

  stacks: [
    { grupo:"Back-end", icone:"door", itens:["Java 8, 11 e 21","Spring Boot","Spring Data JPA","Hibernate","QueryDSL","Lombok","Node.js","APIs RESTful","RabbitMQ","Microsserviços"] },
    { grupo:"Front-end", icone:"layout", itens:["Angular","AngularJS","React","Next.js","Vue.js","JavaScript","HTML","CSS","Tailwind CSS","Bootstrap","Kendo UI","jQuery"] },
    { grupo:"Mobile", icone:"phone", itens:["React Native","Expo","TypeScript"] },
    { grupo:"Banco de dados", icone:"db", itens:["PostgreSQL","MongoDB","Flyway","Liquibase"] },
    { grupo:"Testes", icone:"check", itens:["JUnit","Mockito","Jasmine","Karma"] },
    { grupo:"Arquitetura", icone:"layers", itens:["Clean Architecture","Arquitetura Hexagonal","Mensageria","Integração com APIs Externas"] },
    { grupo:"Infra & deploy", icone:"server", itens:["Docker","Docker Compose","Nginx","Let's Encrypt","GitHub Actions","VPS Linux","AWS"] },
    { grupo:"Ferramentas", icone:"tool", itens:["Git","GitHub","IntelliJ IDEA","Maven","Postman","Jira","Linux"] }
  ],

  cursos: [
    { nome:"AWS re/Start + Inteligência Artificial", org:"270 horas" },
    { nome:"Desenvolvimento React + Next.js", org:"Presencial" },
    { nome:"Lógica de Programação com JavaScript", org:"Alura" },
    { nome:"Scrum Foundations Professional Certificate", org:"SFPC" },
    { nome:"Fast MBA Lead: Liderança e Gestão de Pessoas", org:"-" }
  ],

  trajetoria: [
    { quando:"Abr 2026 até hoje", titulo:"Desenvolvedora Full Stack Java + Angular", onde:"AZ Tecnologia em Gestão", produto:"EFCAZ SRM - Gestão de Fornecedores e Terceiros",
      texto:"Desenvolvo para um grande sistema de gestão de fornecedores e terceiros para o setor privado, principalmente com Java, Spring Boot e AngularJS." },
    { quando:"Jun 2025 a abr 2026", titulo:"Customer Success", onde:"AZ Tecnologia em Gestão",
      texto:"Onboarding e treinamento de clientes. Revisei a jornada de onboarding e organizei projetos do time com Scrum." },
    { quando:"Out 2024 a jun 2025", titulo:"Analista de Suporte Pleno / Sênior", onde:"AZ Tecnologia em Gestão",
      texto:"Estruturei os processos do suporte, iniciei a criação de uma base de conhecimento para clientes e o relatório mensal de indicadores." },
    { quando:"Ago 2018 a ago 2024", titulo:"Analista de Suporte", onde:"Unisys",
      texto:"Suporte técnico para empresas de médio e grande porte, como Santander, Ri Happy, Xerox, ISA CTEEP e outras. Vivência com redes, servidores, VPN e ferramentas como Active Directory e ServiceNow. Reconhecida pela qualidade de atendimento." },
    { quando:"Jul 2023 a dez 2026", titulo:"Análise e Desenvolvimento de Sistemas", onde:"PUC Minas", texto:"" }
  ]
};
