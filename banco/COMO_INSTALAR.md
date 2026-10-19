# Banco de dados da Autoavaliação PPGAU 2026

Um único arquivo, `autoavaliacao_banco.gs`, cria três coisas na conta Google do programa:

1. **Site de respostas**: abre no celular e no computador, sem login e sem Claude. Tem os 6 questionários (estudantes, docentes, pós-doutorandos, egressos, equipe técnica e gestão).
2. **Banco de dados**: é uma planilha Google na sua conta.
   - A aba **Participantes** guarda nome, e-mail, Lattes e o questionário de cada pessoa, em ordem alfabética.
   - As abas **Respostas A** até **Respostas E** guardam as respostas sem nome e sem e-mail. Cada linha tem só a data do dia e entra numa posição sorteada.
   - Não há vínculo entre as duas listas, então ninguém, nem a coordenação, consegue saber o que cada pessoa respondeu.
3. **Painel da coordenação**: fica protegido por senha. Mostra quem já respondeu e quem falta, comparado com os 13 docentes, 32 discentes, 5 pós-doutorandos e 27 egressos do portal. Tem botão para baixar a lista em CSV.

O mesmo e-mail não consegue responder duas vezes ao mesmo questionário. As respostas em andamento ficam salvas no aparelho até o envio.

## Instalação (uma vez, cerca de 5 minutos)

1. Entre na conta Google do programa e abra https://script.google.com.
2. Clique em **Novo projeto**, apague o texto que aparece, cole o arquivo `autoavaliacao_banco.gs` inteiro e clique em **Salvar**.
3. No alto, escolha a função **instalar** e clique em **Executar**. Autorize quando o Google pedir; é a sua própria conta criando a planilha.
4. No **Registro de execução** aparecem o link da planilha e a **senha do painel**. Anote a senha.
5. Clique em **Implantar**, depois **Nova implantação**, e escolha o tipo **App da Web**.
   - Em **Executar como**, escolha **Eu**.
   - Em **Quem pode acessar**, escolha **Qualquer pessoa**.
   - Clique em **Implantar** e copie o **URL do app da Web**.

## Links

| Para quê | Endereço |
|---|---|
| Página de escolha do questionário | URL do app |
| Direto para um questionário | URL + `?q=A` (estudantes), `?q=B` (docentes), `?q=P` (pós-doutorandos), `?q=C` (egressos), `?q=D` (equipe técnica), `?q=E` (gestão) |
| Painel da coordenação | URL + `?p=admin` (pede a senha; quem é a dona da conta entra direto) |
| Resultados agregados para o portal | URL + `?p=resumo`. Traz só perguntas fechadas e só aparece a partir de 5 respostas por questionário. |

Para trocar a senha, execute a função **novaSenha**.
