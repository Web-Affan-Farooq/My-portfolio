# Portfolio :

### Index :
- References
- Updates 
- To be implemented

## References :
#### Design reference :
- This portfolio is inspired by [This design](https://www.behance.net/gallery/199132655/Portfolio-Full-stack-Developer?tracking_source=search_projects|developer+portfolio&l=13) Designed by Taisia Tsyganok . See [Taisia Tsyganok on behance](https://www.behance.net/taisia_pro)

#### Tech stack :
This web app is using Jamstack architecture .

- Frontend : Typescript, TailwindCSS, React.JS
- Framework : Next.JS
- Backend : Sanity headless CMS

## API Docs :
Use this querry to fetch data . 
```sql
*[_type == "projects"]{
  _id,
  project_name,
  project_link,
  project_github_link,
  project_description,
  "project_images": project_images[].asset->url,
  "project_tags": project_tags[]{
    project_tech_text,
    "project_tech_image": project_tech_image.asset->url
  }
}

```
## To be implemented :
- Attach remaining animations with relevant libaries ie. gsap and framermotion
- Create components collection page
- Create showing tags functionalinty in projects section like github ()
- Create background images from figma 
- Edit the schema of sanity to be fit for this portfolio 
- Create animated projects showcase section OR implement 3d cylinder work showcase using threejs
- Create articles section that should e on the theme of same article section in home page
- Add a contact page to this design to be completed
- Attach custom created orbital skills rotate image from figma 
- Attach 3d icons if nessessary
- Create frontend first then integrate sanity
- Organize and maintain the categories in projects create projects details page 