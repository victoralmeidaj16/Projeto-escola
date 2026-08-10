# Arquitetura de Integração: Camada de Inteligência Integrada sobre ERPs Escolares

> **Estratégia Central:** "Não substitua o ERP da escola — potencialize os dados dele."

---

## 1. Por que não substituir o ERP?
Trocar de ERP (como Sponte, TOTVS Educacional, Sophia ou Lyceum) é um processo altamente doloroso para escolas privadas. Envolve migração de dados financeiros, histórico escolar de anos, treinamento de secretária e alto risco regulatório.

A nossa plataforma posiciona-se como uma **Camada Complementar de Inteligência (Add-On / Intelligence Layer)** que consome os dados do ERP e devolve automação, diagnósticos e retenção.

---

## 2. Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                    ERP ESCOLAR EXISTENTE                    │
│        (Sponte / TOTVS Educacional / Sophia / etc)          │
└──────────────────────────────┬──────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               │  Fluxo de Dados (APIs/CSV/Sync)│
               ▼                               ▼
┌──────────────────────────────┐ ┌──────────────────────────────┐
│  Notas, Frequência e Alunos  │ │ Ocorrências e Relacionamento │
└──────────────┬───────────────┘ └──────────────┬───────────────┘
               │                                │
               └────────────────┬───────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────┐
│            ENGINE DE INTELIGÊNCIA ARTIFICIAL                │
│   • Mapa Cognitivo de Lacunas   • Early Warning Risk Score  │
│   • Predictor de Evasão         • Copiloto do Professor     │
└──────────────────────────────┬──────────────────────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         ▼                     ▼                     ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│  Painel Aluno   │   │Painel Professor │   │ Painel Direção  │
└─────────────────┘   └─────────────────┘   └─────────────────┘
```

---

## 3. Métodos de Integração Suportados

### Método A: Integração Nativa via API REST / Webhooks (Recomendado)
- **Sponte API:** Conexão direta para sincronização automática diária de alunos, turmas, disciplinas, notas de avaliações e faltas.
- **TOTVS Web Services:** Consumo automatizado via APIs SOAP/REST.
- **Webhooks de Eventos:** Atualizações em tempo real quando uma nota ou falta é lançada no ERP base.

### Método B: Importação Automatizada de Planilhas / Arquivos (Plug & Play)
- Para escolas que não possuem API aberta ou preferem não configurar integração direta no primeiro mês.
- A escola faz o upload semanal ou mensal de arquivos exportados do ERP (formatos `.csv` ou `.xlsx`).
- O leitor inteligente de schemas mapeia colunas automaticamente (Nome, Matrícula, Turma, Nota, Frequência).

---

## 4. Mapeamento e Segurança dos Dados (LGPD)

- **Minimização de Dados:** Apenas os dados estritamente necessários para o diagnóstico pedagógico e análise de retenção são processados.
- **Criptografia:** Transmissão de dados via SSL/TLS (HTTPS) e criptografia em repouso (AES-256).
- **Conformidade LGPD:** Termos de consentimento para responsáveis e política estrita de privacidade em dados de menores de idade.
- **Isolamento Multi-tenant:** Cada escola possui seus dados isolados com chaves de criptografia e banco de dados logicamente particionado.
