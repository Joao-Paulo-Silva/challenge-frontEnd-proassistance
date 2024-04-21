import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ModalContent from '@/components/ModalContent.vue'

describe('ModalContent', () => {
    test('Teste da utilização da função closeModal', async () => {
    let testClose = false;
    const modalMount = mount(ModalContent, {
            props: {
                closeModal: () => {testClose = true}
            }
    })
    await modalMount.find('button').trigger('click')
    expect(testClose).equal(true)
  })
})