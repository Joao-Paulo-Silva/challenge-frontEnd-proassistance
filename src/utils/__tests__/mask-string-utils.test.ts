import { describe, expect, test } from 'vitest'
import { formatCPF, formatPhone, formatRG } from '../mask-string-utils'


// Testes de formatação de cpf:
describe('formatCPF', () => {
    test('Teste de formatação de CPF: string com 11 números', () => {
        expect(formatCPF('11122233344')).toBe('111.222.333-44')
    })

    test('Teste de formatação de CPF: string com 8 números e 3 letras', () => {
        expect(formatCPF('111A2223BC')).toBe('111.222.3')
    })

    test('Teste de formatação de CPF: string com 5 números', () => {
        expect(formatCPF('11122')).toBe('111.22')
    })
})

// Testes de formatação de telefone:
describe('formatPhone', () => {
    test('Teste de formatação de Telefone: string com 11 números', () => {
        expect(formatPhone('11122233344')).toBe('(11) 1 2223-3344')
    })

    test('Teste de formatação de Telefone: string com 2 números e 3 letras', () => {
        expect(formatPhone('11ABC')).toBe('11')
    })

    test('Teste de formatação de Telefone: string com 5 números', () => {
        expect(formatPhone('11122')).toBe('(11) 122')
    })
})

// Testes de formatação de telefone:
describe('formatRG', () => {
    test('Teste de formatação de rg: string com 11 números', () => {
        expect(formatRG('11122233344')).toBe('11122233344')
    })

    test('Teste de formatação de rg: string com 2 números e 3 letras', () => {
        expect(formatRG('11ABC')).toBe('AB11')
    })

    test('Teste de formatação de rg: string com 5 números', () => {
        expect(formatRG('MG11122aaaa')).toBe('MG11122')
    })
})