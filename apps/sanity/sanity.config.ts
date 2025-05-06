import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure as structure} from './src/desk-structure'
import {media} from 'sanity-plugin-media'
import {markdownSchema} from 'sanity-plugin-markdown'
import {iconPicker} from 'sanity-plugin-icon-picker'
import {simplerColorInput} from 'sanity-plugin-simpler-color-input'

export default defineConfig({
  name: 'default',
  title: 'Badeklubben-sanity',

  projectId: 'hnv33dlf',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
    media(),
    markdownSchema(),
    iconPicker(),
    simplerColorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
