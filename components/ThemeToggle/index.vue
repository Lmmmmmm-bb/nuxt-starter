<script setup lang="ts">
const colorMode = useColorMode();

const isDarkMode = computed(() => colorMode.value === 'dark');

useHead({
  meta: [
    {
      name: 'theme-color',
      content: () => isDarkMode.value ? '#222' : '#fff',
    },
  ],
});

const toggleDark = async (e: MouseEvent) => {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isAppearanceTransition) {
    colorMode.preference = isDarkMode.value ? 'light' : 'dark';
    return;
  }

  const [x, y] = [e.clientX, e.clientY];
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    colorMode.preference = isDarkMode.value ? 'light' : 'dark';
    await nextTick();
  });
  await transition.ready;
  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${endRadius}px at ${x}px ${y}px)`,
  ];
  document.documentElement.animate(
    { clipPath },
    {
      duration: 400,
      easing: 'ease-out',
      pseudoElement: '::view-transition-new(root)',
    },
  );
};
</script>

<template>
  <ClientOnly>
    <button @click="toggleDark">
      <Icon :name="isDarkMode ? 'carbon:moon' : 'carbon:sun'" />
    </button>
  </ClientOnly>
</template>
