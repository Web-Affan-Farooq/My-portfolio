import React from 'react';
import Form_Card from './Form-Card';

const Form = () => {
    return (
        <div className='bg-black h-screen'>
            {/* <Navbar /> */}
            <section className='text-white p-6'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className='text-white text-2xl font-bold'>Form Submissions</h1>
                <br />
                <div className='bg-glass rounded-xl p-5 flex flex-col flex-wrap gap-4 align-middle'>
                <Form_Card/>
                <Form_Card/>
                <Form_Card/>
                </div>
            </section>
        </div>
    )
}

export default Form