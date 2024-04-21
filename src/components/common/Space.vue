<script lang="ts">
    export default {
    props: {
        width: { type: String, default: '2em' }, 
        height: { type: String, default: '1em' },
    }
    }
</script>

<template>
  <span :style="{ width: width, height: height }"></span>
</template>