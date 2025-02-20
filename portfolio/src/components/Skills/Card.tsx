/* Important lessons:  */

// The onmouseup event occurs when a mouse button is released over an element.
// The onmousedown event occurs when a mouse button is pressed over an element. similar to click event
// The onmousemove event occurs when a mouse hover over an element . 

import React from 'react'
import Image from 'next/image'

const Card = ({skillText, image, name}: {skillText:string; image:string; name:string}) => {
    return (
        <div className=" bg-glass backdrop-blur-2xl bg-opacity-100 flex flex-row flex-nowrap justify-start items-center gap-3 px-[10px] py-[6px] w-[150px] max-sm:w-[150px] rounded-md" draggable={true}>
            <Image src={image} alt={name} width={25} height={25} />
            <span className="text-link font-bold ">{skillText}</span>
        </div>
    )
}

export default Card
