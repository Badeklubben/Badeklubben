import {defineType} from 'sanity'

export default defineType({
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (rule) => rule.max(216),
    },
    {
      title: 'Project Link',
      description: 'This must be a valid URL pointing to the project folder or site.',
      name: 'link',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      title: 'Owner',
      name: 'owner',
      type: 'reference',
      to: [{type: 'members'}],
      validation: (rule) => rule.required(),
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'iconPicker',
      options: {
        storeSvg: true,
      },
    },
    {
      name: 'color',
      title: 'color',
      type: 'simplerColor',
    },
  ],
})
