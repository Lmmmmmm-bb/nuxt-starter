import {
  presetUno,
  defineConfig,
  presetWebFonts,
  presetTypography,
  presetAttributify
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        serif: 'Varela Round',
        chinese: 'Noto Sans Simplified Chinese',
        display: 'Baloo 2',
        mono: 'DM Mono'
      }
    })
  ]
});
