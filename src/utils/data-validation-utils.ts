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
        cpfErr: dataPerson.cpf.length < 14,
        dateOfBirthErr: dataPerson.birthDate.length === 0,
        addressErr: dataPerson.address.length === 0,
        ethnicityErr: dataPerson.ethnicity.length === 0,
        idErr: dataPerson.id.length < 10,
        biologicalSexErr: dataPerson.biologicalSex.length === 0,
    }
}