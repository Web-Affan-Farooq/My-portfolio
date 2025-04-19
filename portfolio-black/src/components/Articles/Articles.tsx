import React from 'react'
import Card from './Card'

const Articles = () => {
    return (
        <section className="w-full h-auto px-4 md:px-10 lg:px-20 py-10 overflow-hidden">
            {/* Title */}
            <h1 className="text-white-custom font-firacode font-semibold text-right text-[50px] sm:text-[77px] lg:text-[100px] xl:text-[120px] 2xl:text-[130px]">
                Articles
            </h1>

            <div className="border-t-2 border-light-gray mt-10 pt-10 flex gap-8">

                {/* Pagination (Vertical) */}
                <div className="flex flex-col gap-4 items-center">
                    {[1, 2, 3].map(num => (
                        <button key={num} className="w-10 h-10 rounded-full border-2 border-white text-white-custom hover:bg-white-custom hover:text-black-custom transition-all duration-200 flex items-center justify-center">
                            {num}
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6 w-full">
                    <Card title='The simplest example is kafka + golang ' headline='This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.' id='1' />
                    <Card title='The simplest example is kafka + golang ' headline='This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.' id='1' />
                    <Card title='The simplest example is kafka + golang ' headline='This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.' id='1' />
                    <Card title='The simplest example is kafka + golang ' headline='This article presents a simple way to implement a micro-service architecture using Kafka, Golang and Docker.' id='1' />
                </div>
            </div>

            {/* Bottom spacing */}
            <div className="h-[200px]"></div>
        </section>
    )
}

export default Articles
