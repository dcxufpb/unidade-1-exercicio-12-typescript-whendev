import { Coordenador } from "./coordenador";

export class Departamento {

  constructor(public nome: string, public sigla: string, public localizacao: string, public coordenador: Coordenador){}


  public isNullOrEmpty(s: String): boolean {
    return s == null || s.length == 0;
  }

  
  public validarCamposObrigatorio(){
    
    if (this.isNullOrEmpty(this.nome)){
        throw new Error(`O campo nome do departamento é obrigatório`);
    }

    if (this.isNullOrEmpty(this.sigla)){
        throw new Error(`O campo sigla do departamento é obrigatório`);
    }

    if (this.isNullOrEmpty(this.localizacao)) {
        throw new Error(`O campo localizacao do departamento é obrigatório`);
    }
  }

  public dados_departamento(){
    this.validarCamposObrigatorio();

    return `COORDENADOR:\n${this.coordenador.dados_coordenador()}\nDEPARTAMENTO:\nNome: ${this.nome}\nSigla: ${this.sigla}\nLocalizacao: ${this.localizacao}`
  }

}