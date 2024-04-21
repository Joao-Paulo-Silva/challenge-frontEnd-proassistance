import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ModalElement from '@/components/common/ModalElement.vue'

describe('ModalElement', () => {
    test('Teste de renderização do modal', () => {
        const modalMount = mount(ModalElement, {
            props: {
                show: true
            },
            slots: {
                default: '<p>Texto de teste</p>'
            }
        })
        expect(modalMount.find('.modal').exists()).toBe(true)
        expect(modalMount.find('.modal-content').text()).toContain('Texto de teste')
    })

    test('Teste se o modal não está visível', () => {
        const modalMount = mount(ModalElement, {
            props: {
                show: false
            },
        })
        expect(modalMount.find('.modal').exists()).toBe(false)
        expect(modalMount.find('.modal-content').exists()).toBe(false)
    })
})
