import React from 'react'
import HeroText from './HeroText';
import LinkButtons from './LinkButtons';
import ScrollerCard from './ScrollerCard';
import Scroller from './Scroller';

const Hero = () => {
    return (
        <section className='w-full md:py-[170px] sm:py-[140px] max-sm:py-[140px]'>
            <HeroText />
            <br />
            <br />
            <LinkButtons />
            <br />
            <br />
            <Scroller>
                <ScrollerCard />
                <ScrollerCard />
                <ScrollerCard />
                <ScrollerCard />
                <ScrollerCard />
                <ScrollerCard />
            </Scroller>
            {/* Bottom spacing */}
            <div className="h-[200px]"></div>
        </section>
    )
}

export default Hero
