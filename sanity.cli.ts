// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'your-project-id',
    dataset: 'your-dataset',
  },
  typegen: {
    // Look in your existing sanity folder for queries
    path: './sanity/**/*.ts', 
    // Use the extract.json we just made
    schema: './sanity/extract.json',
    // Put the types inside your actual sanity folder
    generates: './sanity/sanity.types.ts',
  },
})