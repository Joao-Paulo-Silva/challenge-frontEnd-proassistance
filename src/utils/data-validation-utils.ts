import type { TFormErrors, TPersonFormsData } from "@/types";

/**
 * Verifica se todos os campos obrigatórios do objeto ``dataPerson`` estão preenchidos.
 *
 * @param {TPersonFormsData} dataPerson - Os dados do formulário de uma pessoa.
 * @returns {TFormErrors} - Um objeto contendo erros de validação para os campos obrigatórios.
 */
export function personDataValidation(dataPerson: TPersonFormsData): TFormErrors {
    return {
        nameErr: dataPerson.name.length === 0,
        neighborhoodErr: dataPerson.neighborhood.length === 0,
        cpfErr: !validationCPF(dataPerson.cpf),
        dateOfBirthErr: !validationBirthDate(dataPerson.birthDate),
        addressErr: dataPerson.address.length === 0,
        ethnicityErr: dataPerson.ethnicity.length === 0,
        rgErr: dataPerson.rg.length < 10,
        biologicalSexErr: dataPerson.biologicalSex.length === 0,
    }
}


/**
 * Verifica se um CPF é válido seguindo o calculo.
 * @param {string} cpf CPF a ser validado.
 * @returns `true` se o CPF é válido, `false` caso contrário.
 */
export function validationCPF(cpf: string): boolean {
    // Converte o CPF para um array de dígitos numéricos.
    const cpfDigits = cpf.replace(/\D/g, '').split('').map(Number);
    // Verifica se o CPF tem 11 dígitos e Validação dos CPFs inválidos conhecidos.
    if (cpfDigits.length !== 11 || cpfDigits.every((digit) => digit === cpfDigits[0])) {
        return false;
    }
    // Pesos para o cálculo do primeiro dígito verificador.
    const weights1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    // Calcula o primeiro dígito verificador.
    const sum1 = cpfDigits.slice(0, 9).reduce((acc, digit, index) => acc + digit * weights1[index], 0);
    let remainder1 = (sum1 * 10) % 11;
    if (remainder1 === 10) {remainder1 = 0}
    // Pesos para o cálculo do segundo dígito verificador.
    const weights2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    // Calcula o segundo dígito verificador.
    const sum2 = cpfDigits.slice(0, 10).reduce((acc, digit, index) => acc + digit * weights2[index], 0);
    let remainder2 = (sum2 * 10) % 11;
    if (remainder2 === 10) {remainder2 = 0}
    // Verifica se os dígitos verificadores são válidos.
    if (remainder1 === cpfDigits[9] && remainder2 === cpfDigits[10]) {
        return true;
    }
    return false;
}

/**
 * Valida se uma data de nascimento é válida, verificando se a data informada é anterior ou igual à data atual.
 * @param {string} date Data de nascimento no formato 'YYYY-MM-DD'.
 * @returns {boolean} `true` se a data de nascimento é válida (anterior ou igual à data atual), `false` caso contrário.
 */
export function validationBirthDate(date: string){
    if(date.length < 10){
        return false
    }

    const todayDate = new Date()
    const inputData = new Date(date)

    return todayDate >= inputData

}