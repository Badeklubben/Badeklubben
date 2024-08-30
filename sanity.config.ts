'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { markdownSchema } from "sanity-plugin-markdown";
import { iconPicker } from 'sanity-plugin-icon-picker';
import { simplerColorInput } from 'sanity-plugin-simpler-color-input'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    markdownSchema(),
    iconPicker(),
    simplerColorInput({
        // Note: These are all optional
        defaultColorFormat: 'rgba',
        defaultColorList: [
          { label: 'Red', value: '#E8557A' },
          { label: 'Orange', value: '#F7995C' },
          { label: 'Yellow', value: '#FFD24E' },
          { label: 'Blue', value: '#7AD1DF' },
          { label: 'Green', value: '#5AC7BD' },
        ],
        enableSearch: false,
      }),
  ],
})
