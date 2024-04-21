<template>
  <ModalElement :show="show">
    <ModalContent :close-modal="closeModal" />
  </ModalElement>
  <form class="content" @submit.prevent="submitForm">
    <h1 class="title">Cadastro</h1>
    <h2 class="text-container">Identificação da pessoa</h2>
    <div class="container-input">
      <label class="label" for="nome">Nome</label>
      <input
        class="input"
        type="text"
        id="nome"
        placeholder="Digite o nome"
        v-model="formData.name"
      />
      <p :class="errs.nameErr ? 'required-content-error' : 'required-content'">
        Preenchimento obrigatório
      </p>
    </div>

    <div class="container-input">
      <label class="label" for="nomeSocial"
        >Nome Social <v-icon class="icon-form" name="md-infooutline-round"
      /></label>
      <input
        class="input"
        type="text"
        id="nomeSocial"
        placeholder="Digite o nome social"
        v-model="formData.socialName"
      />
      <p class="required-content"></p>
    </div>
    <div class="flex-columns">
      <div class="container-input">
        <label class="label" for="dataNascimento">Data de Nascimento</label>
        <input class="input" type="date" id="dataNascimento" v-model="formData.birthDate" />
        <p :class="errs.dateOfBirthErr ? 'required-content-error' : 'required-content'">
          Preenchimento obrigatório
        </p>
      </div>
      <Space width="2em" height="0" />
      <div class="container-input">
        <label class="label">Sexo Biológico:</label>
        <select class="input" v-model="formData.biologicalSex">
          <option class="input" disabled value="">Selecione</option>
          <option
            class="input"
            v-for="option in biologicalSexOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
        <p :class="errs.biologicalSexErr ? 'required-content-error' : 'required-content'">
          Preenchimento obrigatório
        </p>
      </div>
    </div>
    <div class="flex-columns content-margin">
      <div class="flex w100">
        <div class="column">
          <label class="label">Gênero:</label>
          <div
            v-for="option in genderOptions.slice(0, genderOptions.length / 2)"
            :key="option.value"
            class="container-radio"
          >
            <input
              type="radio"
              :id="option.value"
              :value="option.value"
              v-model="formData.gender"
            />
            <label :for="option.value"
              >{{ option.label }} <v-icon class="icon-form" name="md-infooutline-round"
            /></label>
          </div>
        </div>
        <Space width="2em" height="0" />
        <div class="column">
          <label>&nbsp;</label>
          <div
            v-for="option in genderOptions.slice(genderOptions.length / 2)"
            :key="option.value"
            class="container-radio"
          >
            <input
              type="radio"
              :id="option.value"
              :value="option.value"
              v-model="formData.gender"
            />
            <label :for="option.value"
              >{{ option.label }} <v-icon class="icon-form" name="md-infooutline-round"
            /></label>
          </div>
        </div>
      </div>
      <Space width="2em" height="0" />
      <div class="w100">
        <label class="label">A pessoa se considera parte do público LGBTQIA+?</label>
        <div class="flex">
          <div
            v-for="option in lgbtqiaOptions"
            :key="option.value"
            style="margin-right: 1em"
            class="container-radio"
          >
            <input
              type="radio"
              :id="option.value"
              :value="option.value === 'Sim'"
              v-model="formData.LGBTQIA"
            />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="container-input w50">
        <label class="label" for="corRaca">Cor/raça</label>
        <select class="input" v-model="formData.ethnicity">
          <option disabled value="">Selecione</option>
          <option v-for="option in ethnicityOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <p :class="errs.ethnicityErr ? 'required-content-error' : 'required-content'">
          Preenchimento obrigatório
        </p>
      </div>
    </div>
    <h2 class="text-container">Documentos</h2>
    <div class="flex-columns">
      <div class="container-input">
        <label class="label" for="rg">RG</label>
        <input
          class="input"
          type="text"
          id="rg"
          maxlength="10"
          placeholder="0000000000"
          v-model="formData.id"
        />
        <p :class="errs.idErr ? 'required-content-error' : 'required-content'">
          Preenchimento obrigatório de RG ou de CPF
        </p>
      </div>
      <Space width="2em" height="0" />
      <div class="container-input">
        <label class="label" for="cpf">CPF</label>
        <input
          class="input"
          type="text"
          id="cpf"
          maxlength="14"
          placeholder="000.000.000-00"
          v-model="formData.cpf"
        />
        <p :class="errs.cpfErr ? 'required-content-error' : 'required-content'">
          Preenchimento obrigatório de RG ou de CPF
        </p>
      </div>
    </div>
    <h2 class="text-container">Local de residência</h2>
    <div class="flex">
      <div class="container-input">
        <label class="label" for="bairro">Bairro</label>
        <input
          class="input"
          type="text"
          id="bairro"
          placeholder="Digite o bairro"
          v-model="formData.neighborhood"
        />
        <p :class="errs.neighborhoodErr ? 'required-content-error' : 'required-content'">
          Preenchimento obrigatório
        </p>
      </div>
      <Space width="2em" height="0" />
      <div class="container-input">
        <label class="label" for="endereco">Endereço</label>
        <input
          class="input"
          type="text"
          id="endereco"
          placeholder="Digite o endereço"
          v-model="formData.address"
        />
        <p :class="errs.addressErr ? 'required-content-error' : 'required-content'">
          Preenchimento obrigatório
        </p>
      </div>
    </div>
    <div class="flex-columns">
      <div class="container-input">
        <label class="label" for="numero">Número</label>
        <input
          class="input"
          type="text"
          id="numero"
          placeholder="Digite o número"
          v-model="formData.number"
        />
        <p class="required-content"></p>
      </div>
      <Space width="2em" height="0" />
      <div class="container-input">
        <label class="label" for="complemento">Complemento</label>
        <input
          class="input"
          type="text"
          id="complemento"
          placeholder="Ex: apartamento 22"
          v-model="formData.complement"
        />
        <p class="required-content"></p>
      </div>
    </div>
    <h2 class="text-container">Informações de contato</h2>
    <div class="flex-columns">
      <div class="container-input">
        <label class="label" for="celular">Celular</label>
        <input
          class="input"
          type="text"
          id="celular"
          placeholder="(00) 00000-0000"
          v-model="formData.phone"
        />
        <p class="required-content"></p>
      </div>
      <Space width="2em" height="0" />
      <div class="container-input">
        <label class="label" for="email">E-mail</label>
        <input
          class="input"
          type="email"
          id="email"
          placeholder="Digite o email"
          v-model="formData.email"
        />
        <p class="required-content"></p>
      </div>
    </div>
    <div class="content-btn">
      <button @click="resetForm" type="button" class="btn btn-secondary">Cancelar</button>
      <button type="submit" class="btn btn-primary">Cadastrar</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import {
  genderOptions,
  ethnicityOptions,
  lgbtqiaOptions,
  biologicalSexOptions,
  FormErrors,
  PersonFormsData
} from '@/constants/index'
import Space from './common/Space.vue'
import ModalElement from './common/ModalElement.vue'
import ModalContent from './ModalContent.vue'

export default defineComponent({
  components: {
    Space,
    ModalElement,
    ModalContent
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
      show: false
    }
  },
  methods: {
    submitForm() {
      this.updateErrs()
      const hasErrors = Object.values(this.errs).some((err) => err)
      if (hasErrors) {
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
    },
    updateErrs() {
      this.errs.nameErr = this.formData.name.length === 0
      this.errs.neighborhoodErr = this.formData.neighborhood.length === 0
      this.errs.cpfErr = this.formData.cpf.length < 14
      this.errs.dateOfBirthErr = this.formData.birthDate.length === 0
      this.errs.addressErr = this.formData.address.length === 0
      this.errs.ethnicityErr = this.formData.ethnicity.length === 0
      this.errs.idErr = this.formData.id.length < 10
      this.errs.biologicalSexErr = this.formData.biologicalSex.length === 0
    }
  }
})
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 100%;
}
.title {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.5rem;
}

.text-container {
  font-size: 1.1rem;
  min-width: 100%;
  padding: 0.2em 0.5em;
  color: var(--text-white);
  background-color: var(--background-secondary);
  font-weight: 600;
  border-radius: 5px;
  margin: 1em 0;
}

.content-btn {
  display: flex;
  width: 100%;
  justify-content: end;
  margin-top: 0.5em;
  margin-bottom: 2.5em;
}

.icon-form {
  color: var(--text-primary);
  height: 1rem;
}

.content-margin {
  margin-top: 0.5em;
}
</style>
