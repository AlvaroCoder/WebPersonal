export default function pesoMolecular(compuesto,moles=1) {
    let  num_char = "",char_before = "",cont = 1, result = 0
    const elementos_quimicos = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn"]
    const pesos_atomicos = [1,4,6.94,9.01,10.81,12.01,14,16,18.98,20.18,22.9,24.3,26.98,28.05,30.97,32.06,35.45,40,39.09,40,44.95,47.87,50.94,52,55.84,55.85,58.93,58.69,63.55,65.38]
    let contador = 0
    if (compuesto.length>1) {
        for (let index = 0; index < compuesto.length; index++) {
            if (isFinite(compuesto[index])) {
                num_char+= compuesto[index]
                if (index < compuesto.length-1 && isFinite(compuesto[index+1])) {
                    cont+=1
                    continue
                }
                else{
                    while (contador<parseInt(num_char)-1) {
                        result += pesos_atomicos[elementos_quimicos.indexOf(char_before)]
                        contador++
                    }
                    contador=0
                    num_char=""
                    char_before=""
                }
            }  
            else if (compuesto[index] === compuesto[index].toUpperCase()) {
                char_before = compuesto[index]
                if (index<compuesto.length-1&& !isFinite(compuesto[index+1]) && compuesto[index+1]===compuesto[index+1].toLowerCase()) {
                    continue
                }
                result += pesos_atomicos[elementos_quimicos.indexOf(char_before)]
            } else if (compuesto[index]===compuesto[index].toLowerCase()) {
                char_before+=compuesto[index]
                result+=pesos_atomicos[elementos_quimicos.indexOf(char_before)]
            }
        }
    }else{
        result = pesos_atomicos[elementos_quimicos.indexOf(compuesto[0])]
    }
    if (!isNaN(result)) {
        return result*moles
    }else{
        return "Error"
    }
}