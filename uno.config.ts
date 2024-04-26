import { defineConfig, presetAttributify, presetTypography, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno({
      attributifyPseudo: true,
      // prefix: 'zgg-',
    }),
    presetAttributify(),
    // @see https://unocss.dev/presets/icons#autoinstall
    presetTypography(),
    // presetWebFonts({
    //   provider: 'none',
    //   fonts: {
    //     script: 'Homemade Apple',
    //   },
    // }),
  ],
});
