<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputContainer',
  props: {
    id: String,
    label: String,
    requireInput: {
      type: Boolean,
      default: false
    },
    requireMsg: {
      type: String,
      default: 'Preenchimento obrigatório'
    },
    err: {
      type: Boolean,
      default: false
    },
    nameIcon:  {
      type: String,
      default: undefined
    },
  }
})
</script>

<template>
  <div class="container-input">
    <label class="label" :for="id">
        {{ label }} <v-icon class="icon-form" :name="nameIcon"/>
    </label>
    <slot></slot>
    <p :class="err ? 'required-content-error' : 'required-content'">
      {{ requireInput ? requireMsg : '' }}
    </p>
  </div>
</template>
