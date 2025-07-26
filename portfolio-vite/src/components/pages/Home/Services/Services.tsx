// import { CircleCheck } from "lucide-react"

const ServicesData = [
  {
    name: "Frontend Development",
    specs: ["I build Responsive frontend with React Or HTML CSS and Typescript .", "Styled with TailwindCSS", "Basic Animations", "Deployment setup on Vercel OR Netlify (without domain)"]
  },
  {
    name: "AI integration",
    specs: ["Gemini , OpenAI , or any other provider's API integration on the existing frontend OR Backend",
      "Separate microservice development (optional)"
    ]
  },
  {
    name: "Chatbot development",
    specs: ["Chatbot development using Chainlit OR React OR Next.JS",]
  },
  {
    name: "Fullstack development",
    specs: ["Full stack application build with Next.JS", "Styled with TailwindCSS or any library ", "Animated with GSAP , Scrolltrigger , Lenis and Locomotive.JS (on demand)", "External databases OR Headless CMS (Database keys required)"]
  },
  {
    name: "Jamstack development",
    specs: ["Next.JS app", "Integrated Sanity (Headless CMS)", "Stripe payments integration", "Authentication setup (custom and third party)", "Google Analytics setup and deployment on Vercel OR Netlify (without domain)", "AI integration (Keys required)"]
  }

]
const Services = () => {
  return (
    <div className="text-white">
      <div className="2xl:w-[85vw] 2xl:px-20 xl:w-[85vw] lg:w-[85vw] md:w-[85vw] sm:w-[85vw] mx-auto">
        <h1 className='px-5 m-auto text-white-custom text-left w-full font-firacode font-bold 
                    2xl:text-[110px]
                    xl:text-[100px]
                    lg:text-[80px] 
                    md:text-[57px]
                    sm:text-[40px]
                    max-sm:text-[30px]'>
          Services
        </h1>
      </div>
      <br />

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 max-sm:p-2">
        {ServicesData.map((services, index) => (
          <div key={index} className="group w-full py-4 px-7 max-sm:px-5 rounded-lg bg-custom transition-all duration-200">
            {/* <div> */}
              <h2 className="group-hover:text-white my-4 text-xl font-firacode font-semibold text-[#e3cb8f]">{services.name}</h2>
              <p className="text-sm text-gray-500">{services.specs.join(" , ")}</p>
            {/* </div> */}
          </div>
        ))}
      </div>

      <div className="h-[100px]"></div>
    </div>
  )
}

export default Services

// <div
//   key={index}
//   className="bg-white/5 rounded-2xl shadow-xl p-6 hover:shadow-2xl hover:border-[#e3cb8f] transition-all duration-300 ease-in-out"
// >
//   <h1 className="text-xl font-semibold text-white mb-2 font-firacode">{services.name}</h1>
//   <h2 className="text-[#e3cb8f] mb-4">What’s included:</h2>
//   <ul className="space-y-2">
//     {services.specs.map((spec, i) => (
//       <li
//         key={i}
//         className="flex items-start gap-3 text-sm text-white leading-relaxed"
//       >
//         <CircleCheck className="stroke-green-400 shrink-0 mt-1" size={18} />
//         <span>{spec}</span>
//       </li>
//     ))}
//   </ul>
// </div>