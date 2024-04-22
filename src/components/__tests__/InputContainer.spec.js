import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import InputContainer from '@/components/common/InputContainer.vue'

describe('InputContainer', () => {
    test('Teste de renderização de conteúdo', () => {
        const inputContainerMount = mount(InputContainer, {
            props: {
                label: 'TesteTeste Label'
            },
            slots: {
                default: '<p>Texto de teste</p>'
            }
        })
        expect(inputContainerMount.find('.label').text()).toContain('Teste Label')
        expect(inputContainerMount.find('.container-input').text()).toContain('Texto de teste')
    })
})

describe('InputContainer', () => {
    test('Teste de mensagem de erro', () => {
        const inputContainerMount = mount(InputContainer, {
            props: {
                label: 'TesteTeste Label',
                requireInput: true,
                requireMsg: 'Teste mensagem de erro!',
                err: true,
            }
        })

        expect(inputContainerMount.find('.required-content-error').text()).toContain('Teste mensagem de erro!')
    })
})