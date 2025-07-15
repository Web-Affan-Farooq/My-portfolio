import HeroText from './HeroText';
import LinkButtons from './LinkButtons';

const Hero = () => {
    return (
        <section className='w-full md:pt-[170px] sm:pt-[140px] max-sm:pt-[140px]'>
            <HeroText />
            <br />
            <br />
            <LinkButtons />
            {/* Bottom spacing */}
            <div className="h-[150px]"></div>
        </section>
    )
}

export default Hero
