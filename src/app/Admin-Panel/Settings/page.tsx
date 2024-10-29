"use client";

import React, { useState } from 'react';

const Settings = () => {
    const [display, setdisplay] = useState(<p className='text-[15px]'>Dark theme</p>);
    const [displayStatus, setdisplayStatus] = useState(false);

    const handleTheme = () => {
        setdisplayStatus(!displayStatus);
        if(displayStatus) {
            setdisplay(<p className='text-[15px] text-link'>Light theme</p>)
        }else {
            setdisplay(<p className='text-[15px]'>Dark theme</p>);
        }
    }

    return (
        <div className='text-white bg-black h-screen p-3'>
            <br /><br /><br /><br /><br />
            <h1 className='text-white text-2xl font-bold'>Settings :</h1>
            <br />
            <div className='bg-glass p-4 rounded-lg'>
                <h2 className='text-1xl font-bold'>Display</h2>
                <br />
                <div className='flex flex-row flex-wrap gap-5'>
                {display}
                <div className='rounded-2xl bg-glass w-14' onClick={handleTheme}><div className={`rounded-full bg-link w-6 h-full relative transition-0.3 ${displayStatus? "left-8": "left-0"}`}></div></div>
                </div>
            </div>
        </div>
    )
}

export default Settings;