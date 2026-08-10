# Catálogo Master de Funcionalidades: Alunos, Professores e Gestores

> **Visão Geral:** Este documento consolida a arquitetura funcional completa do **School Intelligence OS** / **EdTech Suite**, listando todas as funcionalidades mapeadas para Alunos, Professores e Gestão.

---

## 🎓 1. MÓDULO ALUNO — "Waze da Aprendizagem"

O módulo do aluno é projetado para atuar **antes e durante o estudo**, eliminando a indecisão ("não sei o que estudar"), diagnosticando lacunas conceituais e oferecendo tutoria privada 24/7 sem gerar dependência passiva de IA.

```
                  ┌─────────────────────────────────────────┐
                  │       PAINEL INDIVIDUAL DO ALUNO        │
                  └────────────────────┬────────────────────┘
                                       │
     ┌─────────────────────────────────┼─────────────────────────────────┐
     ▼                                 ▼                                 ▼
┌─────────────────────────┐ ┌─────────────────────────┐ ┌─────────────────────────┐
│ 1. DIAGNÓSTICO & MAPA   │ │  2. ESTUDO & TUTORIA    │ │  3. ENGAJAMENTO & META  │
├─────────────────────────┤ ├─────────────────────────┤ ├─────────────────────────┤
│• Foto da Questão (IA)   │ │• Tutor IA Socrático 24h │ │• Quiz com Ranking Turma │
│• Scanner de Apostila    │ │• Plano Diário Guiado    │ │• Comunidade da Turma    │
│• Mapa Cognitivo Raiz    │ │• Resumo da Aula (IA)    │ │• Estudo Gamificado      │
└─────────────────────────┘ └─────────────────────────┘ └─────────────────────────┘
```

### Lista Completa de Funcionalidades do Aluno

| # | Funcionalidade | Categoria | Descrição e Funcionamento |
|---|---|---|---|
| **A01** | **Scan & Explicação por Foto de Questão (IA Vision)** | Visão Computacional | O aluno tira foto de qualquer questão do caderno ou apostila e a IA lê a imagem, explicando o passo a passo socrático de resolução. |
| **A02** | **Scanner de Apostila (Resumos e Atividades)** | Leitura Inteligente | Envio de fotos de páginas da apostila para a IA gerar resumos executivos, mapas conceituais e listas automáticas de exercícios. |
| **A03** | **Resumo da Aula & Quizzes com Ranking da Turma** | Gamificação | Transforma o conteúdo ministrado na aula em resumos dinâmicos e mini-quizzes com ranking de pontuação e engajamento da turma. |
| **A04** | **Comunidade e Feed da Turma** | Colaboração | Espaço seguro de interação entre colegas da mesma turma para compartilhamento de dúvidas, anotações, mapas mentais e estudos em grupo. |
| **A05** | **Mapa Cognitivo de Lacunas (Diagnóstico Raiz)** | Inteligência | Algoritmo que rastreia dependências prévias. Se o aluno erra Equação no 8º ano, a IA identifica se a causa raiz é Fração (6º ano) ou Razão (7º ano). |
| **A06** | **Tutor IA Socrático 24/7** | IA / Tutoria | Tutor virtual contextualizado com as apostilas e plano de aula da escola. Não entrega a resposta pronta; faz perguntas orientadoras para o aluno raciocinar. |
| **A07** | **Plano Diário Guiado ("O Que Estudar Hoje")** | Produtividade | Calcula automaticamente o próximo melhor passo do dia com base no tempo disponível do aluno (ex: "Você tem 35min → 3 exercícios de Física + 5 flashcards de História"). |
| **A08** | **Algoritmo Socrático Anti-Cola** | Segurança/Pedagógico | Bloqueio de respostas de cópia direta estilo ChatGPT. Obriga o aluno a passar pelas etapas de construção do raciocínio. |
| **A09** | **Simulados Adaptativos por Tópico** | Avaliação | Questões que calibram a dificuldade em tempo real. Entregam uma estimativa de domínio (% de chance de aprovação) antes da prova oficial do colégio. |
| **A10** | **Flashcards Inteligentes com Repetição Espaçada** | Memorização | Geração automática de cards de revisão baseados nos erros do aluno em provas e quizzes, agendados no intervalo ideal de retenção de memória. |
| **A11** | **Modo "Fiquei Ausente"** | Contingência | Quando o aluno falta à escola, o sistema compila o resumo das aulas ministradas no dia, os conceitos fundamentais e uma lista curta de nivelamento. |
| **A12** | **Laboratório de Redação & Leitura** | Humanas | Correção instantânea de redações no padrão ENEM e bancas regionais, analisando coesão, tese, repertório e gramática com evolução histórica. |
| **A13** | **Contextualizador de Conteúdo por Interesse** | Personalização | IA que reformula explicações de exatas e humanas conectando com os interesses do aluno (futebol, games, música, esportes, profissões). |
| **A14** | **Agenda Escolar Inteligente de Avaliações** | Organização | Painel centralizando datas de provas, trabalhos e entregas, distribuindo a carga de estudo em dias anteriores para evitar estudo de última hora. |
| **A15** | **Estudo Gamificado por Metas e Streaks** | Engajamento | Sessões estilo Pomodoro, pontuação por consistência diária, nível de evolução por disciplina e conquistas visuais. |
| **A16** | **Canal de Dúvidas Sem Julgamento Social** | Bem-estar | Ambiente privado onde o estudante pode perguntar dúvidas muito básicas sem vergonha dos colegas ou do professor. |
| **A17** | **Modo Resolução Passo a Passo (Exatas)** | Exatas | Assistente que acompanha o aluno etapa por etapa na resolução de exercícios matemáticos/físicos, dando dicas apenas na etapa em que ele travou. |
| **A18** | **Orientador Vocacional Contínuo (Ensino Médio)** | Futuro | Mapeamento contínuo das aptidões do aluno ao longo do Ensino Médio, conectando seu desempenho acadêmico com carreiras e vestibulares. |

---

## 👩‍🏫 2. MÓDULO PROFESSOR — Copiloto Pedagógico

O módulo do professor visa eliminar o trabalho administrativo repetitivo e dar visibilidade antecipada sobre a turma antes da aplicação das avaliações oficiais.

```
                  ┌─────────────────────────────────────────┐
                  │       PAINEL DO DOCENTE / COPILOTO      │
                  └────────────────────┬────────────────────┘
                                       │
     ┌─────────────────────────────────┼─────────────────────────────────┐
     ▼                                 ▼                                 ▼
┌─────────────────────────┐ ┌─────────────────────────┐ ┌─────────────────────────┐
│ 1. GERADORES DE AVALIAÇÃO│ │ 2. FOTO DA APOSTILA/AULA│ │ 3. TURMA & ENGAJAMENTO  │
├─────────────────────────┤ ├─────────────────────────┤ ├─────────────────────────┤
│• Provas Versões A/B/C   │ │• Gerador via Foto Páginas│ │• Quizzes com Ranking    │
│• Gabaritos Comentados   │ │• Resumo da Aula p/ Alunos│ │• Comunidade da Turma    │
│• Rubricas de Correção   │ │• Diagnostic Radar Turma │ │• Pareceres Descritivos  │
└─────────────────────────┘ └─────────────────────────┘ └─────────────────────────┘
```

### Lista Completa de Funcionalidades do Professor

| # | Funcionalidade | Categoria | Descrição e Funcionamento |
|---|---|---|---|
| **P01** | **Gerador de Atividades via Foto da Apostila** | Leitura Inteligente | O professor tira foto de qualquer página do livro/apostila e a IA gera na hora exercícios adaptados, resumos de aula e listas de fixação. |
| **P02** | **Gerador de Resumo da Aula & Quizzes com Ranking** | Engajamento | Transforma os tópicos ensinados no dia em um resumo atraente + quiz interativo gamificado com ranking em tempo real para a turma. |
| **P03** | **Gestão da Comunidade da Turma** | Colaboração | Canal oficial da disciplina para envio de comunicados, avisos de trabalhos, materiais de apoio e mediação de fóruns de discussão. |
| **P04** | **Gerador Instantâneo de Provas (Versões A/B/C)** | Avaliação | Cria avaliações completas em 3s, alinhadas à BNCC e à grade da escola, gerando variações anti-cola com opções e questões permutadas. |
| **P05** | **Gabarito Comentado e Rubrica de Correção** | Avaliação | Geração automática da chave de resposta detalhada e dos critérios de pontuação para questões discursivas. |
| **P06** | **Gerador de Pareceres Descritivos Individuais** | Automação | Cria textos descritivos personalizados sobre o desempenho pedagógico e comportamental de cada aluno para boletins e reuniões de pais. |
| **P07** | **Diagnostic Radar da Turma (Pré-Avaliação)** | Diagnóstico | Painel consolidado mostrando quais competências a turma dominou e quais exigem aula de reforço antes da prova oficial. |
| **P08** | **Planejador de Aulas Alinhado à BNCC** | Planejamento | Sugestões de sequência didática, metodologias ativas, dinâmicas de grupo e materiais complementares por código de habilidade da BNCC. |
| **P09** | **Adaptador de Atividades para Inclusão (PDI/PEI)** | Acessibilidade | Adapta automaticamente questões e textos para alunos com necessidades educativas especiais (TDAH, Autismo, Dislexia). |
| **P10** | **Leitor e Corretor por Foto de Prova (OCR)** | Automação | O professor tira foto do gabarito do aluno no celular e a IA lança a nota e identifica os erros por questão instantaneamente. |
| **P11** | **Banco de Questões Inteligente da Escola** | Acervo | Repositório privado da escola onde questões anteriores são etiquetadas por grau de dificuldade, assunto e taxa histórica de acertos. |
| **P12** | **Assistente de Feedback de Redação** | Humanas | Sugere comentários marginais detalhados sobre redações de alunos em minutos, poupando horas de correção manual. |
| **P13** | **Alertas de Desengajamento de Alunos** | Prevenção | Notifica o docente quando um aluno específico parar de entregar tarefas ou apresentar quedas bruscas de participação nas últimas semanas. |
| **P14** | **Gerador de Projetos Interdisciplinares** | Metodologia | Cria propostas de projetos unindo 2 ou mais disciplinas (ex: História + Geografia + Biologia) com prazos, rubricas e entregáveis. |

---

## 🏛️ 3. MÓDULO GESTOR / DIREÇÃO / COORDENAÇÃO — School Intelligence OS

O módulo executivo converte dados operacionais espalhados em ERPs e planilhas em **indicadores estratégicos de retenção, saúde acadêmica e sustentabilidade financeira**.

### Lista Completa de Funcionalidades do Gestor e Direção

| # | Funcionalidade | Categoria | Descrição e Funcionamento |
|---|---|---|---|
| **G01** | **Early Warning System (Radar de Alerta Precoce)** | Retenção / Risk | Algoritmo que classifica alunos em risco Vermelho/Laranja/Amarelo cruzando notas, faltas, tarefas não entregues e alterações comportamentais. |
| **G02** | **School Health Score (0 a 100)** | Dashboard | Indicador sintético único da saúde da escola unificando Desempenho Acadêmico, Frequência, Retenção Estimada e Satisfação das Famílias. |
| **G03** | **Cockpit Executivo em Linguagem Natural** | IA / BI | Permite ao diretor perguntar via texto ou voz: *"Por que a nota do 8º ano caiu este mês?"* e receber análises causais detalhadas em segundos. |
| **G04** | **Previsor de Retenção e Rematrículas** | Financeiro | Forecast algorítmico que projeta com meses de antecedência a taxa de renovação de matrículas para o ano letivo seguinte. |
| **G05** | **Previsão e Alertas de Inadimplência** | Financeiro | Cruza atrasos financeiros com histórico escolar para alertar a gestão financeira sobre clientes com risco elevado de inadimplência. |
| **G06** | **Análise da Voz das Famílias (NPS & Reclamações)** | Comunicação | Processamento de linguagem natural (NLP) em e-mails, pesquisas e ocorrências para detectar tendências de insatisfação dos pais antes de virarem cancelamentos. |
| **G07** | **Calculadora de ROI de Retenção ao Vivo** | Comercial/Vendas | Ferramenta interativa que demonstra em R$ o valor exato preservado no caixa da escola a cada 1% de evasão evitado. |
| **G08** | **Integrador Plug & Play sobre ERPs (Sponte/TOTVS)** | Integração | Conexão via API REST, Webhooks ou importação simplificada de planilhas para puxar dados do ERP sem necessidade de migração. |
| **G09** | **Benchmarking e Inteligência ENEM/Avaliações** | Acadêmico | Análise comparativa por matriz de habilidades do ENEM e vestibulares, mapeando lacunas de conteúdo por série e turma. |
| **G10** | **Relatório Automático de Evolução para Pais** | Relacionamento | Envio automatizado de relatórios quinzenais amigáveis aos responsáveis, destacando a evolução positiva do filho e orientando como ajudar. |
| **G11** | **Gestão de Substituição Inteligente de Professores** | Operacional | Em caso de ausência de docente, o sistema sugere substitutos disponíveis e gera o plano de aula emergencial para a aula vaga. |
| **G12** | **Otimizador Algorítmico de Horários e Turmas** | Operacional | Montagem automática da grade horária semanal de aulas resolvendo choques de professores, turmas e restrições de salas. |
| **G13** | **Análise Comparativa entre Turmas e Professores** | Analytics | Identifica discrepâncias de médias e métodos entre turmas do mesmo ano para padronização da qualidade pedagógica. |
| **G14** | **Painel de Conformidade LGPD e Auditoria** | Segurança | Controle rígido de acesso a dados de menores, logs de auditoria e termos de consentimento digital dos responsáveis. |
