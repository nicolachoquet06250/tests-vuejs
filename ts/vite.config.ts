import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import vue from '@vitejs/plugin-vue'
import { transformShortVmodel } from '@vue-macros/short-vmodel'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: vue({
          template: {
            compilerOptions: {
              nodeTransforms: [
                transformShortVmodel({
                  prefix: '$',
                }),
              ]
            }
          }
        }),
        defineModels: {},
      },
    }),
  ],
})
