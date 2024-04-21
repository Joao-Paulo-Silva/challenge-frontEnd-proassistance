<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ModalElement',
    props: {
      show: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      closeModal() {
        this.$emit('close')
      }
    }
  })
</script>

<template>
  <div v-if="show">
    <div class="modal">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style>
  .modal {
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: hsla(0, 2%, 24%, 0.369);
    backdrop-filter: blur(2px);
  }
  .modal-content {
    background-color: #fff;
    border-radius: 10px;
    min-width: 40vw;
    min-height: 200px;
    padding: 1em;
  }
</style>
