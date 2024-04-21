<script lang="ts">

  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SpaceComponent',
    props: {
      /**
       * A largura do espaço.
       * @type {string}
       * @default '2em'
       */
      width: { type: String, default: '2em' },
      /**
       * A altura do espaço.
       * @type {string}
       * @default '1em'
       */
      height: { type: String, default: '1em' },
    }
  });

</script>

<template>
  <span :style="{ width: width, height: height }"></span>
</template>