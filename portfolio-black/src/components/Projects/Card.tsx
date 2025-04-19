import Image from "next/image";
import Link from "next/link";

const Project_card = () => {
    return (
        <Link href={"/"}>
            <div className="group p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col gap-7 cursor-pointer">
                <div className="overflow-hidden rounded-xl">
                    <Image
                        src="/images/example-project.png"
                        alt="project"
                        width={400}
                        height={250}
                        className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className='flex flex-col flex-nowrap justify-start items-start gap-2'>
                    <h1 className="text-2xl font-firacode font-bold text-white transition-colors duration-300">
                        Exadfksdl;fkds fldsk fksdl;f dl;sfk ld;skfl;sdkl; l;kl; l; kmple Project Title
                    </h1>
                    <p className="text-gray-300 mt-2">
                        This is an example project description that briefly explains the project purpose and features.
                    </p>
                </div>
            </div>
        </Link>
    );
};
export default Project_card;