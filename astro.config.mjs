import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import qwikdev from "@qwikdev/astro";
import vue from "@astrojs/vue";
import swup from '@swup/astro';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS(),vue({}), qwikdev(), solidJs()]
});