import React from 'react';
import Image from 'next/image';
import Markdown from 'react-markdown';

export default async function BlogPage(){

  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-16 py-[100px] font-opensans">
            <h1 className="py-10 text-white-custom font-firacode font-semibold text-left text-[50px] sm:text-[60px] lg:text-[60px] xl:text-[60px] 2xl:text-[60px]">
              This is exmaple title iufioudfiodsu fiodusifo udsiofudiosufiodsufioudsiofuif idsufids fidufi dsifudis fi
            </h1>            {/* Summary */}
      <p className="text-gray-400 text-lg md:text-xl text-left max-w-4xl font-opensans">
        This is example short summary diufjuiodsf iosdf iosduf iodsuf iosdf niosdfoisudfio doifusio dfuiod fio
      </p>

      <br />
      <div className="w-full h-[300px] md:h-[450px] relative rounded-xl overflow-hidden mb-10">
        <Image
          src={"/images/example-blog-banner.jpeg"}
          alt={"example blog"}
          fill
          className="object-cover"
          priority
        />
      </div>


      {/* Blog Body */}
      <article className="prose prose-invert max-w-3xl mx-auto font-firacode prose-pre:bg-black prose-pre:text-white prose-code:text-sm prose-code:font-firacode prose-p:font-opensans prose-li:font-opensans">
        <Markdown>
          dfdfkljds kfjd skfjdkls fklds jfkdsj fkldjslkfjdskfjkldsj fkl dsjfkljdksjf Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus exercitationem voluptatum ea impedit animi cumque distinctio quasi laudantium nesciunt, amet libero cum sint eius maiores cupiditate similique voluptas blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non unde repellendus id, corporis sequi aliquam explicabo quo harum, odio minus eaque. Nostrum voluptate nihil beatae libero, molestiae veniam dolore.
          Veritatis fugiat quod beatae? Aspernatur illum iste provident animi et repudiandae esse error, rem assumenda pariatur autem nam aliquid nisi earum natus sapiente, obcaecati facere accusamus magni, odio in at.
          Magnam, sed! Ratione quam repellat sunt! Quam eum quidem corporis incidunt quae, aliquid saepe. Animi, autem veniam recusandae tenetur ipsam voluptates quod nihil molestiae sed eveniet id perspiciatis consectetur nisi.
          Recusandae doloremque consequuntur ex sapiente ab nulla ipsum vero ullam ipsam labore. Blanditiis dolore quae labore alias non? Illum impedit cum fuga a natus, laborum accusantium delectus architecto libero dignissimos!
          Recusandae doloremque consequuntur ex sapiente ab nulla ipsum vero ullam ipsam labore. Blanditiis dolore quae labore alias non? Illum impedit cum fuga a natus, laborum accusantium delectus architecto libero dignissimos!
          Recusandae doloremque consequuntur ex sapiente ab nulla ipsum vero ullam ipsam labore. Blanditiis dolore quae labore alias non? Illum impedit cum fuga a natus, laborum accusantium delectus architecto libero dignissimos!
          Recusandae doloremque consequuntur ex sapiente ab nulla ipsum vero ullam ipsam labore. Blanditiis dolore quae labore alias non? Illum impedit cum fuga a natus, laborum accusantium delectus architecto libero dignissimos!
          Recusandae doloremque consequuntur ex sapiente ab nulla ipsum vero ullam ipsam labore. Blanditiis dolore quae labore alias non? Illum impedit cum fuga a natus, laborum accusantium delectus architecto libero dignissimos!
          Recusandae doloremque consequuntur ex sapiente ab nulla ipsum vero ullam ipsam labore. Blanditiis dolore quae labore alias non? Illum impedit cum fuga a natus, laborum accusantium delectus architecto libero dignissimos!


        </Markdown>
        </article>
        </main>
  )
}