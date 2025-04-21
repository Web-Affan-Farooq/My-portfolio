export default {
    name: "projects",
    type: "document",
    title: "Projects",
    fields: [
        {
            name: "project_name",
            type: "string",
            title: "Project name",
            description: "Enter project name",
        },
        {
            name: "project_category",
            type: "string",
            title: "Project category",
            description: "Enter project category i.e Fullstack or Agentic AI",
        },
        
        {
            name: "project_link",
            type: "string",
            title: "Project link",
            description: "Enter project link",
        },
        {
            name: "project_github_link",
            type: "string",
            title: "Project github link",
            description: "Enter project github link",
        },
        {
            name: "project_description",
            type: "text",
            // of: [{ type: "block" }],
            title: "Project description",
            description: "Enter project description",
        },
        {
            name: "project_images",
            type: "array",
            of: [{ type: "image" }],
            title: "Project Images",
            description: "Select images",
        },
        {
            name: "project_tags",
            type: "array",
            title: "Project tags",
            description: "Select logo of technology and enter one word text",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "project_tech_image",
                            type: "image",
                            title: "Image",
                        },
                        {
                            name: "project_tech_text",
                            type: "string",
                            title: "Technology name",
                            description: "Short text about the tech (e.g., 'Typescript', 'React')",
                        }
                    ]
                }
            ]
        }
    ]
}
