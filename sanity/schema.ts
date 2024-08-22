import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      title: "Members",
      name: "members",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          title: "Id",
          name: "id",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          title: "Role",
          name: "role",
          type: "string"
        },
        {
            title: "Icon",
            name: "icon",
            type: "iconPicker",
            options: {
                storeSvg: true
            }
        },
        {
            name: 'color',
            title: 'color',
            type: 'simplerColor',
        },
        {
          title: "About",
          name: "about",
          type: "text",
          validation: (rule) => rule.max(216)
        },
        {
          title: "Image",
          name: "imageURL",
          type: "image",
          options: {
            hotspot: true
          },
        },
        {
            title:"Curriculum Vitae",
            type: "markdown",
            name: "cv"
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
            validation: Rule => Rule.uri({
              scheme: ['mailto']
            })
        }

      ]
    },
    {
      title: "Information",
      name: "information",
      type: "document",
      fields: [
        {
          title: "Text",
          name: "text",
          type: "text",
        }
      ]
    },
    {
        title: "Projects",
        name: "projects",
        type: "document",
        fields: [    
            {
                title: "Name",
                name: "name",
                type: "string",
                validation: (rule) => rule.required(),
            },
            {
                title: "Description",
                name: "description",
                type: "text",
                validation: (rule) => rule.max(216)
            }, 
            {
                title: 'Project ID',
                description: 'This field must match the folder name of the project!',
                name: 'id',
                type: 'string',
                validation: (rule) => rule.required(),
            },
            {
                title: 'Owner',
                name: 'owner',
                type: 'reference',
                to: [{type: 'members'}],
                validation: (rule) => rule.required(),
            },
            {
                title: "Icon",
                name: "icon",
                type: "iconPicker",
                options: {
                    storeSvg: true
                }
            },
            {
                name: 'color',
                title: 'color',
                type: 'simplerColor',
            },
        ]
    }
  ],
}
