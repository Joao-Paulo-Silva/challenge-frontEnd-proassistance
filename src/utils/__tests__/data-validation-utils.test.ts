import { describe, expect, test } from 'vitest'
import { validationCPF, validationBirthDate } from '../data-validation-utils'


// Testes de validade de cpf:
describe('validationCPF', () => {
    test('Validade do CPF: cpf invalido.', () => {
        expect(validationCPF('111.222.333-44')).toBe(false)
    })
    // Com cpf Gerado aleatoriamente
    test('Validade do CPF: cpf valido.', () => {
        expect(validationCPF('678.550.056-76')).toBe(true)
    })

})


// Testes de validade da data de nascimento
describe('validationBirthDate', () => {
    test('Validade da data de nascimento: data invalida - futuro.', () => {
        const hoje = new Date();
        hoje.setDate(hoje.getDate() + 1);
        expect(validationBirthDate(hoje.toDateString())).toBe(false)
    })
    // Com cpf Gerado aleatoriamente
    test('Validade da data de nascimento: data valida - presente', () => {
        expect(validationBirthDate(new Date().toDateString())).toBe(true)
    })

})
