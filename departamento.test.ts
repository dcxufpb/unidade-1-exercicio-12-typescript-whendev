import { Departamento } from './departamento';
import { Coordenador } from './coordenador';


function verificaCampoObrigatorio(mensagemEsperada: string, Departamento: Departamento) {
  try {
    Departamento.dados_departamento();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}

// Todas as variaveis preenchidas

const NOME_COORDENADOR = "whendel"
const CPF = "703.917.760-96"
const IDADE = 21
const NOME_DEPARTAMENO = "departamento-01"
const LOCALIZACAO = "Local-01"
const SIGLA = "WSM-01"

const TEXTO_ESPERADO_DEPARTAMENTO_COMPLETO = `COORDENADOR:
Nome: whendel
Cpf: 703.917.760-96
Idade: 21
DEPARTAMENTO:
Nome: departamento-01
Sigla: WSM-01
Localizacao: Local-01`



test('Departamento Completo', () => {
  let coordenadorCompleto: Coordenador = new Coordenador(NOME_COORDENADOR, CPF, IDADE);
  let departamentoCompleto: Departamento = new Departamento(NOME_DEPARTAMENO, SIGLA, LOCALIZACAO, coordenadorCompleto);
  expect(departamentoCompleto.dados_departamento()).toBe(TEXTO_ESPERADO_DEPARTAMENTO_COMPLETO);
});

test('Departamento nome vazio', () => {
  let coordenadorCompleto: Coordenador = new Coordenador(NOME_COORDENADOR, CPF, IDADE);
  let departamentoNomeVazio: Departamento = new Departamento("", SIGLA, LOCALIZACAO, coordenadorCompleto);
  verificaCampoObrigatorio(`O campo nome do departamento é obrigatório`, departamentoNomeVazio);
});

test('Coordenador nome vazio', () => {
  let coordenadorCompleto: Coordenador = new Coordenador("", CPF, IDADE);
  let departamentoNomeVazio: Departamento = new Departamento(NOME_DEPARTAMENO, SIGLA, LOCALIZACAO, coordenadorCompleto);
  verificaCampoObrigatorio(`O campo nome do coordenador é obrigatório`, departamentoNomeVazio);
});