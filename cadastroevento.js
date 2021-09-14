let quantidadeDeMembros = 0;
let temErros = true;
let controleFluxo = true;


    while(temErros) {
    		let data = prompt ("Data do evento é posterior a data atual? sim ou não.");
               

        if (data == "sim"){
            console.log ("Evento permitido.");
        }
        else if (data == "sair") {
            controleFluxo = false;
            break;
        }
        else {
            console.log ("O cadastro não será permitido por data inválida.");
            break;
            
        }
        
        let membro = prompt ("Digite Participante ou Palestrante.");

        switch (membro){
            case "Participante":
                console.log("Bem vindo Participante.");
                alert("Bem vindo Participante.");

                quantidadeDeMembros++;

                if (quantidadeDeMembros >= 100) {
                    console.log ("Não será permitido por ter excedido o limite.");
                    alert("Não será permitido por ter excedido o limite.");
                    break;
                }

                console.log ("Cadastro permitido.");
                alert("Cadastro permitido.");

                let idade = prompt ("É maior de 18 anos? sim ou não");
                if (idade != "sim"){
                    alert("O cadastro não é permitido pela idade.");
                    console.log("O cadastro não é permitido pela idade.");
                    break;
                }

                console.log("Cadastro OK.");
                alert("Cadastro OK.")
                temErros = false;
                break;

            case "Palestrante":
                console.log ("Bem vindo palestrante.");
                alert("Bem vindo palestrante.");
                temErros = false;
                break;

            default:
               alert("Erro.");
               console.log("Erro.");
        }
    }
