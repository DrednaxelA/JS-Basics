function changeBureau(input) {
    let bitcoin = Number(input[0]);
    let yuan = Number(input[1]);
    let comission = Number(input[2]);

    comission = comission * 0.01

    let alleuro = (yuan * 0.15 * 1.76 + bitcoin * 1168) / 1.95
    let charge = alleuro * comission
    let result = alleuro - charge
    console.log(result.toFixed(2))
}
changeBureau([1, 5, 5])