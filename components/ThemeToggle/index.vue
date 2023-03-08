<script setup>
const colorMode = useColorMode();

const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <button @click="toggleDark">
    <Icon :name="colorMode.value === 'dark' ? 'carbon:moon' : 'carbon:sun'" />
  </button>
</template>
