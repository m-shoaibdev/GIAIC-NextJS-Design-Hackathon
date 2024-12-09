
export default function Contact() {
    return (
        <div className="lg:container lg:mx-auto px-4 lg:px-0 mt-10 md:mt-16 mb-6 md:mb-20">
            <div className="text-center">
            <h2 className="text-2xl md:text-5xl font-semibold mb-4">Get In Touch With Us</h2>
            <p className="text-mediumGray text-base md:w-1/2 md:mx-auto">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-6 mt-10 mb-16">
                <div className="p-4 flex-1">
                    <div className="mb-4">
                        <label htmlFor="name" className="text-black text-base font-semibold">Your Name</label>
                        <input type="text" name="" id="name" placeholder="Your Name..." className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-black text-base font-semibold">Email address</label>
                        <input type="text" name="" id="name" placeholder="Your Email address..." className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-black text-base font-semibold">Subject</label>
                        <input type="text" name="" id="name" placeholder="This is an optional" className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-black text-base font-semibold">Message</label>
                        <textarea name="" id="name" placeholder="Message..." className="border border-gray-300 py-3 px-4 w-full rounded-lg mt-3"></textarea>
                        
                    </div>
                    <div className="mb-4">
                        <button className="bg-primary text-white text-xs md:text-sm py-1 md:py-2 px-2 md:px-4 rounded-lg outline-none focus:outline-none">Submit</button>
                    </div>
                </div>
                <div className="p-4 flex flex-col gap-12 mt-10">
                <div className="flex gap-2 md:w-80">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
                    <div>
                        <div><h3 className="text-xl font-semibold">Address</h3>
                        <p>236 5th SE Avenue, New York NY10000, United States</p></div>
                    </div>
                </div>

                <div className="flex gap-2 md:w-72">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16">
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
</svg>
                    <div>
                        <div><h3 className="text-xl font-semibold">Phone</h3>
                        <p>236 5th SE Avenue, New York NY10000, United States</p></div>
                    </div>
                </div>
                <div className="flex gap-2 md:w-72">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
</svg>


                    <div>
                        <div><h3 className="text-xl font-semibold">Working Time</h3>
                        <p>236 5th SE Avenue, New York NY10000, United States</p></div>
                    </div>
                </div>

                </div>
            
            </div>
        </div>
    );
}