// import React from 'react';
// import Link from 'next/link';
// import "./style.css";

// const Feed = () => {
//   return (
//     <section className='py-10'>
//       <h1 className='text-4xl font-bold text-center text-white'>Feeds and <span className='text-primary'>achievements</span></h1>
//       <br />
//       <br />
//       <div className="ach-container w-full m-auto overflow-x-auto whitespace-nowrap flex flex-row gap-10 flex-nowrap align-middle">
//         <Link href={'https://landing-30-days-coding-nextjs-challenge.vercel.app/'}>
//           <div className="whitespace-normal w-[300px] p-5 box-border rounded-lg bg-glass flex-shrink-0 m-auto bg-opacity-10 backdrop-blur-3xl">
//             <h1 className='text-1xl font-bold text-link'>🚀 30 Days Nextjs Coding Challenge</h1>
//           </div></Link>
//         <div className="whitespace-normal w-[300px] p-5 box-border rounded-lg bg-glass flex-shrink-0 bg-opacity-10 backdrop-blur-3xl">
//           <h1 className='text-1xl font-bold text-link'>🚀 TypeScript 100 Days Coding Challenge</h1>
//         </div>
//         <div className="whitespace-normal w-[300px] p-5 box-border rounded-lg bg-glass flex-shrink-0 bg-opacity-10 backdrop-blur-3xl">
//           <h1 className='text-1xl font-bold text-link'>🚀 Hackathon: Resume Builder Project</h1>
//         </div>
//       </div>
//       <br />
//       <br />
//     </section>
//   )
// }

// export default Feed;
import React from 'react';
import Link from 'next/link';
import "./style.css"

const Feed = () => {
  return (
    <section className='py-10'>
      <h1 className='text-4xl font-bold text-center text-white'> Feeds and <span className='text-primary'>Achievements</span></h1>
      <br /><br />
      <div className='ach-container w-full m-auto overflow-x-auto whitespace-nowrap flex flex-row flex-nowrap align-middle gap-10'>
        <Link href={'https://landing-30-days-coding-nextjs-challenge.vercel.app/'}>
        <div className='whitespace-normal w-[300px] p-5 box-border rounded-lg bg-glass flex-shrink-0 bg-opacity-10 backdrop-blur-3xl'>
          <h1 className='text-1xl font-bold text-link'>🚀 30 Days Nextjs Coding Challenge</h1>
        </div>
        </Link>
        <Link href={'https://landing-30-days-coding-nextjs-challenge.vercel.app/'}>
        <div className='whitespace-normal w-[300px] p-5 box-border rounded-lg bg-glass flex-shrink-0 bg-opacity-10 backdrop-blur-3xl'>
          <h1 className='text-1xl font-bold text-link'>🚀 Hackathon Project</h1>
        </div>
        </Link>
      </div>
       <br />
       <br />
    </section>
  )
}

export default Feed


