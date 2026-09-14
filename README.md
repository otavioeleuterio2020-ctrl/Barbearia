# House Barbearia — site oficial

Site institucional de página única da **House Barbearia**, em Franca - SP.
HTML, CSS e JavaScript puros, sem build e sem dependências.

**Endereço:** Av. Maj. Nicácio, 3150 — Vila Scarabucci, Franca - SP, 14403-460
**WhatsApp:** (16) 99385-0531
**Agendamento:** https://sites.appbarber.com.br/links/housebarbearia-gqci

---

## Estrutura

```
index.html              página completa
robots.txt              liberação para buscadores
sitemap.xml             mapa do site
assets/css/style.css    estilos
assets/js/main.js       menu, revelação ao rolar, vídeos
assets/img/             fotos otimizadas (.jpg + .webp)
assets/video/           vídeos comprimidos do hero e da galeria
```

## Como abrir

Abra o `index.html` no navegador. Não há etapa de build.

Para publicar no GitHub Pages: **Settings → Pages → Source: branch `main`, pasta `/ (root)`**.

---

## O que precisa ser preenchido antes de publicar

Três pontos ficaram propositalmente em aberto porque dependem de informação real
da barbearia. Nada foi inventado.

| O quê | Onde | Ação |
|---|---|---|
| Link do Instagram | `index.html`, seção Contato — procure o comentário `<!-- INSTAGRAM: ... -->` | trocar `https://www.instagram.com/` pelo perfil oficial |
| Domínio do site | `index.html` (`<link rel="canonical">`), `robots.txt`, `sitemap.xml` | trocar `housebarbearia.com.br` pelo domínio real |
| Depoimentos | `index.html`, seção Avaliações — bloco comentado `DEPOIMENTOS REAIS` | descomentar e colar avaliações verdadeiras de clientes |

Não foram incluídos **preços**, **horário de funcionamento** nem **depoimentos**,
porque essas informações não foram fornecidas. Os botões de serviço levam ao
agendamento online, onde os valores e horários reais aparecem.

---

## Decisões de design

A paleta não é um dourado genérico: os tons de latão (`#B9822F` / `#E0B063`)
foram amostrados diretamente da madeira de pinho das paredes nas fotos da
própria barbearia, sobre fundo preto real.

Tipografia: **Big Shoulders Display** (condensada, linhagem de letreiro de
barbearia) para títulos e **Barlow** para texto corrido.

Os serviços são apresentados como um quadro de barbearia — linhas com filete —
em vez de cartões iguais, e a galeria é um mosaico assimétrico encaixado.

## Desempenho e acessibilidade

- Imagens em WebP com fallback JPEG, `loading="lazy"` e dimensões declaradas.
- Vídeos comprimidos, `preload="none"`, só carregam e tocam quando visíveis,
  e são ignorados quando o navegador sinaliza economia de dados.
- Animações de rolagem desligadas em `prefers-reduced-motion`.
- Foco visível no teclado, link "pular para o conteúdo", textos alternativos
  descritivos e HTML semântico.

## SEO local

Título, meta description e dados estruturados **Schema.org `HairSalon`** com
endereço completo, telefone, ano de fundação, avaliação (4,9 / mais de 100) e
ação de reserva apontando para o AppBarber. Termos trabalhados: barbearia em
Franca SP, corte masculino em Franca, barba em Franca.

> A nota 4,9 e o volume de mais de 100 avaliações vieram do briefing. Confira se
> continuam batendo com o perfil do Google antes de publicar — dado estruturado
> divergente do real pode ser penalizado.
