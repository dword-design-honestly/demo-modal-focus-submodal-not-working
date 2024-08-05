import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import components from 'unplugin-vue-components/vite';
import { BootstrapVueNextResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig(async () => ({
  plugins: [
    vue({
      template: {
        // Do not resolve global images in <img> tags from /images.
        // It would be nice to have a cleaner solution to tell Vite that
        // this folder comes from somewhere else.
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
    components({
      dirs: [],
      //directoryAsNamespace: true,
      resolvers: [BootstrapVueNextResolver()],
    }),
  ],
}));
