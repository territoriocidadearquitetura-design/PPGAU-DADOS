// Linha do tempo do programa: marcos com fonte, por ano, e os números de cada ano calculados dos dados do portal.
// cat: inst (institucional), doc (corpo docente), form (formação), prod (produção), rede (eventos e redes), aval (avaliação)
const HIST_CAT = {
  inst: ["Institucional", "#02205f"],
  doc: ["Corpo docente", "#2a6fdb"],
  form: ["Formação", "#2e8b57"],
  prod: ["Produção", "#7a4fc4"],
  rede: ["Eventos e redes", "#c48a00"],
  aval: ["Avaliação", "#c62828"]
};
const HIST = [
  { ano: "2018", cat: "inst", t: "Mestrado aprovado pela CAPES", d: "Aprovado na 182ª Reunião do CTC-ES da CAPES, de 12 a 14 de dezembro de 2018. Curso presencial de 24 meses, oferecido pelo UNIVAG em associação com a PUC-Campinas, com aulas às sextas-feiras à noite e aos sábados de manhã e à tarde.", f: "Site do programa, página Histórico" },
  { ano: "2019", cat: "inst", t: "Início das atividades, em associação com a PUC-Campinas", d: "Primeira turma do mestrado, com duas linhas de pesquisa: Ambiente Construído e Sustentabilidade, e Desenvolvimento Territorial e Local.", f: "Site do programa; Coleta CAPES" },
  { ano: "2021", cat: "form", t: "Primeiras defesas de dissertação", d: "Cinco dissertações defendidas no ano, no repositório digital do UNIVAG.", f: "Repositório digital UNIVAG" },
  { ano: "2021", cat: "aval", t: "Comissão de Autoavaliação vinculada à CPA", d: "A autoavaliação do programa passa a ter comissão própria, ligada à Comissão Própria de Avaliação da instituição.", f: "Site do programa" },
  { ano: "2022", cat: "doc", t: "Saída dos docentes da PUC-Campinas (2021–2022)", d: "Início da formação de um corpo docente próprio do UNIVAG. A produção de 2022 cai com a transição.", f: "Coleta CAPES 2021–2022; Ficha de avaliação 2021–2024" },
  { ano: "2023", cat: "prod", t: "Lançamento da revista Vernácula", d: "Vernácula – Territórios Contemporâneos (ISSN 2965-6125), periódico do programa, com 4 números em 2023 e 4 em 2024.", f: "Site da revista; Coleta CAPES" },
  { ano: "2023", cat: "form", t: "Bolsas para todos os ingressantes", d: "Todos os ingressantes do ano recebem bolsa.", f: "Site do programa" },
  { ano: "2023", cat: "rede", t: "1º Simpósio Brasileiro Território, Cidade e Arquitetura", d: "Primeiro evento científico organizado pelo próprio programa. No mesmo ano, o programa foi coorganizador do 1º Seminário Nacional sobre a Educação Ambiental e a Cidade + Verde, promovido pela ANAP, e houve o 9º Seminário de Habitação de Interesse Social.", f: "Anais dos eventos; site do programa" },
  { ano: "2024", cat: "inst", t: "Fim da associação e corpo docente próprio", d: "O programa passa a funcionar só com docentes do UNIVAG. Ementas revistas e novo site do programa.", f: "Site do programa; Coleta CAPES 2024" },
  { ano: "2024", cat: "doc", t: "Entrada de seis novos docentes", d: "O programa fecha 2024 com 12 docentes permanentes. A produção bibliográfica quase quadruplica: 80 artigos no ano, contra 6 em 2021.", f: "Coleta CAPES 2024" },
  { ano: "2024", cat: "form", t: "Primeiros pós-doutorandos", d: "Quatro pós-doutorandos iniciam em 2024 e mais um em 2025.", f: "Página Pós-Doutorandos do site do programa" },
  { ano: "2024", cat: "rede", t: "Cinco eventos organizados", d: "Organizados pelo próprio programa: 2º Simpósio Território, Cidade e Arquitetura e 1º Tchá Pesquisa, voltado à graduação. Em parceria com a ANAP, como coorganizador: II Latin American Symposium City, Architecture and Sustainability, I Congresso Brasileiro Mudanças Climáticas e a Resiliência Urbana e IV Encontro para Construção de Cidades Verdes.", f: "Anais dos eventos; site do programa; Even3" },
  { ano: "2024", cat: "rede", t: "Parceria com a ANAP", d: "Parceria do PPGAU com a Associação Amigos da Natureza da Alta Paulista em ações ligadas aos Objetivos de Desenvolvimento Sustentável.", f: "Site do programa" },
  { ano: "2024", cat: "prod", t: "Pesquisa do programa na imprensa", d: "Estudo sobre as paradas de ônibus de Cuiabá (mais de 53% sem abrigo) é noticiado pelo VG Notícias.", f: "VG Notícias, 15/09/2024" },
  { ano: "2025", cat: "prod", t: "Projeto aprovado no CNPq Universal", d: "Cinza da palha do milho como material cimentício sustentável (Chamada CNPq/MCTI/FNDCT 44/2024; processo 401735/2025-7; R$ 117.240,82), com a Universidad de Córdoba e a UNESP.", f: "CNPq; Lattes dos docentes; site do programa" },
  { ano: "2025", cat: "rede", t: "1st International Congress Landscape, Urban Space and Sustainability", d: "Organizado em rede com a ANAP e o PPGARQ/UNESP, com comissão científica de cinco países. Também em parceria com a ANAP: IV Simpósio Cidade, Paisagem e a Natureza e II Congresso Mudanças Climáticas e a Resiliência Urbana. Organizado pelo próprio programa: 3º Simpósio Território, Cidade e Arquitetura.", f: "Anais dos eventos" },
  { ano: "2026", cat: "aval", t: "Resultado da Quadrienal 2025", d: "Nota 3 mantida para o período 2021–2024, com conceito Muito Bom no quesito Programa.", f: "CAPES, Avaliação Quadrienal 2025, área Arquitetura, Urbanismo e Design" },
  { ano: "2026", cat: "inst", t: "Terceira linha de pesquisa", d: "Gestão, Inovação e Tecnologias, criada pelo Edital 05/2026. Entra na Sucupira com a Coleta 2026.", f: "Edital 05/2026 do programa" },
  { ano: "2026", cat: "aval", t: "Portaria CAPES nº 246/2026", d: "Permite que mestrado nota 3 proponha doutorado; a proposta é julgada com os dados do quadriênio em curso.", f: "Diário Oficial da União, 03/06/2026" },
  { ano: "2026", cat: "aval", t: "Autoavaliação 2026 e portal PPGAU UNIVAG em dados", d: "Questionários para seis públicos, com coleta até 3 de novembro de 2026, e este portal com os dados do programa e as fontes citadas.", f: "Este portal" },
  { ano: "2026", cat: "form", t: "Maior turma de ingressantes", d: "Dezesseis novos mestrandos em 2026, incluindo a turma de 2026/2.", f: "Página Discentes do site do programa" },
  { ano: "2027", cat: "aval", t: "Proposta de doutorado", d: "Preparar regimento, matriz e edital, e submeter a proposta (APCN) se os dados sustentarem nota 4.", f: "Aba Metas para o Doutorado", plano: true },
  { ano: "2028", cat: "aval", t: "Fim do quadriênio 2025–2028", d: "Meta: chegar à nota 4 na Quadrienal, com Bom em Formação.", f: "Aba Metas 2025–2028", plano: true }
];

// Números de cada ano a partir dos dados do portal (Coleta CAPES até 2024; Lattes e site depois).
function histNumeros() {
  const S = BASE.series || {}, out = {};
  const ing = [6, 5, 9, 18];
  const def = {}; (BASE.dissertacoes || []).forEach(x => def[x[0]] = (def[x[0]] || 0) + 1);
  const art = {}; if (typeof PLAT === "object") PLAT.itens.filter(x => x[0] === "art").forEach(x => art[x[1]] = (art[x[1]] || 0) + 1);
  const ingP = {}; if (typeof PESSOAS === "object") PESSOAS.filter(p => p.c === "discente" && /^20\d\d/.test(p.in)).forEach(p => { const a = p.in.slice(0, 4); ingP[a] = (ingP[a] || 0) + 1; });
  (BASE.anos || []).forEach((a, i) => { out[a] = { doc: S.permanentes ? S.permanentes.valores[i] : null, ing: ing[i], def: def[a] || 0, art: S.artigos ? S.artigos.valores[i] : null }; });
  ["2025", "2026"].forEach(a => { out[a] = { doc: null, ing: ingP[a] || null, def: def[a] || 0, art: art[+a] || art[a] || null }; });
  return out;
}

function historiaCorpo() {
  const filtro = st.hcat || "";
  const nums = histNumeros();
  const itens = HIST.filter(h => !filtro || h.cat === filtro);
  const anos = [...new Set(itens.map(h => h.ano))];
  const chip = c => `<span class="hl-cat" style="--hc:${HIST_CAT[c][1]}">${esc(HIST_CAT[c][0])}</span>`;
  const n = nums => !nums ? "" : `<div class="hl-num">${[["doc", "docentes permanentes"], ["ing", "ingressantes"], ["def", "defesas"], ["art", "artigos"]].filter(([k]) => nums[k] != null).map(([k, r]) => `<span><b>${nums[k]}</b>${r}</span>`).join("")}</div>`;
  return `
    <div class="hl-top">
      <div class="hl-resumo">${[["2018", "recomendação pela CAPES"], ["2019", "primeira turma"], [String((BASE.dissertacoes || []).length), "dissertações defendidas desde 2021"], ["2024", "corpo docente próprio"], ["3", "linhas de pesquisa em 2026"]].map(([v, r]) => `<div><b>${v}</b><span>${r}</span></div>`).join("")}</div>
      <div class="hl-filtro" role="group" aria-label="Filtrar por tema"><button data-hcat="" aria-pressed="${!filtro}">Todos</button>${Object.entries(HIST_CAT).map(([k, [t, c]]) => `<button data-hcat="${k}" aria-pressed="${filtro === k}" style="--hc:${c}"><i></i>${t}</button>`).join("")}</div>
    </div>
    <ol class="hl">${anos.map(a => {
      const doAno = itens.filter(h => h.ano === a), plano = doAno.every(h => h.plano);
      return `<li class="hl-ano${plano ? " plano" : ""}"><div class="hl-marca"><span class="hl-y">${esc(a)}</span>${plano ? `<span class="hl-pl">planejado</span>` : ""}</div>
        <div class="hl-it">${n(nums[a])}${doAno.map(h => `<article class="hl-card" style="--hc:${HIST_CAT[h.cat][1]}">${chip(h.cat)}<h4>${esc(h.t)}</h4><p>${esc(h.d)}</p><span class="fonte">Fonte: ${esc(h.f)}</span></article>`).join("")}</div></li>`;
    }).join("")}</ol>
    <p class="fonte">Números por ano: docentes permanentes, ingressantes e artigos de 2021 a 2024 pela Coleta CAPES; defesas pelo repositório digital do UNIVAG; ingressantes de 2025 e 2026 pela página Discentes do site; artigos de 2025 e 2026 pelos currículos Lattes de 18/10/2026 (*2026 até outubro). Os marcos de 2027 e 2028 são metas do planejamento, não fatos.</p>`;
}
