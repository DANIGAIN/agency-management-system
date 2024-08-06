import Image from "next/image";
import Link from "next/link";

const HomeC3 = () => {

    return (
        <>
            <div
               className="relative bg-gray dark:bg-graydark pt-[120px] pb-[110px] lg:pt-[150px z-1"
            >
                <div className="container mx-3 sm:mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark  sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                   we are solve existing 
                                   bug for app.
                                    <br />
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base text-body-color ">
                                 At Coderhub, we specialize in solving existing bugs and issues in your software, application, or system. Our team of experienced developers and QA engineers are dedicated to providing efficient and effective solutions to get your project back on track.
                                </p>
                                <ul className="flex flex-wrap items-center space-x-2">
                                    <li>
                                        <Link
                                            href={"/about"}
                                            className="inline-flex items-center border justify-center px-6 py-3 text-base font-medium text-center text-white hover:text-primary rounded-md bg-primary hover:bg-transparent hover:border-primary lg:px-7"
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li className="hidden sm:block">
                                        <p
                                            className="inline-flex items-start justify-start px-5 text-center text-base font-medium text-[#464646]"
                                        >
    
                                             Need Any Help
                                        </p>
                                    </li>
                                    <li>
                                        <Link
                                            href={"/contact"}
                                            className="inline-flex items-center justify-center text-lg text-center  font-medium text-black dark:text-stone-400 hover:text-primary"
                                        >
                                           Contact Us
                                        </Link>
                                    </li>
                                </ul>
                                <div className="clients pt-16">
                                    <h6 className="flex items-center mb-6 text-md font-normal text-body-color ">
                                        Some Of Our Clients
                                        <span className="inline-block w-8 h-px ml-3 bg-body-color" />
                                    </h6>
                                    <div className="flex items-center">
                                        <div className="block py-3 mr-4">
                                            <Image src={"/images/client1.webp"} height={150} width={150} alt="oracle" />
                                        </div>
                                        <div className="block py-3 mr-4">
                                            <Image src={"/images/client2.webp"} height={150} width={150} alt="intel" />
                                        </div>
                                        <div className="block py-3">
                                            <img src={"/images/client3.webp"} height={150} width={150} alt="logitech" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12" />
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <Image
                                        src={"/images/custom.svg"}
                                        height={400} 
                                        width={400} 
                                        alt="hero"
                                        className="my-40 max-w-full lg:ml-auto  rounded-[10px] rounded-tl-[150px]  hidden lg:block"
                                    />
                                    <span className="absolute -left-8 -bottom-8 z-[-1]">
                                        <svg
                                            width={93}
                                            height={93}
                                            viewBox="0 0 93 93"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                            <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default HomeC3;