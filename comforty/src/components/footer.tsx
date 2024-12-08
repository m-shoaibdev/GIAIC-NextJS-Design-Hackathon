import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logos/Logo.png";
import paymentlogo from "@/public/payGroup.png";

export default function Footer() {
    return (
        <>
        <footer className="pt-16 pb-12 mt-20  border-t border-b border-gray-200">
            <div className="lg:container lg:mx-auto px-4 lg:px-0 text-sm md:text-base">
                <div className="flex flex-col sm:flex-row gap-10 sm:gap-4 lg:gap-12">
                    <div className="flex flex-col gap-2 md:gap-6 md:mr-6 lg:mr-10 md:w-[340px]">
                        <Image src={Logo} alt="logo" />
                        <p className="text-mediumGray text-base">Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus </p>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-3 md:mr-10">
                        <h3 className="text-mediumGray text-sm uppercase font-medium tracking-wide mb-1.5">Category</h3>
                        <Link className="hover:text-primary" href="#">
                        Sofa
                        </Link>
                        <Link className="hover:text-primary" href="#">
                        Armchair
                        </Link>
                        <Link className="hover:text-primary" href="#">
                        Wing Chair
                        </Link>
                        <Link className="text-primary" href="#">
                        Desk Chair
                        </Link>
                        <Link className="hover:text-primary" href="#">
                        wooden Chair
                        </Link>
                        <Link className="hover:text-primary" href="#">
                        Park Bench
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-3 mr-3">
                        <h3 className="text-mediumGray text-sm uppercase font-medium tracking-wide mb-1.5">Support</h3>
                        <Link className="hover:text-primary" href="#">
                        Help & Support
                        </Link>
                        <Link className="hover:text-primary" href="#">
                        Tearms & Conditions
                        </Link>
                        <Link className="hover:text-primary" href="#">
                        Privacy Policy                        </Link>
                        <Link className="hover:text-primary" href="#">
                        Help
                        </Link>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-3 md:w-[430px]">
                        <h3 className="text-mediumGray text-sm uppercase font-medium tracking-wide mb-1.5">Newslatter</h3>
                        <div className="flex gap-2">
                            <input type="text" name="" id="" placeholder="your email" className="border border-gray-300 py-2 px-4 w-full rounded-lg"/>
                            <button className="bg-primary text-white text-xs md:text-sm py-1 md:py-2 px-2 md:px-4 rounded-lg outline-none focus:outline-none">Subscribe</button>
                        </div>
                        <p className="text-mediumGray text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
                    </div>
                   
                    
                </div>
            </div>
        </footer> 
            <div className="lg:container lg:mx-auto px-4 lg:px-0 flex flex-col sm:flex-row-reverse justify-between items-center py-5 gap-5 " >
                <Image src={paymentlogo} alt="logo"/>
                <p className="text-xs md:text-sm tracking-wide text-mediumGray">
                    © 2024 Comforty. | Build with ❤️ by <span className="text-primary">Muhammad Shoaib</span>
                </p>
            </div>
            </>
    );
}
