import React from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const Contact = () => {
    return (
        <div className="bg-desktop bg-no-repeat bg-center bg-cover max-md:bg-mobile w-full h-auto">
            <Header />
            <main>
                <article>
                    <section className="py-[80px]" id="section-1">
                        <form action="https://lustrous-tartufo-ede2bc.netlify.app/views/submit.html" className='w-auto h-auto p-[100px] flex flex-col gap-[30px] items-center text-white'>
                            <h1 className='text-4xl text-nowrap font-bold'>Contact <span className="text-primary">me</span></h1>
                            <label htmlFor="Enter your name" id='name'>
                                <input type="text" name="clien_name" id="name" placeholder="Enter your name" required className='border-b-[1px] border-solid border-link w-[300px] h-[30px] p-[20px] bg-transparent' />
                            </label>
                            <label htmlFor="Enter Email">
                                <input type="text" name="clien name" id="name" placeholder="Enter Email" required className='border-b-[1px] border-solid border-link w-[300px] h-[30px] p-[20px] bg-transparent' />
                            </label>
                            <label htmlFor="Project name">
                                <input type="text" name="Project name" id="name" placeholder="Enter project name" required className='border-b-[1px] border-solid border-link w-[300px] h-[30px] p-[20px] bg-transparent' />
                            </label>
                            <label htmlFor="Enter time perioud for completion of your project">
                                <input type="text" name="time" id="name" placeholder="Enter time for delivery" required className='border-b-[1px] border-solid border-link w-[300px] h-[30px] p-[20px] bg-transparent' />
                            </label>
                            <label htmlFor="Enter your linked in Id link">
                                <input type="text" name="linked in" id="name" placeholder="Link to your linked in id" required className='border-b-[1px] border-solid border-link w-[300px] h-[30px] p-[20px] bg-transparent' />
                            </label>
                            <label htmlFor="Enter a brief description of your project">
                                <textarea name="description" placeholder="Enter brief description of your project" required className='border-b-[1px] border-solid border-link w-[300px] h-[150px] p-[20px] bg-transparent'></textarea>
                            </label>
                            <button type='submit' className='border-solid border-primary border-[0.5px] py-2 font-bold rounded-lg px-5 transition-0.3 hover:bg-primary hover:text-white text-primary'>Submit</button>                        </form>
                    </section>
                </article>
            </main>
            <Footer />
        </div>
    )
}

export default Contact;