import {defineType} from 'sanity'

export default defineType({
  title: 'Members',
  name: 'members',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      title: 'Id',
      name: 'id',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      title: 'Role',
      name: 'role',
      type: 'string',
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
    {
      title: 'About',
      name: 'about',
      type: 'text',
      validation: (rule) => rule.max(216),
    },
    {
      title: 'Image',
      name: 'imageURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Curriculum Vitae',
      type: 'markdown',
      name: 'cv',
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'url',
    },
    {
      title: 'Mail',
      name: 'mail',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['mailto'],
        }),
    },
  ],
})
