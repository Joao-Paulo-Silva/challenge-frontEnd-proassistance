<script lang="ts">

import 'vue3-toastify/dist/index.css'
import { defineComponent } from 'vue'
import { toast } from 'vue3-toastify'

import { formatPhone, formatCPF, formatRG } from '@/utils/mask-string-utils'
import {
  genderOptions,
  ethnicityOptions,
  lgbtqiaOptions,
  biologicalSexOptions,
  FormErrors,
  PersonFormsData
} from '@/constants/index'
import SpaceComponent from './common/SpaceComponent.vue'
import ModalElement from './common/ModalElement.vue'
import ModalContent from './ModalContent.vue'
import InputContainer from './common/InputContainer.vue'

import { personDataValidation, validationCPF, validationBirthDate } from '@/utils/data-validation-utils'


export default defineComponent({
  components: {
    SpaceComponent,
    ModalElement,
    ModalContent,
    InputContainer
  },
  data() {
    return {
      formData: {
        ...PersonFormsData
      },
      errs: {
        ...FormErrors
      },
      submitted: false,
      genderOptions,
      ethnicityOptions,
      lgbtqiaOptions,
      biologicalSexOptions,
      show: false,
      cpfIsValid: false,
      birthDateIsValid: false,
    }
  },
  methods: {
    submitForm() {
      this.updateErrs()
      const hasErrors = Object.values(this.errs).some((err) => err)
      if (hasErrors) {
        toast.error('Por favor, preencha todos os campos obrigatórios.', {
          position: toast.POSITION.BOTTOM_LEFT
        })
        return
      }
      console.log(this.formData)
      this.submitted = true
      this.show = true
    },
    closeModal() {
      this.resetForm()
      this.show = false
    },
    resetForm() {
      this.formData = {
        ...PersonFormsData
      }
      this.errs = {
        ...FormErrors
      }
      this.birthDateIsValid = false
      this.cpfIsValid = false
    },
    updateErrs() {
      this.errs = personDataValidation(this.formData)
    },
    formatPhoneLocal() {
      this.formData.phone = formatPhone(this.formData.phone)
    },
    formatCPFLocal() {
      this.formData.cpf = formatCPF(this.formData.cpf)
    },
    formatRGLocal() {
      this.formData.rg = formatRG(this.formData.rg)
    },
    validationCPFInput(){
      if(this.formData.cpf.length > 0){
        this.cpfIsValid = !validationCPF(this.formData.cpf)
        this.errs.cpfErr = !validationCPF(this.formData.cpf)
      }
    },
    validationDateInput(){
      if(this.formData.birthDate.length > 0){
        this.birthDateIsValid = !validationBirthDate(this.formData.birthDate)
        this.errs.dateOfBirthErr = !validationBirthDate(this.formData.birthDate)
      }else if(this.formData.birthDate.length === 0)
        this.birthDateIsValid = false
    }
  }
})
</script>

<template>
  <ModalElement :show="show">
    <ModalContent :close-modal="closeModal" />
  </ModalElement>
  <form class="content" @submit.prevent="submitForm">
    <h1 class="title">Cadastro</h1>
    <h2 class="text-container">Identificação da pessoa</h2>
    <InputContainer id="name" label="Nome" :require-input="true" :err="errs.nameErr">
      <input class="input" type="text" id="name" placeholder="Digite o nome" v-model="formData.name" />
    </InputContainer>

    <InputContainer id="socialName" label="Nome Social" name-icon="md-infooutline-round">
      <input class="input" type="text" id="socialName" placeholder="Digite o nome social"
        v-model="formData.socialName" />
    </InputContainer>

    <div class="flex-columns">
      <InputContainer id="birthDate" label="Data de Nascimento" :require-input="true" :err="birthDateIsValid || errs.dateOfBirthErr"
        :require-msg="birthDateIsValid ? 'Data de nascimento invalida!' : 'Preenchimento obrigatório'"
      >
        <input class="input" type="date" id="birthDate" v-model="formData.birthDate" @blur="validationDateInput" />
      </InputContainer>

      <SpaceComponent width="2em" height="0" />

      <InputContainer id="biologicalSex" label="Sexo Biológico:" :require-input="true" :err="errs.biologicalSexErr">
        <select class="input" v-model="formData.biologicalSex">
          <option class="input" disabled value="">Selecione</option>
          <option class="input" v-for="option in biologicalSexOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </InputContainer>
    </div>
    <div class="flex-columns">
      <div class="flex">
        <div class="column">
          <InputContainer id="gender" label="Gênero">
            <div v-for="option in genderOptions.slice(0, genderOptions.length / 2)" :key="option.value"
              class="container-radio">
              <input type="radio" :id="option.value" :value="option.value" v-model="formData.gender" />
              <label :for="option.value">
                {{ option.label }} <v-icon class="icon-form" name="md-infooutline-round" />
              </label>
            </div>
          </InputContainer>
        </div>

        <SpaceComponent width="2em" height="0" />

        <div class="column">
          <InputContainer id="gender" label="&nbsp;">
            <div v-for="option in genderOptions.slice(genderOptions.length / 2)" :key="option.value"
              class="container-radio">
              <input type="radio" :id="option.value" :value="option.value" v-model="formData.gender" />
              <label :for="option.value">{{ option.label }} <v-icon class="icon-form"
                  name="md-infooutline-round" /></label>
            </div>
          </InputContainer>
        </div>
      </div>

      <SpaceComponent width="2em" height="0" />

      <InputContainer id="LGBTQIA" label="A pessoa se considera parte do público LGBTQIA+?">
        <div class="flex">
          <div v-for="option in lgbtqiaOptions" :key="option.value" style="margin-right: 1em" class="container-radio">
            <input type="radio" :id="option.value" :value="option.value === 'Sim'" v-model="formData.LGBTQIA" />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </div>
      </InputContainer>
    </div>
    <div>
      <InputContainer id="corRaca" label="Cor/raça" class="max-content-50 padding-right" :require-input="true"
        :err="errs.ethnicityErr">
        <select class="input" v-model="formData.ethnicity">
          <option disabled value="">Selecione</option>
          <option v-for="option in ethnicityOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </InputContainer>
    </div>
    <h2 class="text-container">Documentos</h2>
    <div class="flex-columns">
      <InputContainer id="rg" label="RG" :require-input="true" :err="errs.rgErr"
        require-msg="Preenchimento obrigatório de RG ou de CPF">
        <input class="input" type="text" id="rg" maxlength="12" placeholder="0000000000" v-model="formData.rg"
          @input="formatRGLocal" />
      </InputContainer>

      <SpaceComponent width="2em" height="0" />

      <InputContainer id="cpf" label="CPF" :require-input="true" :err="errs.cpfErr || cpfIsValid"
        :require-msg="cpfIsValid ? 'O CPF informado não é válido.' : 'Preenchimento obrigatório de RG ou de CPF'">
        <input class="input" type="text" id="cpf" maxlength="14" placeholder="000.000.000-00" v-model="formData.cpf"
          @input="formatCPFLocal" @blur="validationCPFInput"/>
      </InputContainer>
    </div>
    <h2 class="text-container">Local de residência</h2>
    <div class="flex-columns">
      <InputContainer id="neighborhood" label="Bairro" :require-input="true" :err="errs.neighborhoodErr">
        <input class="input" type="text" id="neighborhood" placeholder="Digite o bairro"
          v-model="formData.neighborhood" />
      </InputContainer>

      <SpaceComponent width="2em" height="0" />

      <InputContainer id="address" label="Endereço" :require-input="true" :err="errs.addressErr">
        <input class="input" type="text" id="address" placeholder="Digite o endereço" v-model="formData.address" />
      </InputContainer>
    </div>
    <div class="flex-columns">
      <InputContainer id="number" label="Número">
        <div class="flex-input-icon">
          <v-icon class="icon-span" name="md-home-outlined" />
          <input class="input  padding-left-input" type="text" id="number" placeholder="Digite o número"
            v-model="formData.number" />
        </div>
      </InputContainer>

      <SpaceComponent width="2em" height="0" />

      <InputContainer id="complement" label="complemento">
        <div class="flex-input-icon">
          <v-icon class="icon-span" name="md-home-outlined" />
          <input class="input  padding-left-input" type="text" id="complement" placeholder="Ex: apartamento 22"
            v-model="formData.complement" />
        </div>
      </InputContainer>
    </div>
    <h2 class="text-container">Informações de contato</h2>
    <div class="flex-columns">
      <InputContainer id="phone" label="Celular">
        <div class="flex-input-icon">
          <v-icon class="icon-span" name="md-smartphone" />
          <input class="input padding-left-input" type="text" id="phone" placeholder="(00) 00000-0000"
            v-model="formData.phone" @input="formatPhoneLocal" maxlength="15" />
        </div>
      </InputContainer>

      <SpaceComponent width="2em" height="0" />

      <InputContainer id="email" label="E-mail">
        <div class="flex-input-icon">
          <v-icon class="icon-span" name="md-email-outlined" />
          <input class="input padding-left-input" type="email" id="email" placeholder="Digite o email"
            v-model="formData.email" />
        </div>
      </InputContainer>
    </div>
    <div class="content-btn">
      <button @click="resetForm" type="button" class="btn btn-secondary">Cancelar</button>
      <button type="submit" class="btn btn-primary">Cadastrar</button>
    </div>
  </form>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 100%;
}

.icon-span {
  position: absolute;
  margin-left: 0.5rem;
  color: var(--placeholder-text);
  z-index: -1;
}
</style>
