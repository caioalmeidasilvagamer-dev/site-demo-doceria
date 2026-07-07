# Prompt — Design System "Doceria/Confeitaria Premium"

> Cole este prompt inteiro na IA (Claude Code, Cursor, etc.) dentro do teu projeto Next.js existente, ajustando `{{CLIENTE}}`, `{{COR_PRODUTO}}` e `{{NICHO_ESPECÍFICO}}` conforme o cliente atual.

---

## CONTEXTO

Estou construindo uma landing page para uma doceria/confeitaria (`{{CLIENTE}}`) dentro do meu template config-driven em Next.js + TypeScript (arquitetura de branch-per-client, hospedado na Vercel). Aplique o design system abaixo, adaptando ao branding específico do cliente, mas mantendo a estrutura, hierarquia e lógica de conversão intactas.

## 1. IDENTIDADE VISUAL

**Paleta de cores** — a cor não é decorativa, ela *é* o produto:
- Cor primária = cor literal do produto vendido (rosa pastel para confeitaria delicada/cupcakes, marrom/caramelo para chocolate, dourado/mostarda como accent quente universal)
- Fundo neutro claro (off-white, bege) — nunca branco puro, para manter sensação artesanal/quente
- 1 accent de alto contraste reservado exclusivamente para CTAs (nunca usar essa cor em mais nada)
- Regra: {{COR_PRODUTO}} + neutro claro + 1 accent de ação

**Tipografia**
- Par obrigatório: serif/script (headline principal, nome da marca) + sans-serif bold/condensada (títulos de seção, CTAs, corpo)
- Serif = emoção/tradição/artesanal; sans = clareza/ação comercial
- Headlines principais sempre grandes, com bastante respiro (line-height generoso)

**Formas**
- Botões sempre pill-shaped (border-radius alto/total)
- Blobs/círculos orgânicos atrás de imagens de produto para quebrar o grid quadrado e reforçar "feito à mão"
- Ícones de linha fina, nunca preenchidos pesados, para seção de benefícios

**Fotografia**
- Herói visual é sempre foto real do produto em alta resolução, close-up, profundidade de campo rasa, boa luz
- Nunca ilustração como protagonista — só como elemento de apoio (mascote, ícone)

## 2. STORYTELLING (estrutura em 4 atos)

1. **Hero emocional**: a promessa é sensorial/emocional, não funcional. Headline curta (2-4 palavras), rima ou aliteração. Nunca abrir vendendo característica técnica do produto.
2. **Prova social imediata**: números grandes logo abaixo do hero (clientes atendidos, anos de experiência, revendedores, avaliações). Confiança antes do catálogo.
3. **Origem/humanização**: seção "sobre" com foto real de pessoa (padeiro, confeiteiro, loja) + história de fundação (ano, cidade, motivação). Reforça artesanal vs. industrial.
4. **Vitrine de produtos**: grid de 3-4 categorias/produtos, cada uma com CTA próprio.

## 3. COPY

- Headlines: curtas, 2-4 palavras, com rima/aliteração/ritmo
- Subheadlines: sempre casar adjetivo emocional + funcional (ex: "artesanal e delicado" + "qualidade e sabor")
- CTAs: imperativo curto com benefício implícito — nunca "saiba mais" genérico. Preferir "Peça agora", "Garanta o seu", "Fale no WhatsApp", "Reserve seu horário"
- Microcopy de comunidade/pertencimento quando fizer sentido (ex: "Junte-se aos nossos clientes", "Faça parte da família {{CLIENTE}}")
- Tom: caloroso, sensorial, nunca corporativo

## 4. UX — ORDEM DE SEÇÕES (fixa)

1. Header fixo: logo centralizado ou à esquerda + nav simples (4-5 itens) + 1 CTA destacado à direita
2. Hero full-width: imagem de produto real + headline sobreposta + CTA primário
3. Faixa de 3 benefícios rápidos (ícones de linha fina + texto curto)
4. Seção "sobre"/origem: foto + texto lado a lado
5. Grid de produtos/categorias (3-4 colunas, cards com imagem + título + descrição curta + CTA próprio)
6. Prova social / depoimentos (se houver)
7. CTA final com fundo escuro (contraste com o resto da página) + captura de e-mail ou WhatsApp

## 5. UI — COMPONENTES

- **Cards de produto**: imagem quadrada ou circular no topo, título, descrição de 1 linha, botão pill
- **Botões**: pill-shaped, cor de accent sólida, texto curto (capitalizado, não all-caps agressivo)
- **Ícones**: linha fina, minimalistas, para seção de benefícios
- **Blobs/formas orgânicas**: atrás de imagens hero e de produtos em destaque
- **Newsletter/captura final**: fundo escuro contrastante, input + botão pill na mesma linha

## 6. IMPLEMENTAÇÃO NO MEU TEMPLATE

- Gere os tokens de cor/tipografia no meu arquivo de config existente (`config/{{CLIENTE}}.ts` ou equivalente), seguindo o padrão que já uso para outros nichos
- Mantenha a arquitetura config-driven: nenhum valor hardcoded no componente, tudo puxado do config do cliente
- Siga a ordem de seções da seção 4 acima como estrutura do `page.tsx`
- Use Next.js + TypeScript, componentes reutilizáveis (ProductCard, BenefitStrip, HeroSection, NewsletterCTA) que já existem/devem existir no meu template
- Aplique responsividade mobile-first, já que a maior parte do tráfego de doceria vem de Instagram/TikTok mobile

---

**Cliente atual**: {{CLIENTE}}
**Nicho específico**: {{NICHO_ESPECÍFICO}} (ex: bolos personalizados, chocolates artesanais, café/confeitaria)
**Cor de produto dominante**: {{COR_PRODUTO}}
