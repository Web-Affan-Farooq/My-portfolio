// export default {
//   name: 'projects',
//   type: 'document',
//   title: 'Projects',
//   fields: [
//     {
//       name: 'project_name',
//       type: 'string',
//       title: 'Project name',
//       description: 'Enter project name',
//     },
//     {
//       name: 'project_category',
//       type: 'string',
//       title: 'Project category',
//       description: 'Enter project category i.e Fullstack or Agentic AI',
//     },
//     {
//       name: 'project_link',
//       type: 'string',
//       title: 'Project link',
//       description: 'Enter project link',
//     },
//     {
//       name: 'project_github_link',
//       type: 'string',
//       title: 'Project github link',
//       description: 'Enter project github link',
//     },
//     {
//       name: 'project_description',
//       type: 'text',
//       title: 'Project description',
//       description: 'Enter project description',
//     },
//     {
//       name: 'project_casestudy',
//       type: 'array',
//       title: 'Project case study',
//       description: 'Write case study in rich text with images',
//       of: [
//         {
//           type: 'block',
//           styles: [
//             { title: 'Normal', value: 'normal' },
//             { title: 'Heading 1', value: 'h1' },
//             { title: 'Heading 2', value: 'h2' },
//             { title: 'Quote', value: 'blockquote' },
//           ],
//           lists: [
//             { title: 'Bullet', value: 'bullet' },
//             { title: 'Numbered', value: 'number' },
//           ],
//           marks: {
//             decorators: [
//               { title: 'Strong', value: 'strong' },
//               { title: 'Emphasis', value: 'em' },
//               { title: 'Underline', value: 'underline' },
//             ],
//             annotations: [
//               {
//                 name: 'link',
//                 type: 'object',
//                 title: 'Link',
//                 fields: [
//                   {
//                     name: 'href',
//                     type: 'url',
//                     title: 'URL',
//                   },
//                 ],
//               },
//             ],
//           },
//         },
//         {
//           type: 'image',
//           options: { hotspot: true },
//           fields: [
//             {
//               name: 'alt',
//               type: 'string',
//               title: 'Alt text',
//               description: 'For accessibility and SEO',
//             },
//             {
//               name: 'caption',
//               type: 'string',
//               title: 'Caption',
//               description: 'Optional caption below the image',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'project_images',
//       type: 'array',
//       of: [{ type: 'image' }],
//       title: 'Project Images',
//       description: 'Select images',
//     },
//     {
//       name: 'project_tags',
//       type: 'array',
//       title: 'Project tags',
//       description: 'Select logo of technology and enter one word text',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             {
//               name: 'project_tech_image',
//               type: 'image',
//               title: 'Image',
//             },
//             {
//               name: 'project_tech_text',
//               type: 'string',
//               title: 'Technology name',
//               description:
//                 "Short text about the tech (e.g., 'Typescript', 'React')",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'project_name',
      type: 'string',
      title: 'Project name',
      description: 'Enter project name',
    },
    {
      name: 'project_category',
      type: 'string',
      title: 'Project category',
      description: 'Enter project category i.e Fullstack or Agentic AI',
    },
    {
      name: 'project_link',
      type: 'string',
      title: 'Project link',
      description: 'Enter project link',
    },
    {
      name: 'project_github_link',
      type: 'string',
      title: 'Project github link',
      description: 'Enter project github link',
    },
    {
      name: 'project_description',
      type: 'text',
      // of: [{ type: "block" }],
      title: 'Project description',
      description: 'Enter project description',
    },
    {
      name: 'project_casestudy',
      type: 'text',
      title: 'Project case study in markdown format',
      description: 'Enter project description',
      defaultValue: '',
    },
    {
      name: 'project_images',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Project Images',
      description: 'Select images',
    },
    {
      name: 'project_tags',
      type: 'array',
      title: 'Project tags',
      description: 'Select logo of technology and enter one word text',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'project_tech_image',
              type: 'image',
              title: 'Image',
            },
            {
              name: 'project_tech_text',
              type: 'string',
              title: 'Technology name',
              description: "Short text about the tech (e.g., 'Typescript', 'React')",
            },
          ],
        },
      ],
    },
  ],
}
