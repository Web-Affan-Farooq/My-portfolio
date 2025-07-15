
interface Card {
    years: string;
    time: string;
    company: string;
    role: string;
}

const ExperienceRows = ({ years, time, company, role }: Card) => {
    return (
        <div className='bg-black-custom hover:bg-white-custom text-white-custom hover:text-black-custom shadow-md shadow-gray-800 border border-gray-700
    transition-all duration-200 ease-in-out
    px-[20px] py-[30px] w-full
    flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[20px]'>

            {/* Left Column (Years and Time) */}
            <div className='w-full sm:w-[300px] md:w-[300px] lg:w-[400px] xl:w-[450px] 2xl:w-[450px]
        flex flex-col justify-start items-start'>
                <span className='text-[28px]'>{years}</span>
                <span className='text-light-gray text-[15px]'>{time}</span>
            </div>

            {/* Right Column (Company and Role) */}
            <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-[10px] sm:gap-[50px]'>
                <span className='text-[20px]'>{company}</span>
                <span className='font-firacode'>{role}</span>
            </div>
        </div>
    )
}

export default ExperienceRows
