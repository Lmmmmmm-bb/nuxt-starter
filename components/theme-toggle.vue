<script setup>
const colorMode = useColorMode();

const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};

const icon = computed(() => colorMode.value === 'dark' ? 'carbon:moon' : 'carbon:sun');
</script>

<template>
  <button @click="toggleDark">
    <Icon :name="icon" />
  </button>
</template>
