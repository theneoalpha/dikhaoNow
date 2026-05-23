import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'
import { env } from './src/config/env'

export default defineConfig({
  name: 'default',
  title: 'Local Business Studio',

  projectId: env.sanity.projectId,
  dataset: env.sanity.dataset,

  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
