export class Coordenador {

  constructor(public nome: string, public cpf: string, public idade: number){}

  public isNullOrEmpty(s: String): boolean {
    return s == null || s.length == 0;
  }

  public validar_campos_obrigatorios(): void{
    if (this.isNullOrEmpty(this.nome)) {
        throw new Error(`O campo nome do coordenador é obrigatório`);
    }
    
    if (this.isNullOrEmpty(this.cpf)) {
        throw new Error(`O campo cpf do coordenador é obrigatório`);
    }

    if (this.idade == null) {
        throw new Error(`O campo idade do coordenador é obrigatório`);
    }
  }

  public dados_coordenador(){
    this.validar_campos_obrigatorios();

    return `Nome: ${this.nome}\nCpf: ${this.cpf}\nIdade: ${this.idade}`

  }

}