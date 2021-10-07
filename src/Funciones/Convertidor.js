function convertidor(unidad_inicial,unidad_final,valor) {
    let result = 0
    switch (unidad_inicial,unidad_final) {
        case "J" && "cal":
            result = valor * 0.23900574
            break;
        case "cal" && "J":
            result = valor * 4.184
            break;
        default:
            result = "No existe esta unidad"
            break;
    }
    return result;
}