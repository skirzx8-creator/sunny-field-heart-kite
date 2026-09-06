import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, i as Check, o as ArrowLeft, r as RotateCcw, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-VHbQivyO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var QUESTIONS = [
	{
		id: "dogma",
		topic: "Dogma e informação",
		prompt: "O que descreve o Dogma Central da Biologia Molecular?",
		answer: "Descreve o fluxo da informação genética através da Replicação (DNA para DNA), Transcrição (DNA para RNA) e Tradução (RNA para Proteína).",
		distractors: [
			"Descreve o fluxo da informação genética através da Tradução (DNA para DNA), Replicação (DNA para RNA) e Transcrição (RNA para Proteína).",
			"Descreve o fluxo da informação proteica através da Replicação (RNA para RNA), Transcrição (RNA para DNA) e Tradução (DNA para Proteína).",
			"Descreve o fluxo da informação genética através da Replicação (DNA para RNA), Transcrição (RNA para DNA) e Tradução (DNA para Proteína)."
		]
	},
	{
		id: "epigenoma",
		topic: "Cromatina",
		prompt: "O que define o Epigenoma?",
		answer: "Refere-se a modificações químicas no DNA e nas histonas que regulam a expressão dos genes sem alterar a sequência de bases nitrogenadas.",
		distractors: [
			"Refere-se a mutações pontuais no DNA e nas histonas que alteram a expressão dos genes mudando a sequência de bases nitrogenadas.",
			"Refere-se a rearranjos cromossômicos no DNA e nas histonas que regulam a expressão dos genes ao alterar a sequência de bases nitrogenadas.",
			"Refere-se a duplicações gênicas no DNA e nas histonas que regulam a expressão dos genes sem alterar o número de bases nitrogenadas."
		]
	},
	{
		id: "avery",
		topic: "Dogma e informação",
		prompt: "Qual foi a conclusão do Experimento de Avery?",
		answer: "O experimento demonstrou que o DNA é o material genético responsável pela transformação bacteriana, pois a virulência só era perdida quando o extrato era tratado com DNase.",
		distractors: [
			"O experimento demonstrou que a proteína é o material genético responsável pela transformação bacteriana, pois a virulência só era perdida quando o extrato era tratado com protease.",
			"O experimento demonstrou que o RNA é o material genético responsável pela transformação bacteriana, pois a virulência só era perdida quando o extrato era tratado com RNase.",
			"O experimento demonstrou que o lipídio é o material genético responsável pela transformação bacteriana, pois a virulência só era perdida quando o extrato era tratado com lipase."
		]
	},
	{
		id: "chargaff",
		topic: "DNA e nucleotídeos",
		prompt: "O que estabelece a Regra de Chargaff?",
		answer: "Determina que, em uma molécula de DNA, as proporções de bases são constantes: a quantidade de Adenina é igual à de Timina (A=T) e a de Guanina é igual à de Citosina (G=C).",
		distractors: [
			"Determina que, em uma molécula de DNA, as proporções de bases são constantes: a quantidade de Adenina é igual à de Guanina (A=G) e a de Timina é igual à de Citosina (T=C).",
			"Determina que, em uma molécula de RNA, as proporções de bases são constantes: a quantidade de Adenina é igual à de Uracila (A=U) e a de Guanina é igual à de Timina (G=T).",
			"Determina que, em uma molécula de DNA, as proporções de bases são variáveis: a quantidade de Adenina supera a de Timina (A>T) e a de Guanina supera a de Citosina (G>C)."
		]
	},
	{
		id: "nucleotideo",
		topic: "DNA e nucleotídeos",
		prompt: "Quais são os três componentes de um nucleotídeo?",
		answer: "Um grupo fosfato, uma pentose (açúcar) e uma base nitrogenada.",
		distractors: [
			"Um grupo sulfato, uma hexose (açúcar) e uma base carboxilada.",
			"Um grupo nitrito, uma tetrose (açúcar) e uma base fosforilada.",
			"Um grupo metil, uma triose (açúcar) e uma base desaminada."
		]
	},
	{
		id: "acucar",
		topic: "DNA e nucleotídeos",
		prompt: "Qual a diferença entre o açúcar do DNA e do RNA?",
		answer: "O DNA utiliza a desoxirribose, enquanto o RNA utiliza a ribose.",
		distractors: [
			"O DNA utiliza a ribose, enquanto o RNA utiliza a desoxirribose.",
			"O DNA utiliza a glicose, enquanto o RNA utiliza a frutose.",
			"O DNA utiliza a maltose, enquanto o RNA utiliza a lactose."
		]
	},
	{
		id: "purinas",
		topic: "DNA e nucleotídeos",
		prompt: "Quais bases são classificadas como Purinas e quais como Pirimidinas?",
		answer: "Purinas: Adenina (A) e Guanina (G). Pirimidinas: Citosina (C), Timina (T - apenas no DNA) e Uracila (U - apenas no RNA).",
		distractors: [
			"Purinas: Citosina (C) e Timina (T). Pirimidinas: Adenina (A), Guanina (G - apenas no DNA) e Uracila (U - apenas no RNA).",
			"Purinas: Adenina (A) e Citosina (C). Pirimidinas: Guanina (G), Timina (T - apenas no RNA) e Uracila (U - apenas no DNA).",
			"Purinas: Guanina (G) e Uracila (U). Pirimidinas: Adenina (A), Timina (T - apenas no RNA) e Citosina (C - apenas no DNA)."
		]
	},
	{
		id: "ad-dominante",
		topic: "Herança",
		prompt: "Como se caracteriza a Herança Autossômica Dominante em heredogramas?",
		answer: "Aparece em todas as gerações (não pula gerações), afeta ambos os sexos igualmente e indivíduos afetados têm pelo menos um genitor também afetado.",
		distractors: [
			"Aparece com saltos de gerações (pula gerações), afeta apenas o sexo masculino e indivíduos afetados nascem de dois genitores fenotipicamente normais.",
			"Aparece só em uma geração (não se transmite), afeta apenas o sexo feminino e indivíduos afetados nunca têm um genitor também afetado.",
			"Aparece em todas as gerações (não pula gerações), afeta apenas o sexo masculino e indivíduos afetados nascem só de mães portadoras do alelo."
		]
	},
	{
		id: "ad-recessiva",
		topic: "Herança",
		prompt: "Como se caracteriza a Herança Autossômica Recessiva em heredogramas?",
		answer: "Pode apresentar saltos de gerações, afetando filhos de pais fenotipicamente normais que são portadores do alelo.",
		distractors: [
			"Nunca apresenta saltos de gerações, afetando somente pais fenotipicamente doentes que transmitem o alelo dominante.",
			"Pode apresentar saltos de gerações, afetando somente o sexo masculino de mães fenotipicamente normais não portadoras.",
			"Nunca apresenta saltos de gerações, afetando filhos de pais fenotipicamente doentes que não são portadores do alelo."
		]
	},
	{
		id: "nucleossomo",
		topic: "Cromatina",
		prompt: "O que é um nucleossomo?",
		answer: "É a unidade básica de compactação da cromatina, formada por um segmento de DNA enrolado em um octâmero de proteínas histonas (H2A, H2B, H3 e H4).",
		distractors: [
			"É a unidade básica de compactação da cromatina, formada por um segmento de RNA enrolado em um hexâmero de proteínas histonas (H1, H2, H3 e H5).",
			"É a unidade básica de compactação da mitocôndria, formada por um segmento de DNA enrolado em um tetrâmero de proteínas tubulinas (T2A, T2B, T3 e T4).",
			"É a unidade básica de compactação da cromatina, formada por um segmento de DNA enrolado em um dímero de proteínas histonas (H1 e H5 apenas)."
		]
	},
	{
		id: "centromero",
		topic: "Cromatina",
		prompt: "Qual a função do centrômero no cromossomo?",
		answer: "É a região que une as cromátides-irmãs e serve como local de ancoragem para o fuso mitótico durante a divisão celular.",
		distractors: [
			"É a região que une as cromátides-irmãs e serve como local de ancoragem para o nucléolo durante a síntese de ribossomos.",
			"É a região que une os telômeros opostos e serve como local de ancoragem para o fuso meiótico durante a replicação do DNA.",
			"É a região que une as cromátides-irmãs e serve como local de ancoragem para o retículo durante a tradução celular."
		]
	},
	{
		id: "fosfodiester",
		topic: "DNA e nucleotídeos",
		prompt: "Qual a polaridade das ligações fosfodiéster na fita de DNA?",
		answer: "A ligação ocorre entre o grupo fosfato da extremidade 5' de um nucleotídeo e a hidroxila do açúcar na extremidade 3' do nucleotídeo seguinte.",
		distractors: [
			"A ligação ocorre entre o grupo fosfato da extremidade 3' de um nucleotídeo e a hidroxila do açúcar na extremidade 5' do nucleotídeo seguinte.",
			"A ligação ocorre entre o grupo metil da extremidade 5' de um nucleotídeo e a carboxila do açúcar na extremidade 3' do nucleotídeo seguinte.",
			"A ligação ocorre entre o grupo fosfato da extremidade 2' de um nucleotídeo e a hidroxila do açúcar na extremidade 4' do nucleotídeo seguinte."
		]
	},
	{
		id: "propriedades-dna",
		topic: "Dogma e informação",
		prompt: "Quais são as três propriedades essenciais do DNA para a vida?",
		answer: "Replicação (transmissão fiel da informação), Informação (codificação de proteínas) e Mutação (fonte de variabilidade para a evolução).",
		distractors: [
			"Tradução (transmissão fiel da informação), Reparo (codificação de lipídios) e Deleção (fonte de estabilidade para a evolução).",
			"Transcrição (transmissão fiel da informação), Tradução (codificação de açúcares) e Inversão (fonte de silenciamento para a evolução).",
			"Replicação (transmissão fiel da informação), Degradação (codificação de lipídios) e Ligação (fonte de estabilidade para a evolução)."
		]
	},
	{
		id: "hershey-chase",
		topic: "Dogma e informação",
		prompt: "O que demonstrou o Experimento de Hershey-Chase?",
		answer: "Utilizando bacteriófagos marcados radioativamente, confirmou que o DNA entra na célula hospedeira, provando que o DNA carrega a informação genética.",
		distractors: [
			"Utilizando bacteriófagos marcados radioativamente, confirmou que a proteína entra na célula hospedeira, provando que a proteína carrega a informação genética.",
			"Utilizando bactérias marcadas radioativamente, confirmou que o RNA entra na célula hospedeira, provando que o RNA carrega a informação genética.",
			"Utilizando bacteriófagos marcados radioativamente, confirmou que o lipídio entra na célula hospedeira, provando que o lipídio carrega a informação genética."
		]
	},
	{
		id: "genoma-nuclear-mt",
		topic: "Genoma e mutação",
		prompt: "Qual a principal diferença de arquitetura entre o genoma nuclear e o mitocondrial?",
		answer: "O genoma nuclear é linear, diploide e associado a histonas, enquanto o mitocondrial é circular, haploide e organizado em nucleoides.",
		distractors: [
			"O genoma nuclear é circular, haploide e associado a histonas, enquanto o mitocondrial é linear, diploide e organizado em nucleoides.",
			"O genoma nuclear é linear, haploide e livre de histonas, enquanto o mitocondrial é circular, diploide e organizado em nucleossomos.",
			"O genoma nuclear é circular, diploide e livre de histonas, enquanto o mitocondrial é linear, haploide e organizado em plasmídeos."
		]
	},
	{
		id: "nucleossoma-147",
		topic: "Cromatina",
		prompt: "O que compõe a unidade fundamental de empacotamento do DNA, o nucleossoma?",
		answer: "Um octâmero de histonas (H2A, H2B, H3 e H4) envolvido por aproximadamente 147 pares de bases de DNA.",
		distractors: [
			"Um hexâmero de histonas (H1, H2A, H3 e H5) envolvido por aproximadamente 247 pares de bases de DNA.",
			"Um tetrâmero de histonas (H2A, H2B, H3 e H4) envolvido por aproximadamente 47 pares de bases de DNA.",
			"Um octâmero de tubulinas (T2A, T2B, T3 e T4) envolvido por aproximadamente 147 pares de bases de RNA."
		]
	},
	{
		id: "eucromatina",
		topic: "Cromatina",
		prompt: "Qual a diferença funcional entre eucromatina e heterocromatina?",
		answer: "A eucromatina é descondensada e transcricionalmente ativa (aberta), enquanto a heterocromatina é condensada e silenciada (fechada).",
		distractors: [
			"A eucromatina é condensada e transcricionalmente inativa (fechada), enquanto a heterocromatina é descondensada e ativa (aberta).",
			"A eucromatina é descondensada e transcricionalmente inativa (fechada), enquanto a heterocromatina é condensada e ativa (aberta).",
			"A eucromatina é condensada e transcricionalmente ativa (aberta), enquanto a heterocromatina é descondensada e silenciada (fechada)."
		]
	},
	{
		id: "paradoxo",
		topic: "Genoma e mutação",
		prompt: "O que caracteriza o \"paradoxo não-codificante\" do genoma humano?",
		answer: "O fato de que apenas cerca de 1,5% do genoma é codificante de proteínas, enquanto a maior parte é composta por íntrons, elementos regulatórios e DNA repetitivo.",
		distractors: [
			"O fato de que apenas cerca de 98,5% do genoma é codificante de proteínas, enquanto a menor parte é composta por íntrons, elementos regulatórios e DNA repetitivo.",
			"O fato de que apenas cerca de 1,5% do genoma é composto por íntrons, enquanto a maior parte é codificante de proteínas, tRNA e DNA mitocondrial.",
			"O fato de que apenas cerca de 50% do genoma é codificante de proteínas, enquanto a menor parte é composta por éxons, elementos regulatórios e DNA repetitivo."
		]
	},
	{
		id: "acetilacao",
		topic: "Cromatina",
		prompt: "Como a acetilação de histonas afeta a transcrição gênica?",
		answer: "As histona acetiltransferases (HATs) tornam a cromatina mais acessível, facilitando a ativação da expressão gênica.",
		distractors: [
			"As histona desacetilases (HDACs) tornam a cromatina mais acessível, facilitando a ativação da expressão gênica.",
			"As histona acetiltransferases (HATs) tornam a cromatina mais condensada, impedindo a ativação da expressão gênica.",
			"As histona metiltransferases (HMTs) tornam a cromatina mais acessível, impedindo a ativação da expressão gênica."
		]
	},
	{
		id: "missense-nonsense",
		topic: "Genoma e mutação",
		prompt: "Qual a diferença entre uma mutação \"missense\" e uma \"nonsense\"?",
		answer: "A missense altera um aminoácido na proteína, enquanto a nonsense cria um códon de parada (STOP) prematuro, truncando a proteína.",
		distractors: [
			"A missense cria um códon de parada (STOP) prematuro, enquanto a nonsense altera um aminoácido na proteína, alongando a proteína.",
			"A missense remove um aminoácido da proteína, enquanto a nonsense cria um códon de início (START) extra, duplicando a proteína.",
			"A missense altera um nucleotídeo sem efeito, enquanto a nonsense troca um aminoácido por outro, mantendo a proteína intacta."
		]
	},
	{
		id: "retrotransposons",
		topic: "Genoma e mutação",
		prompt: "O que define o mecanismo de \"copiar e colar\" dos retrotransposons?",
		answer: "O DNA original é transcrito em um RNA intermediário, que sofre transcrição reversa para inserir uma nova cópia de DNA em outro local do genoma.",
		distractors: [
			"O DNA original é recortado da posição inicial, que sofre ligação direta para inserir a mesma cópia de DNA em outro local do genoma.",
			"O RNA original é traduzido em uma proteína intermediária, que sofre transcrição direta para inserir uma nova cópia de RNA em outro local do genoma.",
			"O DNA original é transcrito em um DNA intermediário, que sofre replicação conservativa para inserir a mesma cópia de RNA em outro local do genoma."
		]
	},
	{
		id: "enhancers",
		topic: "Regulação",
		prompt: "Qual a função dos elementos \"enhancers\" (potencializadores) no genoma?",
		answer: "São sequências regulatórias que aumentam a transcrição de genes específicos, muitas vezes atuando a grandes distâncias através de alças (loops) 3D na cromatina.",
		distractors: [
			"São sequências regulatórias que diminuem a transcrição de genes específicos, muitas vezes atuando a curtas distâncias através de cortes (nicks) 3D na cromatina.",
			"São sequências repetitivas que aumentam a replicação de genes específicos, muitas vezes atuando a grandes distâncias através de alças (loops) 3D na mitose.",
			"São sequências regulatórias que aumentam a tradução de genes específicos, muitas vezes atuando no citoplasma através de alças (loops) 3D no ribossomo."
		]
	},
	{
		id: "msi",
		topic: "Genoma e mutação",
		prompt: "O que é a instabilidade de microssatélites (MSI)?",
		answer: "É a variação no comprimento de sequências repetitivas causada por falhas no sistema de reparo de mau emparelhamento (MMR).",
		distractors: [
			"É a variação no comprimento de sequências únicas causada por falhas no sistema de reparo por excisão de bases (BER).",
			"É a variação no número de cromossomos inteiros causada por falhas no sistema de reparo de quebras de fita dupla (NHEJ).",
			"É a variação no comprimento de sequências repetitivas causada por falhas no sistema de transcrição reversa (RT)."
		]
	},
	{
		id: "oncogenes",
		topic: "Genoma e mutação",
		prompt: "Qual a diferença entre proto-oncogenes e genes supressores de tumor?",
		answer: "Proto-oncogenes promovem o crescimento celular e tornam-se oncogenes por ganho de função; genes supressores de tumor controlam o ciclo celular e causam câncer por perda de função.",
		distractors: [
			"Proto-oncogenes reprimem o crescimento celular e tornam-se oncogenes por perda de função; genes supressores de tumor aceleram o ciclo celular e causam câncer por ganho de função.",
			"Proto-oncogenes promovem o crescimento celular e tornam-se oncogenes por perda de função; genes supressores de tumor controlam o ciclo celular e causam câncer por ganho de função.",
			"Proto-oncogenes silenciam o crescimento celular e tornam-se oncogenes por ganho de função; genes supressores de tumor aceleram o ciclo celular e causam câncer por perda de função."
		]
	},
	{
		id: "fase-s",
		topic: "Replicação",
		prompt: "Em qual fase do ciclo celular ocorre a replicação do DNA?",
		answer: "A replicação ocorre exclusivamente durante a fase S da intérfase.",
		distractors: [
			"A replicação ocorre exclusivamente durante a fase M da mitose.",
			"A replicação ocorre exclusivamente durante a fase G1 da intérfase.",
			"A replicação ocorre exclusivamente durante a fase G2 da intérfase."
		]
	},
	{
		id: "semiconservativa",
		topic: "Replicação",
		prompt: "Por que a replicação do DNA é considerada semiconservativa?",
		answer: "Porque cada molécula de DNA-filha conserva uma fita da molécula parental e sintetiza uma nova fita complementar.",
		distractors: [
			"Porque cada molécula de DNA-filha conserva as duas fitas da molécula parental e não sintetiza nenhuma fita complementar.",
			"Porque cada molécula de DNA-filha descarta as duas fitas da molécula parental e sintetiza duas novas fitas idênticas.",
			"Porque cada molécula de DNA-filha conserva um fragmento da molécula parental e sintetiza três novas fitas complementares."
		]
	},
	{
		id: "helicase",
		topic: "Replicação",
		prompt: "Qual a função da enzima Helicase no processo?",
		answer: "A Helicase catalisa o desenrolamento da dupla-hélice parental, abrindo as fitas para a replicação.",
		distractors: [
			"A Helicase catalisa o enrolamento da dupla-hélice parental, fechando as fitas após a replicação.",
			"A Helicase catalisa a ligação dos fragmentos de Okazaki, unindo as fitas após a replicação.",
			"A Helicase catalisa a síntese da fita complementar, copiando as fitas durante a replicação."
		]
	},
	{
		id: "ssb",
		topic: "Replicação",
		prompt: "Qual o papel das proteínas SSB (Single-Strand Binding)?",
		answer: "Elas mantêm os filamentos de DNA desenrolados e estabilizados na forma estendida, impedindo o reanelamento das fitas.",
		distractors: [
			"Elas mantêm os filamentos de DNA enrolados e compactados na forma helicoidal, promovendo o reanelamento das fitas.",
			"Elas cortam os filamentos de DNA desenrolados e fragmentados na forma circular, impedindo o avanço das fitas.",
			"Elas unem os filamentos de DNA desenrolados e polimerizados na forma duplex, promovendo o reanelamento das fitas."
		]
	},
	{
		id: "topoisomerase",
		topic: "Replicação",
		prompt: "Como a Topoisomerase auxilia no avanço da forquilha de replicação?",
		answer: "Ela remove a tensão gerada pelo superenrolamento positivo à frente da forquilha, realizando cortes transitórios e religando as fitas.",
		distractors: [
			"Ela aumenta a tensão gerada pelo superenrolamento negativo atrás da forquilha, realizando cortes permanentes e separando as fitas.",
			"Ela remove a tensão gerada pelo superenrolamento positivo atrás da forquilha, realizando ligações estáveis e abrindo as fitas.",
			"Ela aumenta a tensão gerada pelo superenrolamento positivo à frente da forquilha, evitando cortes transitórios e travando as fitas."
		]
	},
	{
		id: "etapas-transcricao",
		topic: "Transcrição",
		prompt: "Quais são as três etapas fundamentais da transcrição?",
		answer: "Iniciação (reconhecimento do promotor), elongação (síntese do RNA) e terminação.",
		distractors: [
			"Ativação (reconhecimento do operador), tradução (síntese do DNA) e clivagem.",
			"Iniciação (reconhecimento do ribossomo), elongação (síntese do DNA) e splicing.",
			"Promoção (reconhecimento do enhancer), replicação (síntese do RNA) e edição."
		]
	},
	{
		id: "diferenciacao",
		topic: "Regulação",
		prompt: "O que explica a diferenciação celular a partir de um mesmo genoma?",
		answer: "A expressão gênica diferencial, onde diferentes tipos celulares ativam conjuntos distintos de genes para produzir proteínas específicas.",
		distractors: [
			"A perda gênica diferencial, onde diferentes tipos celulares eliminam conjuntos distintos de genes para produzir proteínas específicas.",
			"A replicação gênica diferencial, onde diferentes tipos celulares duplicam conjuntos distintos de cromossomos para produzir RNA específico.",
			"A mutação gênica diferencial, onde diferentes tipos celulares alteram conjuntos distintos de bases para produzir lipídios específicos."
		]
	},
	{
		id: "rnar-rnat",
		topic: "Tradução",
		prompt: "Quais são as funções dos RNAs não codificadores RNAr e RNAt?",
		answer: "O RNAr é um componente estrutural e catalítico dos ribossomos, enquanto o RNAt transporta aminoácidos e decodifica o RNAm durante a síntese proteica.",
		distractors: [
			"O RNAr transporta aminoácidos e decodifica o RNAm, enquanto o RNAt é um componente estrutural e catalítico dos ribossomos durante a síntese proteica.",
			"O RNAr é um componente estrutural e catalítico dos lisossomos, enquanto o RNAt transporta nucleotídeos e decodifica o DNAm durante a síntese proteica.",
			"O RNAr é um molde para a síntese de proteínas, enquanto o RNAt é um componente estrutural e catalítico dos spliceossomos durante o splicing."
		]
	},
	{
		id: "pol-ii",
		topic: "Transcrição",
		prompt: "Qual a função específica da RNA Polimerase II em células eucarióticas?",
		answer: "Ela é responsável pela transcrição de todos os genes codificadores de proteínas (pré-mRNA), além de alguns snRNA e miRNA.",
		distractors: [
			"Ela é responsável pela transcrição de todos os genes de RNA ribossômico (pré-rRNA), além de alguns tRNA e snoRNA.",
			"Ela é responsável pela transcrição de todos os genes de RNA transportador (pré-tRNA), além de alguns rRNA e siRNA.",
			"Ela é responsável pela replicação de todos os genes codificadores de proteínas (pré-mRNA), além de alguns snRNA e miRNA."
		]
	},
	{
		id: "pre-mrna",
		topic: "Transcrição",
		prompt: "Quais são as três principais modificações do processamento do pré-mRNA?",
		answer: "Adição do Cap 5' (7-metilguanosina), splicing (remoção de íntrons) e poliadenilação (cauda Poli-A 3').",
		distractors: [
			"Adição do Cap 3' (7-metilcitosina), splicing (remoção de éxons) e polimetilação (cauda Poli-G 5').",
			"Adição do Cap 5' (5-metiluracila), editing (remoção de éxons) e poliadenilação (cauda Poli-U 3').",
			"Adição do Cap 2' (7-metiladenina), splicing (remoção de íntrons) e poliglicosilação (cauda Poli-C 5')."
		]
	},
	{
		id: "molde-traducao",
		topic: "Tradução",
		prompt: "Qual molécula serve de molde para a síntese de proteínas na tradução gênica?",
		answer: "O RNA mensageiro (mRNA).",
		distractors: [
			"O RNA ribossômico (rRNA).",
			"O RNA transportador (tRNA).",
			"O DNA complementar (cDNA)."
		]
	},
	{
		id: "ribossomo",
		topic: "Tradução",
		prompt: "Qual organela celular catalisa a formação das ligações peptídicas entre os aminoácidos?",
		answer: "O ribossomo.",
		distractors: [
			"O lisossomo.",
			"O nucléolo.",
			"O peroxissomo."
		]
	},
	{
		id: "degenerado",
		topic: "Tradução",
		prompt: "O que significa dizer que o código genético é degenerado?",
		answer: "Significa que a maioria dos aminoácidos pode ser codificada por mais de um códon.",
		distractors: [
			"Significa que a maioria dos aminoácidos pode ser codificada por apenas um códon.",
			"Significa que a maioria dos códons pode ser traduzida em mais de uma proteína.",
			"Significa que a maioria dos aminoácidos não pode ser codificada por nenhum códon."
		]
	},
	{
		id: "stop-codons",
		topic: "Tradução",
		prompt: "Quais são os três códons de término (stop codons) da tradução?",
		answer: "Os códons UAA, UAG e UGA.",
		distractors: [
			"Os códons UUU, UUC e UUA.",
			"Os códons AUG, AUC e AUA.",
			"Os códons GGA, GGC e GGG."
		]
	},
	{
		id: "start-codon",
		topic: "Tradução",
		prompt: "Qual é o códon de início (start codon) e qual aminoácido ele codifica em eucariotos?",
		answer: "O códon é o AUG, que codifica o aminoácido metionina.",
		distractors: [
			"O códon é o UGA, que codifica o aminoácido triptofano.",
			"O códon é o UAG, que codifica o aminoácido metionina.",
			"O códon é o AUG, que codifica o aminoácido alanina."
		]
	},
	{
		id: "reg-pos-neg",
		topic: "Regulação",
		prompt: "Qual é a diferença fundamental entre regulação positiva e regulação negativa da transcrição?",
		answer: "Na regulação positiva, um ativador é necessário para iniciar a transcrição. Na regulação negativa, um repressor impede a transcrição ligando-se ao operador.",
		distractors: [
			"Na regulação positiva, um repressor é necessário para iniciar a transcrição. Na regulação negativa, um ativador impede a transcrição ligando-se ao operador.",
			"Na regulação positiva, um ativador é necessário para impedir a transcrição. Na regulação negativa, um repressor inicia a transcrição ligando-se ao promotor.",
			"Na regulação positiva, um operador é necessário para iniciar a tradução. Na regulação negativa, um enhancer impede a transcrição ligando-se ao repressor."
		]
	},
	{
		id: "cis",
		topic: "Regulação",
		prompt: "O que caracteriza um elemento regulador em cis?",
		answer: "É uma sequência específica de DNA que regula apenas os genes localizados na mesma molécula física de DNA, como promotores e operadores.",
		distractors: [
			"É uma proteína difusível de DNA que regula qualquer gene localizado em outra molécula física de DNA, como repressores e ativadores.",
			"É uma sequência específica de RNA que regula apenas os genes localizados em outra molécula física de DNA, como íntrons e éxons.",
			"É uma sequência específica de DNA que regula todos os genes localizados em qualquer molécula física de DNA, como ribossomos e histonas."
		]
	},
	{
		id: "trans",
		topic: "Regulação",
		prompt: "O que caracteriza um elemento regulador em trans?",
		answer: "É uma molécula difusível (geralmente uma proteína reguladora, como repressores ou ativadores) que pode atuar em qualquer molécula de DNA na célula.",
		distractors: [
			"É uma sequência fixa de DNA (geralmente um promotor ou operador, como TATA ou CAP) que só atua na mesma molécula de DNA na célula.",
			"É uma molécula difusível (geralmente um RNA ribossômico, como RNAr ou RNAt) que só atua na mesma molécula de DNA na célula.",
			"É uma sequência fixa de RNA (geralmente um íntron ou éxon, como splice sites) que pode atuar em qualquer molécula de DNA na célula."
		]
	},
	{
		id: "lac-repressor",
		topic: "Regulação",
		prompt: "Qual é o efeito da presença de lactose sobre o repressor do óperon lac?",
		answer: "A lactose atua como indutor, ligando-se ao repressor e alterando sua conformação, o que faz com que ele se desprenda do operador e libere a transcrição.",
		distractors: [
			"A lactose atua como correpressor, ligando-se ao repressor e estabilizando sua conformação, o que faz com que ele se prenda ao operador e bloqueie a transcrição.",
			"A lactose atua como indutor, ligando-se ao operador e alterando sua sequência, o que faz com que o repressor se prenda ao promotor e bloqueie a transcrição.",
			"A lactose atua como ativador, ligando-se à RNA polimerase e alterando sua especificidade, o que faz com que ela se desprenda do promotor e pare a transcrição."
		]
	}
];
function shuffle(items) {
	const next = [...items];
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const current = next[i];
		const swap = next[j];
		if (current === void 0 || swap === void 0) continue;
		next[i] = swap;
		next[j] = current;
	}
	return next;
}
function equalizeLength(options) {
	const lengths = options.map((option) => [...option].length);
	const max = Math.max(0, ...lengths);
	return options.map((option) => option + "\xA0".repeat(max - [...option].length));
}
function buildQuiz(questions, count) {
	const pool = shuffle(questions);
	return (typeof count === "number" ? pool.slice(0, count) : pool).map((question) => {
		const combined = equalizeLength([question.answer, ...question.distractors]).map((label, index) => ({
			label,
			correct: index === 0
		}));
		return {
			id: question.id,
			topic: question.topic,
			prompt: question.prompt,
			options: shuffle(combined)
		};
	});
}
function scoreLabel(correct, total) {
	if (total === 0) return "Sem questões";
	const ratio = correct / total;
	if (ratio === 1) return "Gabaritou";
	if (ratio >= .85) return "Excelente";
	if (ratio >= .7) return "Muito bom";
	if (ratio >= .5) return "Em progresso";
	return "Revisar a base";
}
var BEST_KEY = "locus-best-score";
function readBestScore() {
	if (typeof window === "undefined") return 0;
	const raw = window.localStorage.getItem(BEST_KEY);
	const parsed = raw ? Number.parseInt(raw, 10) : 0;
	return Number.isFinite(parsed) ? parsed : 0;
}
function writeBestScore(score, total) {
	const percent = total === 0 ? 0 : Math.round(score / total * 100);
	const previous = readBestScore();
	const next = Math.max(previous, percent);
	window.localStorage.setItem(BEST_KEY, String(next));
	return next;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var LETTERS = [
	"A",
	"B",
	"C",
	"D"
];
function QuizApp() {
	const [screen, setScreen] = (0, import_react.useState)("home");
	const [mode, setMode] = (0, import_react.useState)(43);
	const [items, setItems] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [answers, setAnswers] = (0, import_react.useState)([]);
	const [best, setBest] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setBest(readBestScore());
	}, []);
	const current = items[index];
	const correctCount = answers.reduce((sum, choice, i) => {
		const item = items[i];
		if (choice === null || !item) return sum;
		return sum + (item.options[choice]?.correct ? 1 : 0);
	}, 0);
	(0, import_react.useEffect)(() => {
		if (screen !== "results" || items.length === 0) return;
		setBest(writeBestScore(correctCount, items.length));
	}, [
		screen,
		items.length,
		correctCount
	]);
	function start(nextMode) {
		const quiz = buildQuiz(QUESTIONS, nextMode);
		setMode(nextMode);
		setItems(quiz);
		setIndex(0);
		setPicked(null);
		setAnswers(Array.from({ length: quiz.length }, () => null));
		setScreen("play");
	}
	function choose(optionIndex) {
		if (picked !== null || !current) return;
		setPicked(optionIndex);
		setAnswers((prev) => {
			const next = [...prev];
			next[index] = optionIndex;
			return next;
		});
	}
	function next() {
		if (index + 1 >= items.length) {
			setScreen("results");
			return;
		}
		setIndex((i) => i + 1);
		setPicked(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-dvh overflow-x-hidden bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperGrain, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 py-6 sm:px-8 sm:py-10",
			children: [
				screen === "home" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {
					best,
					mode,
					onMode: setMode,
					onStart: () => start(mode)
				}) : null,
				screen === "play" && current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayScreen, {
					item: current,
					index,
					total: items.length,
					picked,
					onChoose: choose,
					onNext: next,
					onExit: () => setScreen("home")
				}) : null,
				screen === "results" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultsScreen, {
					items,
					answers,
					correctCount,
					best,
					onRetry: () => start(mode),
					onHome: () => setScreen("home")
				}) : null
			]
		})]
	});
}
function HomeScreen({ best, mode, onMode, onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col justify-center gap-10 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase",
						children: "Biologia molecular"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-[2.6rem] leading-[1.05] font-semibold tracking-[-0.03em] text-fg sm:text-5xl",
						children: "Lócus"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-base leading-relaxed text-fg-muted",
						children: "As mesmas perguntas e respostas do material. As quatro alternativas de cada questão têm o mesmo tamanho — nada se entrega pelo comprimento."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Questões",
						value: String(QUESTIONS.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Temas",
						value: "9"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Melhor",
						value: best ? `${best}%` : "—"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-fg-subtle uppercase",
					children: "Quantas questões"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						10,
						20,
						43
					].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onMode(value),
						className: cn("h-12 rounded-md border text-sm font-medium transition-colors duration-150", mode === value ? "border-accent bg-accent text-accent-fg" : "border-border bg-bg-elevated text-fg hover:border-border-strong"),
						children: value === 43 ? "Todas" : value
					}, value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onStart,
				className: "flex h-14 items-center justify-center gap-2 rounded-lg bg-accent text-base font-semibold text-accent-fg transition-transform duration-150 hover:brightness-110 active:scale-[0.98]",
				children: ["Começar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "size-4",
					strokeWidth: 2.2
				})]
			})
		]
	});
}
function PlayScreen({ item, index, total, picked, onChoose, onNext, onExit }) {
	const revealed = picked !== null;
	const selected = revealed ? item.options[picked] : null;
	const isCorrect = Boolean(selected?.correct);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			const map = {
				Digit1: 0,
				Digit2: 1,
				Digit3: 2,
				Digit4: 3,
				KeyA: 0,
				KeyB: 1,
				KeyC: 2,
				KeyD: 3
			};
			if (event.code in map && picked === null) onChoose(map[event.code] ?? 0);
			if ((event.key === "Enter" || event.key === " ") && picked !== null) {
				event.preventDefault();
				onNext();
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		picked,
		onChoose,
		onNext
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onExit,
					className: "inline-flex h-11 items-center gap-2 rounded-md px-1 text-sm text-fg-muted transition-colors duration-150 hover:text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Sair"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-xs tracking-wide text-fg-subtle tabular-nums",
					children: [
						String(index + 1).padStart(2, "0"),
						" / ",
						String(total).padStart(2, "0")
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1 overflow-hidden rounded-full bg-bg-subtle",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-accent transition-[width] duration-200 ease-[var(--ease-out)]",
					style: { width: `${(index + (revealed ? 1 : 0)) / total * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.18em] text-accent uppercase",
					children: item.topic
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl leading-snug font-medium tracking-tight text-fg sm:text-3xl",
					children: item.prompt
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EqualOptions, {
				options: item.options,
				picked,
				onChoose
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-col gap-3 pt-2",
				children: [revealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("text-sm font-medium", isCorrect ? "text-correct" : "text-wrong"),
					children: isCorrect ? "Correto. A resposta do material foi mantida." : "Incorreto. A alternativa certa está marcada."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-fg-subtle",
					children: "Toque em uma alternativa. A, B, C e D têm o mesmo tamanho."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: !revealed,
					onClick: onNext,
					className: "flex h-14 items-center justify-center gap-2 rounded-lg bg-accent text-base font-semibold text-accent-fg transition-opacity duration-150 disabled:opacity-35",
					children: [index + 1 === total ? "Ver resultado" : "Próxima", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4",
						strokeWidth: 2.2
					})]
				})]
			})
		]
	});
}
function EqualOptions({ options, picked, onChoose }) {
	const ref = (0, import_react.useRef)(null);
	const revealed = picked !== null;
	const equalize = () => {
		const root = ref.current;
		if (!root) return;
		const buttons = Array.from(root.querySelectorAll("[data-option]"));
		buttons.forEach((button) => {
			button.style.minHeight = "";
		});
		const max = Math.max(...buttons.map((button) => button.getBoundingClientRect().height), 96);
		buttons.forEach((button) => {
			button.style.minHeight = `${Math.ceil(max)}px`;
		});
	};
	(0, import_react.useLayoutEffect)(() => {
		equalize();
		const root = ref.current;
		if (!root) return;
		const observer = new ResizeObserver(() => equalize());
		observer.observe(root);
		window.addEventListener("resize", equalize);
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", equalize);
		};
	}, [options, picked]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2",
		children: options.map((option, optionIndex) => {
			const isPicked = picked === optionIndex;
			const showCorrect = revealed && option.correct;
			const showWrong = revealed && isPicked && !option.correct;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"data-option": "",
				disabled: revealed,
				onClick: () => onChoose(optionIndex),
				className: cn("flex h-full items-stretch gap-3 rounded-lg border px-3.5 py-3.5 text-left transition-[border-color,background-color,transform] duration-150 ease-[var(--ease-out)]", "disabled:cursor-default", !revealed && "bg-bg-elevated border-border hover:border-border-strong active:scale-[0.995]", showCorrect && "border-correct bg-correct-bg", showWrong && "border-wrong bg-wrong-bg", revealed && !showCorrect && !showWrong && "border-border bg-bg-elevated opacity-70"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-sm font-mono text-xs font-medium", showCorrect && "bg-correct text-accent-fg", showWrong && "bg-wrong text-accent-fg", !showCorrect && !showWrong && "bg-bg-subtle text-fg"),
					children: LETTERS[optionIndex]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flex-1 text-[0.95rem] leading-snug text-fg whitespace-pre-wrap",
					children: option.label
				})]
			}, `${optionIndex}-${option.label.slice(0, 12)}`);
		})
	});
}
function ResultsScreen({ items, answers, correctCount, best, onRetry, onHome }) {
	const missed = (0, import_react.useMemo)(() => items.map((item, i) => ({
		item,
		choice: answers[i],
		i
	})).filter(({ item, choice }) => {
		if (choice === null) return true;
		return !item.options[choice]?.correct;
	}), [items, answers]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-1 flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-3 pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-[0.22em] text-accent uppercase",
						children: "Resultado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl leading-none font-semibold tracking-[-0.03em]",
						children: [correctCount, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-fg-subtle",
							children: ["/", items.length]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base text-fg-muted",
						children: [
							scoreLabel(correctCount, items.length),
							". Melhor marca: ",
							best,
							"%."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onRetry,
					className: "flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-accent font-semibold text-accent-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Jogar de novo"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onHome,
					className: "flex h-12 flex-1 items-center justify-center rounded-lg border border-border bg-bg-elevated font-medium text-fg",
					children: "Início"
				})]
			}),
			missed.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "text-sm font-medium tracking-wide text-fg-subtle uppercase",
					children: [
						"Revisar erros (",
						missed.length,
						")"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-3",
					children: missed.map(({ item, choice, i }) => {
						const correct = item.options.find((option) => option.correct)?.label.trim() ?? "";
						const yours = choice === null ? "Sem resposta" : item.options[choice]?.label.trim() ?? "";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-border bg-bg-elevated px-4 py-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[11px] text-fg-subtle tabular-nums",
									children: ["Questão ", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-lg leading-snug font-medium",
									children: item.prompt
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 flex items-start gap-2 text-sm text-wrong",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: yours })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 flex items-start gap-2 text-sm text-correct",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: correct })]
								})
							]
						}, item.id);
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg border border-correct bg-correct-bg px-4 py-4 text-sm text-correct",
				children: "Nenhuma questão errada. As respostas do material foram todas acertadas."
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-bg-elevated px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] tracking-wide text-fg-subtle uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-2xl leading-none font-medium tabular-nums",
			children: value
		})]
	});
}
function PaperGrain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0 opacity-[0.35]",
		style: { backgroundImage: "radial-gradient(circle at 12% 8%, color-mix(in oklab, var(--color-accent) 9%, transparent) 0 18%, transparent 42%), radial-gradient(circle at 88% 92%, color-mix(in oklab, var(--color-fg) 6%, transparent) 0 16%, transparent 40%)" }
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizApp, {});
}
//#endregion
export { Home as component };
