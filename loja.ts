import { Endereco } from "./endereco";

export class Loja {

    constructor(public nome_loja: string, public endereco: Endereco,
        public telefone: string, public observacao: string, public cnpj: string, public inscricao_estadual: string) { }

    public isNullOrEmpty(s: String): boolean {
        return s == null || s.length == 0;
    }

    public validar_campos_obrigatorios(): void{
        if (this.nome_loja == "") {
            throw new Error(`O campo nome da loja é obrigatório`);
        }
        
        if (this.cnpj == "") {
            throw new Error(`O campo CNPJ da loja é obrigatório`);
        }
    
        if (this.inscricao_estadual == "") {
            throw new Error(`O campo inscrição estadual da loja é obrigatório`);
        }
    }

    public dados_loja(): string {
        // Implemente aqui
        this.validar_campos_obrigatorios();
        
        let _TELEFONE = "";


        if(!this.isNullOrEmpty(this.endereco.cep)){
            _TELEFONE = (this.isNullOrEmpty(this.telefone) ? "" : " Tel " + this.telefone);
        } else {
            _TELEFONE = (this.isNullOrEmpty(this.telefone) ? "" : "Tel " + this.telefone)
        }

    
        let _OBSERVACAO = "";
        if(this.observacao != ""){
            _OBSERVACAO = this.observacao;
        }

        
        let show = `${this.nome_loja}
${this.endereco.dados_endereco()}${_TELEFONE}
${this.observacao}
CNPJ: ${this.cnpj}
IE: ${this.inscricao_estadual}
`;
        return show;
    }
}