class Héroi {
    constructor (nome, idade ,tipo ) {

        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo ;
    }
     atacar() {

        let ataque = "";



        switch (this.tipo) {
            case "guerreiro":
                ataque = "espada";
                break;
        
        
            case "mago":
                ataque = "magia";
                break;
        
            
    
            case "assassino":
                ataque = "adaga";
                break;
        

            case "ninja":
                ataque = "shuriken";
                break;
        
        
            case "monge":
                ataque = "artes marciais";
                break;
        
  

        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
     }
     
  
}


new Héroi("Shadow", "17", "assassino").atacar ();