import React from 'react';

const Entries_card = () => {
    return (
        <div className='bg-glass p-4'>
            <h1 className='text-1xl font-semibold'>Entries On Hero Section:</h1>
            <br />
            <label htmlFor="Hero section title" id='hero-title' >Hero Section Title</label>
            <br />
            <br />
            <input type="text" name='heroTitle' id='hero-title' className='rounded-xl px-4 py-2 w-72 bg-black' placeholder='Hero Title' />
            <br />
            <br />
            <label htmlFor="Hero section content" id='hero-content' >Hero Section Content</label>
            <br />
            <br />
            <textarea name="heroContent" id="hero-content" className='rounded-xl px-4 py-2 bg-black w-full h-28' placeholder='Hero content'>
            </textarea>
            <br />
            <br />
            <h1 className='text-1xl font-semibold'>Entries On About me Section:</h1>
            <br />
            <label htmlFor="About me section content" id='about-content' >About Section Content</label>
            <br />
            <br />
            <textarea name="aboutContent" id="about-content" className='rounded-xl px-4 py-2 bg-black w-full h-28' placeholder='About content'></textarea>
            <br />
            <br />
            <h1 className='text-1xl font-semibold'>Entries On Projects Section:</h1>
            <br />
            <label htmlFor="Hero section title" id='hero-title'>Project Title</label>
            <br />
            <br />
            <input type="text" name='heroTitle' id='hero-title' className='rounded-xl px-4 py-2 w-72 bg-black' placeholder='Project title' />
            <br />
            <br />
            <label htmlFor="Hero section title" id='hero-title' >Project Link</label>
            <br />
            <br />
            <input type="text" name='heroTitle' id='hero-title' className='rounded-xl px-4 py-2 w-72 bg-black' placeholder='https://yourproject.com' />
            <br />
            <br />
            <label htmlFor="Hero section title" id='hero-title' >Project description (almost 10 words )</label>
            <br />
            <br />
            <input type="text" name='projectDescription' id='project-description' className='rounded-xl px-4 py-2 w-72 bg-black' placeholder='abcd efgh' />
            <br />
            <br />
            <label htmlFor="Hero section title" id='technologies-used' >Technologies Used:</label>
            <br />
            <br />
            <div className='flex flex-row  flex-wrap align-middle justify-center gap-10'>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> HTML</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> CSS</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> Javascript</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> Typescript</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> Tailwind CSS</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> Shadcn-UI</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> Canva</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> Figma</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> NextJS</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> ReactJS</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> NodeJS</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> ExpressJS</div>
                <div className='px-4 py-2 bg-glass rounded-xl'><input type="checkbox" name='html' id='html' value={"HTML"} /> Git</div>
            </div>
            <br />
            <br />
            <label htmlFor="Hero section title" id='technologies-used' >Upload Image: </label>
            <br />
            <br />
            <input type="file" className='bg-black text-white' />
            <br />
            <br />
            <br />
            <h1 className='text-1xl font-semibold'>Entries On About me Section:</h1>
            <br />
            <label htmlFor="Hero section title" id='technologies-used' >Achievements :</label>
            <br />
            <br />
            <input type="text" name='projectDescription' id='project-description' className='rounded-xl px-4 py-2 w-72 bg-black' placeholder='abcd efgh'/>
            <br />
            <br />
            <br />
            <h1 className='text-1xl font-semibold'>Entries On About me Section:</h1>
            <br />
            <label htmlFor="Hero section title" id='technologies-used' >Services :</label>
            <br />
            <br />
            <input type="text" name='projectDescription' id='project-description' className='rounded-xl px-4 py-2 w-72 bg-black' placeholder='Service title'/>
            <br />
            <br />
            <textarea name="heroContent" id="hero-content" className='rounded-xl px-4 py-2 bg-black w-full h-28' placeholder='Service Content'>
            </textarea>
            <br />
            <br />
            <h1 className='text-1xl font-semibold'>Entries On About me Section:</h1>
            <br />
            <label htmlFor="Hero section title" id='technologies-used' >On linked in :</label>
            <br />
            <br />
            <input type="number" name='projectDescription' id='project-description' className='rounded-xl px-4 py-2 w-72 bg-black' placeholder='eg. 200'/>  
            <br />
            <br />
            <label htmlFor="Hero section title" id='technologies-used' >Contributions:</label>
            <br />
            <br />
            <input type="number" name='projectDescription' id='project-description' className='rounded-xl px-4 py-2 w-72 bg-black' placeholder='eg. 200'/>  
            <br />
            <br />
            <label htmlFor="Hero section title" id='technologies-used' >Completed Projects:</label>
            <br />
            <br />
            <input type="number" name='projectDescription' id='project-description' className='rounded-xl px-4 py-2 w-72 bg-black' placeholder='eg. 200'/>  
        </div>
    )
}

export default Entries_card;