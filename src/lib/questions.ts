export type Question = {
  id: string;
  topic: string;
  prompt: string;
  answer: string;
  distractors: [string, string, string];
};

export type QuizItem = {
  id: string;
  topic: string;
  prompt: string;
  options: { label: string; correct: boolean }[];
};

export const TOPICS = [
  "Dogma e informação",
  "DNA e nucleotídeos",
  "Cromatina",
  "Herança",
  "Replicação",
  "Transcrição",
  "Tradução",
  "Regulação",
  "Genoma e mutação",
] as const;

export const QUESTIONS: Question[] = [
  {
    id: "dogma",
    topic: "Dogma e informação",
    prompt: "O que descreve o Dogma Central da Biologia Molecular?",
    answer:
      "Descreve o fluxo da informação genética através da Replicação (DNA para DNA), Transcrição (DNA para RNA) e Tradução (RNA para Proteína).",
    distractors: [
      "Descreve o fluxo da informação genética através da Tradução (DNA para DNA), Replicação (DNA para RNA) e Transcrição (RNA para Proteína).",
      "Descreve o fluxo da informação proteica através da Replicação (RNA para RNA), Transcrição (RNA para DNA) e Tradução (DNA para Proteína).",
      "Descreve o fluxo da informação genética através da Replicação (DNA para RNA), Transcrição (RNA para DNA) e Tradução (DNA para Proteína).",
    ],
  },
  {
    id: "epigenoma",
    topic: "Cromatina",
    prompt: "O que define o Epigenoma?",
    answer:
      "Refere-se a modificações químicas no DNA e nas histonas que regulam a expressão dos genes sem alterar a sequência de bases nitrogenadas.",
    distractors: [
      "Refere-se a mutações pontuais no DNA e nas histonas que alteram a expressão dos genes mudando a sequência de bases nitrogenadas.",
      "Refere-se a rearranjos cromossômicos no DNA e nas histonas que regulam a expressão dos genes ao alterar a sequência de bases nitrogenadas.",
      "Refere-se a duplicações gênicas no DNA e nas histonas que regulam a expressão dos genes sem alterar o número de bases nitrogenadas.",
    ],
  },
  {
    id: "avery",
    topic: "Dogma e informação",
    prompt: "Qual foi a conclusão do Experimento de Avery?",
    answer:
      "O experimento demonstrou que o DNA é o material genético responsável pela transformação bacteriana, pois a virulência só era perdida quando o extrato era tratado com DNase.",
    distractors: [
      "O experimento demonstrou que a proteína é o material genético responsável pela transformação bacteriana, pois a virulência só era perdida quando o extrato era tratado com protease.",
      "O experimento demonstrou que o RNA é o material genético responsável pela transformação bacteriana, pois a virulência só era perdida quando o extrato era tratado com RNase.",
      "O experimento demonstrou que o lipídio é o material genético responsável pela transformação bacteriana, pois a virulência só era perdida quando o extrato era tratado com lipase.",
    ],
  },
  {
    id: "chargaff",
    topic: "DNA e nucleotídeos",
    prompt: "O que estabelece a Regra de Chargaff?",
    answer:
      "Determina que, em uma molécula de DNA, as proporções de bases são constantes: a quantidade de Adenina é igual à de Timina (A=T) e a de Guanina é igual à de Citosina (G=C).",
    distractors: [
      "Determina que, em uma molécula de DNA, as proporções de bases são constantes: a quantidade de Adenina é igual à de Guanina (A=G) e a de Timina é igual à de Citosina (T=C).",
      "Determina que, em uma molécula de RNA, as proporções de bases são constantes: a quantidade de Adenina é igual à de Uracila (A=U) e a de Guanina é igual à de Timina (G=T).",
      "Determina que, em uma molécula de DNA, as proporções de bases são variáveis: a quantidade de Adenina supera a de Timina (A>T) e a de Guanina supera a de Citosina (G>C).",
    ],
  },
  {
    id: "nucleotideo",
    topic: "DNA e nucleotídeos",
    prompt: "Quais são os três componentes de um nucleotídeo?",
    answer: "Um grupo fosfato, uma pentose (açúcar) e uma base nitrogenada.",
    distractors: [
      "Um grupo sulfato, uma hexose (açúcar) e uma base carboxilada.",
      "Um grupo nitrito, uma tetrose (açúcar) e uma base fosforilada.",
      "Um grupo metil, uma triose (açúcar) e uma base desaminada.",
    ],
  },
  {
    id: "acucar",
    topic: "DNA e nucleotídeos",
    prompt: "Qual a diferença entre o açúcar do DNA e do RNA?",
    answer: "O DNA utiliza a desoxirribose, enquanto o RNA utiliza a ribose.",
    distractors: [
      "O DNA utiliza a ribose, enquanto o RNA utiliza a desoxirribose.",
      "O DNA utiliza a glicose, enquanto o RNA utiliza a frutose.",
      "O DNA utiliza a maltose, enquanto o RNA utiliza a lactose.",
    ],
  },
  {
    id: "purinas",
    topic: "DNA e nucleotídeos",
    prompt: "Quais bases são classificadas como Purinas e quais como Pirimidinas?",
    answer:
      "Purinas: Adenina (A) e Guanina (G). Pirimidinas: Citosina (C), Timina (T - apenas no DNA) e Uracila (U - apenas no RNA).",
    distractors: [
      "Purinas: Citosina (C) e Timina (T). Pirimidinas: Adenina (A), Guanina (G - apenas no DNA) e Uracila (U - apenas no RNA).",
      "Purinas: Adenina (A) e Citosina (C). Pirimidinas: Guanina (G), Timina (T - apenas no RNA) e Uracila (U - apenas no DNA).",
      "Purinas: Guanina (G) e Uracila (U). Pirimidinas: Adenina (A), Timina (T - apenas no RNA) e Citosina (C - apenas no DNA).",
    ],
  },
  {
    id: "ad-dominante",
    topic: "Herança",
    prompt: "Como se caracteriza a Herança Autossômica Dominante em heredogramas?",
    answer:
      "Aparece em todas as gerações (não pula gerações), afeta ambos os sexos igualmente e indivíduos afetados têm pelo menos um genitor também afetado.",
    distractors: [
      "Aparece com saltos de gerações (pula gerações), afeta apenas o sexo masculino e indivíduos afetados nascem de dois genitores fenotipicamente normais.",
      "Aparece só em uma geração (não se transmite), afeta apenas o sexo feminino e indivíduos afetados nunca têm um genitor também afetado.",
      "Aparece em todas as gerações (não pula gerações), afeta apenas o sexo masculino e indivíduos afetados nascem só de mães portadoras do alelo.",
    ],
  },
  {
    id: "ad-recessiva",
    topic: "Herança",
    prompt: "Como se caracteriza a Herança Autossômica Recessiva em heredogramas?",
    answer:
      "Pode apresentar saltos de gerações, afetando filhos de pais fenotipicamente normais que são portadores do alelo.",
    distractors: [
      "Nunca apresenta saltos de gerações, afetando somente pais fenotipicamente doentes que transmitem o alelo dominante.",
      "Pode apresentar saltos de gerações, afetando somente o sexo masculino de mães fenotipicamente normais não portadoras.",
      "Nunca apresenta saltos de gerações, afetando filhos de pais fenotipicamente doentes que não são portadores do alelo.",
    ],
  },
  {
    id: "nucleossomo",
    topic: "Cromatina",
    prompt: "O que é um nucleossomo?",
    answer:
      "É a unidade básica de compactação da cromatina, formada por um segmento de DNA enrolado em um octâmero de proteínas histonas (H2A, H2B, H3 e H4).",
    distractors: [
      "É a unidade básica de compactação da cromatina, formada por um segmento de RNA enrolado em um hexâmero de proteínas histonas (H1, H2, H3 e H5).",
      "É a unidade básica de compactação da mitocôndria, formada por um segmento de DNA enrolado em um tetrâmero de proteínas tubulinas (T2A, T2B, T3 e T4).",
      "É a unidade básica de compactação da cromatina, formada por um segmento de DNA enrolado em um dímero de proteínas histonas (H1 e H5 apenas).",
    ],
  },
  {
    id: "centromero",
    topic: "Cromatina",
    prompt: "Qual a função do centrômero no cromossomo?",
    answer:
      "É a região que une as cromátides-irmãs e serve como local de ancoragem para o fuso mitótico durante a divisão celular.",
    distractors: [
      "É a região que une as cromátides-irmãs e serve como local de ancoragem para o nucléolo durante a síntese de ribossomos.",
      "É a região que une os telômeros opostos e serve como local de ancoragem para o fuso meiótico durante a replicação do DNA.",
      "É a região que une as cromátides-irmãs e serve como local de ancoragem para o retículo durante a tradução celular.",
    ],
  },
  {
    id: "fosfodiester",
    topic: "DNA e nucleotídeos",
    prompt: "Qual a polaridade das ligações fosfodiéster na fita de DNA?",
    answer:
      "A ligação ocorre entre o grupo fosfato da extremidade 5' de um nucleotídeo e a hidroxila do açúcar na extremidade 3' do nucleotídeo seguinte.",
    distractors: [
      "A ligação ocorre entre o grupo fosfato da extremidade 3' de um nucleotídeo e a hidroxila do açúcar na extremidade 5' do nucleotídeo seguinte.",
      "A ligação ocorre entre o grupo metil da extremidade 5' de um nucleotídeo e a carboxila do açúcar na extremidade 3' do nucleotídeo seguinte.",
      "A ligação ocorre entre o grupo fosfato da extremidade 2' de um nucleotídeo e a hidroxila do açúcar na extremidade 4' do nucleotídeo seguinte.",
    ],
  },
  {
    id: "propriedades-dna",
    topic: "Dogma e informação",
    prompt: "Quais são as três propriedades essenciais do DNA para a vida?",
    answer:
      "Replicação (transmissão fiel da informação), Informação (codificação de proteínas) e Mutação (fonte de variabilidade para a evolução).",
    distractors: [
      "Tradução (transmissão fiel da informação), Reparo (codificação de lipídios) e Deleção (fonte de estabilidade para a evolução).",
      "Transcrição (transmissão fiel da informação), Tradução (codificação de açúcares) e Inversão (fonte de silenciamento para a evolução).",
      "Replicação (transmissão fiel da informação), Degradação (codificação de lipídios) e Ligação (fonte de estabilidade para a evolução).",
    ],
  },
  {
    id: "hershey-chase",
    topic: "Dogma e informação",
    prompt: "O que demonstrou o Experimento de Hershey-Chase?",
    answer:
      "Utilizando bacteriófagos marcados radioativamente, confirmou que o DNA entra na célula hospedeira, provando que o DNA carrega a informação genética.",
    distractors: [
      "Utilizando bacteriófagos marcados radioativamente, confirmou que a proteína entra na célula hospedeira, provando que a proteína carrega a informação genética.",
      "Utilizando bactérias marcadas radioativamente, confirmou que o RNA entra na célula hospedeira, provando que o RNA carrega a informação genética.",
      "Utilizando bacteriófagos marcados radioativamente, confirmou que o lipídio entra na célula hospedeira, provando que o lipídio carrega a informação genética.",
    ],
  },
  {
    id: "genoma-nuclear-mt",
    topic: "Genoma e mutação",
    prompt: "Qual a principal diferença de arquitetura entre o genoma nuclear e o mitocondrial?",
    answer:
      "O genoma nuclear é linear, diploide e associado a histonas, enquanto o mitocondrial é circular, haploide e organizado em nucleoides.",
    distractors: [
      "O genoma nuclear é circular, haploide e associado a histonas, enquanto o mitocondrial é linear, diploide e organizado em nucleoides.",
      "O genoma nuclear é linear, haploide e livre de histonas, enquanto o mitocondrial é circular, diploide e organizado em nucleossomos.",
      "O genoma nuclear é circular, diploide e livre de histonas, enquanto o mitocondrial é linear, haploide e organizado em plasmídeos.",
    ],
  },
  {
    id: "nucleossoma-147",
    topic: "Cromatina",
    prompt: "O que compõe a unidade fundamental de empacotamento do DNA, o nucleossoma?",
    answer:
      "Um octâmero de histonas (H2A, H2B, H3 e H4) envolvido por aproximadamente 147 pares de bases de DNA.",
    distractors: [
      "Um hexâmero de histonas (H1, H2A, H3 e H5) envolvido por aproximadamente 247 pares de bases de DNA.",
      "Um tetrâmero de histonas (H2A, H2B, H3 e H4) envolvido por aproximadamente 47 pares de bases de DNA.",
      "Um octâmero de tubulinas (T2A, T2B, T3 e T4) envolvido por aproximadamente 147 pares de bases de RNA.",
    ],
  },
  {
    id: "eucromatina",
    topic: "Cromatina",
    prompt: "Qual a diferença funcional entre eucromatina e heterocromatina?",
    answer:
      "A eucromatina é descondensada e transcricionalmente ativa (aberta), enquanto a heterocromatina é condensada e silenciada (fechada).",
    distractors: [
      "A eucromatina é condensada e transcricionalmente inativa (fechada), enquanto a heterocromatina é descondensada e ativa (aberta).",
      "A eucromatina é descondensada e transcricionalmente inativa (fechada), enquanto a heterocromatina é condensada e ativa (aberta).",
      "A eucromatina é condensada e transcricionalmente ativa (aberta), enquanto a heterocromatina é descondensada e silenciada (fechada).",
    ],
  },
  {
    id: "paradoxo",
    topic: "Genoma e mutação",
    prompt: 'O que caracteriza o "paradoxo não-codificante" do genoma humano?',
    answer:
      "O fato de que apenas cerca de 1,5% do genoma é codificante de proteínas, enquanto a maior parte é composta por íntrons, elementos regulatórios e DNA repetitivo.",
    distractors: [
      "O fato de que apenas cerca de 98,5% do genoma é codificante de proteínas, enquanto a menor parte é composta por íntrons, elementos regulatórios e DNA repetitivo.",
      "O fato de que apenas cerca de 1,5% do genoma é composto por íntrons, enquanto a maior parte é codificante de proteínas, tRNA e DNA mitocondrial.",
      "O fato de que apenas cerca de 50% do genoma é codificante de proteínas, enquanto a menor parte é composta por éxons, elementos regulatórios e DNA repetitivo.",
    ],
  },
  {
    id: "acetilacao",
    topic: "Cromatina",
    prompt: "Como a acetilação de histonas afeta a transcrição gênica?",
    answer:
      "As histona acetiltransferases (HATs) tornam a cromatina mais acessível, facilitando a ativação da expressão gênica.",
    distractors: [
      "As histona desacetilases (HDACs) tornam a cromatina mais acessível, facilitando a ativação da expressão gênica.",
      "As histona acetiltransferases (HATs) tornam a cromatina mais condensada, impedindo a ativação da expressão gênica.",
      "As histona metiltransferases (HMTs) tornam a cromatina mais acessível, impedindo a ativação da expressão gênica.",
    ],
  },
  {
    id: "missense-nonsense",
    topic: "Genoma e mutação",
    prompt: 'Qual a diferença entre uma mutação "missense" e uma "nonsense"?',
    answer:
      "A missense altera um aminoácido na proteína, enquanto a nonsense cria um códon de parada (STOP) prematuro, truncando a proteína.",
    distractors: [
      "A missense cria um códon de parada (STOP) prematuro, enquanto a nonsense altera um aminoácido na proteína, alongando a proteína.",
      "A missense remove um aminoácido da proteína, enquanto a nonsense cria um códon de início (START) extra, duplicando a proteína.",
      "A missense altera um nucleotídeo sem efeito, enquanto a nonsense troca um aminoácido por outro, mantendo a proteína intacta.",
    ],
  },
  {
    id: "retrotransposons",
    topic: "Genoma e mutação",
    prompt: 'O que define o mecanismo de "copiar e colar" dos retrotransposons?',
    answer:
      "O DNA original é transcrito em um RNA intermediário, que sofre transcrição reversa para inserir uma nova cópia de DNA em outro local do genoma.",
    distractors: [
      "O DNA original é recortado da posição inicial, que sofre ligação direta para inserir a mesma cópia de DNA em outro local do genoma.",
      "O RNA original é traduzido em uma proteína intermediária, que sofre transcrição direta para inserir uma nova cópia de RNA em outro local do genoma.",
      "O DNA original é transcrito em um DNA intermediário, que sofre replicação conservativa para inserir a mesma cópia de RNA em outro local do genoma.",
    ],
  },
  {
    id: "enhancers",
    topic: "Regulação",
    prompt: 'Qual a função dos elementos "enhancers" (potencializadores) no genoma?',
    answer:
      "São sequências regulatórias que aumentam a transcrição de genes específicos, muitas vezes atuando a grandes distâncias através de alças (loops) 3D na cromatina.",
    distractors: [
      "São sequências regulatórias que diminuem a transcrição de genes específicos, muitas vezes atuando a curtas distâncias através de cortes (nicks) 3D na cromatina.",
      "São sequências repetitivas que aumentam a replicação de genes específicos, muitas vezes atuando a grandes distâncias através de alças (loops) 3D na mitose.",
      "São sequências regulatórias que aumentam a tradução de genes específicos, muitas vezes atuando no citoplasma através de alças (loops) 3D no ribossomo.",
    ],
  },
  {
    id: "msi",
    topic: "Genoma e mutação",
    prompt: "O que é a instabilidade de microssatélites (MSI)?",
    answer:
      "É a variação no comprimento de sequências repetitivas causada por falhas no sistema de reparo de mau emparelhamento (MMR).",
    distractors: [
      "É a variação no comprimento de sequências únicas causada por falhas no sistema de reparo por excisão de bases (BER).",
      "É a variação no número de cromossomos inteiros causada por falhas no sistema de reparo de quebras de fita dupla (NHEJ).",
      "É a variação no comprimento de sequências repetitivas causada por falhas no sistema de transcrição reversa (RT).",
    ],
  },
  {
    id: "oncogenes",
    topic: "Genoma e mutação",
    prompt: "Qual a diferença entre proto-oncogenes e genes supressores de tumor?",
    answer:
      "Proto-oncogenes promovem o crescimento celular e tornam-se oncogenes por ganho de função; genes supressores de tumor controlam o ciclo celular e causam câncer por perda de função.",
    distractors: [
      "Proto-oncogenes reprimem o crescimento celular e tornam-se oncogenes por perda de função; genes supressores de tumor aceleram o ciclo celular e causam câncer por ganho de função.",
      "Proto-oncogenes promovem o crescimento celular e tornam-se oncogenes por perda de função; genes supressores de tumor controlam o ciclo celular e causam câncer por ganho de função.",
      "Proto-oncogenes silenciam o crescimento celular e tornam-se oncogenes por ganho de função; genes supressores de tumor aceleram o ciclo celular e causam câncer por perda de função.",
    ],
  },
  {
    id: "fase-s",
    topic: "Replicação",
    prompt: "Em qual fase do ciclo celular ocorre a replicação do DNA?",
    answer: "A replicação ocorre exclusivamente durante a fase S da intérfase.",
    distractors: [
      "A replicação ocorre exclusivamente durante a fase M da mitose.",
      "A replicação ocorre exclusivamente durante a fase G1 da intérfase.",
      "A replicação ocorre exclusivamente durante a fase G2 da intérfase.",
    ],
  },
  {
    id: "semiconservativa",
    topic: "Replicação",
    prompt: "Por que a replicação do DNA é considerada semiconservativa?",
    answer:
      "Porque cada molécula de DNA-filha conserva uma fita da molécula parental e sintetiza uma nova fita complementar.",
    distractors: [
      "Porque cada molécula de DNA-filha conserva as duas fitas da molécula parental e não sintetiza nenhuma fita complementar.",
      "Porque cada molécula de DNA-filha descarta as duas fitas da molécula parental e sintetiza duas novas fitas idênticas.",
      "Porque cada molécula de DNA-filha conserva um fragmento da molécula parental e sintetiza três novas fitas complementares.",
    ],
  },
  {
    id: "helicase",
    topic: "Replicação",
    prompt: "Qual a função da enzima Helicase no processo?",
    answer:
      "A Helicase catalisa o desenrolamento da dupla-hélice parental, abrindo as fitas para a replicação.",
    distractors: [
      "A Helicase catalisa o enrolamento da dupla-hélice parental, fechando as fitas após a replicação.",
      "A Helicase catalisa a ligação dos fragmentos de Okazaki, unindo as fitas após a replicação.",
      "A Helicase catalisa a síntese da fita complementar, copiando as fitas durante a replicação.",
    ],
  },
  {
    id: "ssb",
    topic: "Replicação",
    prompt: "Qual o papel das proteínas SSB (Single-Strand Binding)?",
    answer:
      "Elas mantêm os filamentos de DNA desenrolados e estabilizados na forma estendida, impedindo o reanelamento das fitas.",
    distractors: [
      "Elas mantêm os filamentos de DNA enrolados e compactados na forma helicoidal, promovendo o reanelamento das fitas.",
      "Elas cortam os filamentos de DNA desenrolados e fragmentados na forma circular, impedindo o avanço das fitas.",
      "Elas unem os filamentos de DNA desenrolados e polimerizados na forma duplex, promovendo o reanelamento das fitas.",
    ],
  },
  {
    id: "topoisomerase",
    topic: "Replicação",
    prompt: "Como a Topoisomerase auxilia no avanço da forquilha de replicação?",
    answer:
      "Ela remove a tensão gerada pelo superenrolamento positivo à frente da forquilha, realizando cortes transitórios e religando as fitas.",
    distractors: [
      "Ela aumenta a tensão gerada pelo superenrolamento negativo atrás da forquilha, realizando cortes permanentes e separando as fitas.",
      "Ela remove a tensão gerada pelo superenrolamento positivo atrás da forquilha, realizando ligações estáveis e abrindo as fitas.",
      "Ela aumenta a tensão gerada pelo superenrolamento positivo à frente da forquilha, evitando cortes transitórios e travando as fitas.",
    ],
  },
  {
    id: "etapas-transcricao",
    topic: "Transcrição",
    prompt: "Quais são as três etapas fundamentais da transcrição?",
    answer: "Iniciação (reconhecimento do promotor), elongação (síntese do RNA) e terminação.",
    distractors: [
      "Ativação (reconhecimento do operador), tradução (síntese do DNA) e clivagem.",
      "Iniciação (reconhecimento do ribossomo), elongação (síntese do DNA) e splicing.",
      "Promoção (reconhecimento do enhancer), replicação (síntese do RNA) e edição.",
    ],
  },
  {
    id: "diferenciacao",
    topic: "Regulação",
    prompt: "O que explica a diferenciação celular a partir de um mesmo genoma?",
    answer:
      "A expressão gênica diferencial, onde diferentes tipos celulares ativam conjuntos distintos de genes para produzir proteínas específicas.",
    distractors: [
      "A perda gênica diferencial, onde diferentes tipos celulares eliminam conjuntos distintos de genes para produzir proteínas específicas.",
      "A replicação gênica diferencial, onde diferentes tipos celulares duplicam conjuntos distintos de cromossomos para produzir RNA específico.",
      "A mutação gênica diferencial, onde diferentes tipos celulares alteram conjuntos distintos de bases para produzir lipídios específicos.",
    ],
  },
  {
    id: "rnar-rnat",
    topic: "Tradução",
    prompt: "Quais são as funções dos RNAs não codificadores RNAr e RNAt?",
    answer:
      "O RNAr é um componente estrutural e catalítico dos ribossomos, enquanto o RNAt transporta aminoácidos e decodifica o RNAm durante a síntese proteica.",
    distractors: [
      "O RNAr transporta aminoácidos e decodifica o RNAm, enquanto o RNAt é um componente estrutural e catalítico dos ribossomos durante a síntese proteica.",
      "O RNAr é um componente estrutural e catalítico dos lisossomos, enquanto o RNAt transporta nucleotídeos e decodifica o DNAm durante a síntese proteica.",
      "O RNAr é um molde para a síntese de proteínas, enquanto o RNAt é um componente estrutural e catalítico dos spliceossomos durante o splicing.",
    ],
  },
  {
    id: "pol-ii",
    topic: "Transcrição",
    prompt: "Qual a função específica da RNA Polimerase II em células eucarióticas?",
    answer:
      "Ela é responsável pela transcrição de todos os genes codificadores de proteínas (pré-mRNA), além de alguns snRNA e miRNA.",
    distractors: [
      "Ela é responsável pela transcrição de todos os genes de RNA ribossômico (pré-rRNA), além de alguns tRNA e snoRNA.",
      "Ela é responsável pela transcrição de todos os genes de RNA transportador (pré-tRNA), além de alguns rRNA e siRNA.",
      "Ela é responsável pela replicação de todos os genes codificadores de proteínas (pré-mRNA), além de alguns snRNA e miRNA.",
    ],
  },
  {
    id: "pre-mrna",
    topic: "Transcrição",
    prompt: "Quais são as três principais modificações do processamento do pré-mRNA?",
    answer:
      "Adição do Cap 5' (7-metilguanosina), splicing (remoção de íntrons) e poliadenilação (cauda Poli-A 3').",
    distractors: [
      "Adição do Cap 3' (7-metilcitosina), splicing (remoção de éxons) e polimetilação (cauda Poli-G 5').",
      "Adição do Cap 5' (5-metiluracila), editing (remoção de éxons) e poliadenilação (cauda Poli-U 3').",
      "Adição do Cap 2' (7-metiladenina), splicing (remoção de íntrons) e poliglicosilação (cauda Poli-C 5').",
    ],
  },
  {
    id: "molde-traducao",
    topic: "Tradução",
    prompt: "Qual molécula serve de molde para a síntese de proteínas na tradução gênica?",
    answer: "O RNA mensageiro (mRNA).",
    distractors: [
      "O RNA ribossômico (rRNA).",
      "O RNA transportador (tRNA).",
      "O DNA complementar (cDNA).",
    ],
  },
  {
    id: "ribossomo",
    topic: "Tradução",
    prompt: "Qual organela celular catalisa a formação das ligações peptídicas entre os aminoácidos?",
    answer: "O ribossomo.",
    distractors: [
      "O lisossomo.",
      "O nucléolo.",
      "O peroxissomo.",
    ],
  },
  {
    id: "degenerado",
    topic: "Tradução",
    prompt: "O que significa dizer que o código genético é degenerado?",
    answer: "Significa que a maioria dos aminoácidos pode ser codificada por mais de um códon.",
    distractors: [
      "Significa que a maioria dos aminoácidos pode ser codificada por apenas um códon.",
      "Significa que a maioria dos códons pode ser traduzida em mais de uma proteína.",
      "Significa que a maioria dos aminoácidos não pode ser codificada por nenhum códon.",
    ],
  },
  {
    id: "stop-codons",
    topic: "Tradução",
    prompt: "Quais são os três códons de término (stop codons) da tradução?",
    answer: "Os códons UAA, UAG e UGA.",
    distractors: [
      "Os códons UUU, UUC e UUA.",
      "Os códons AUG, AUC e AUA.",
      "Os códons GGA, GGC e GGG.",
    ],
  },
  {
    id: "start-codon",
    topic: "Tradução",
    prompt: "Qual é o códon de início (start codon) e qual aminoácido ele codifica em eucariotos?",
    answer: "O códon é o AUG, que codifica o aminoácido metionina.",
    distractors: [
      "O códon é o UGA, que codifica o aminoácido triptofano.",
      "O códon é o UAG, que codifica o aminoácido metionina.",
      "O códon é o AUG, que codifica o aminoácido alanina.",
    ],
  },
  {
    id: "reg-pos-neg",
    topic: "Regulação",
    prompt: "Qual é a diferença fundamental entre regulação positiva e regulação negativa da transcrição?",
    answer:
      "Na regulação positiva, um ativador é necessário para iniciar a transcrição. Na regulação negativa, um repressor impede a transcrição ligando-se ao operador.",
    distractors: [
      "Na regulação positiva, um repressor é necessário para iniciar a transcrição. Na regulação negativa, um ativador impede a transcrição ligando-se ao operador.",
      "Na regulação positiva, um ativador é necessário para impedir a transcrição. Na regulação negativa, um repressor inicia a transcrição ligando-se ao promotor.",
      "Na regulação positiva, um operador é necessário para iniciar a tradução. Na regulação negativa, um enhancer impede a transcrição ligando-se ao repressor.",
    ],
  },
  {
    id: "cis",
    topic: "Regulação",
    prompt: "O que caracteriza um elemento regulador em cis?",
    answer:
      "É uma sequência específica de DNA que regula apenas os genes localizados na mesma molécula física de DNA, como promotores e operadores.",
    distractors: [
      "É uma proteína difusível de DNA que regula qualquer gene localizado em outra molécula física de DNA, como repressores e ativadores.",
      "É uma sequência específica de RNA que regula apenas os genes localizados em outra molécula física de DNA, como íntrons e éxons.",
      "É uma sequência específica de DNA que regula todos os genes localizados em qualquer molécula física de DNA, como ribossomos e histonas.",
    ],
  },
  {
    id: "trans",
    topic: "Regulação",
    prompt: "O que caracteriza um elemento regulador em trans?",
    answer:
      "É uma molécula difusível (geralmente uma proteína reguladora, como repressores ou ativadores) que pode atuar em qualquer molécula de DNA na célula.",
    distractors: [
      "É uma sequência fixa de DNA (geralmente um promotor ou operador, como TATA ou CAP) que só atua na mesma molécula de DNA na célula.",
      "É uma molécula difusível (geralmente um RNA ribossômico, como RNAr ou RNAt) que só atua na mesma molécula de DNA na célula.",
      "É uma sequência fixa de RNA (geralmente um íntron ou éxon, como splice sites) que pode atuar em qualquer molécula de DNA na célula.",
    ],
  },
  {
    id: "lac-repressor",
    topic: "Regulação",
    prompt: "Qual é o efeito da presença de lactose sobre o repressor do óperon lac?",
    answer:
      "A lactose atua como indutor, ligando-se ao repressor e alterando sua conformação, o que faz com que ele se desprenda do operador e libere a transcrição.",
    distractors: [
      "A lactose atua como correpressor, ligando-se ao repressor e estabilizando sua conformação, o que faz com que ele se prenda ao operador e bloqueie a transcrição.",
      "A lactose atua como indutor, ligando-se ao operador e alterando sua sequência, o que faz com que o repressor se prenda ao promotor e bloqueie a transcrição.",
      "A lactose atua como ativador, ligando-se à RNA polimerase e alterando sua especificidade, o que faz com que ela se desprenda do promotor e pare a transcrição.",
    ],
  },
];
