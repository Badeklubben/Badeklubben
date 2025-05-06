import {defineType} from 'sanity'

export default defineType({
  title: 'Information',
  name: 'information',
  type: 'document',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
  ],
})
