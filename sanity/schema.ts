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
          type: "string"
        },
        {
          title: "Id",
          name: "id",
          type: "string"
        },
        {
          title: "Role",
          name: "role",
          type: "string"
        },
        {
          title: "LandscapeID",
          name: "landscapeid",
          type: "number",
          initialValue: 1,
          validation: (rule) => rule.min(1).max(5)
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
    }  
  ],
}
