export default function Home() {
    return (
        <div className="flex w-fit mt-10 flex-col items-center justify-center">
            <span className="text-4xl lg:text-8xl font-medium">
                Your Vision
            </span>
            <span className="text-4xl lg:text-8xl font-medium">
                Our Creativity
            </span>
            <span className="text-black/40">
                Let's create something amazing
            </span>
            <div className="relative lg:mx-auto lg:mb-10 mt-10 lg:mt-5  text-center w-full h-20">
                <div className="absolute left-14 lg:left-51 h-10 w-10 lg:w-20 lg:h-20 shadow-black shadow-md rounded-full bg-black/20 overflow-hidden shadow-md"><img src="https://tr.rbxcdn.com/180DAY-d2aa8b558f4c73dc77ab184210a56788/420/420/Hat/Webp/noFilter" className="rounded-full" alt="" /></div>
                <div className="absolute left-21 lg:left-61 h-10 w-10 lg:w-20 lg:h-20 shadow-black shadow-md rounded-full bg-black/30 overflow-hidden shadow-md"><img src="https://i.pinimg.com/736x/58/3b/82/583b82628f43b739f90e40cc6fcbba1c.jpg" className="rounded-full" alt="" /></div>
                <div className="absolute left-28 lg:left-71 h-10 w-10 lg:w-20 lg:h-20 shadow-black shadow-md rounded-full bg-black/40 overflow-hidden shadow-md"><img src="https://i.pinimg.com/736x/3e/03/da/3e03da842fe2ce76445bc2e515d0a220.jpg" className="rounded-full" alt="" /></div>
                <div className="absolute left-35 lg:left-80 h-10 w-10 lg:w-20 lg:h-20 shadow-black shadow-md rounded-full bg-black/50 overflow-hidden shadow-md"><img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/153171342/original/5576dd02a61643b59f6794201789dd8fc69e52b4/make-you-a-dog-wif-hat-pfp-with-any-hat-of-your-choice.jpeg" className="rounded-full" alt="" /></div>
                <div className=" mt-10">
                    <span className="text-sm lg:absolute lg:z-10 lg:bottom-[-30px] lg:right-55  text-black/70">
                        200+ Satisfied creators
                    </span>
                </div>
            </div>
            <button className="border-none mt-4 px-10 lg:px-20 py-4 rounded-full text-xl text-white/90 bg-black/90 flex shadow-black/50 shadow-lg items-center justify-center">
            Get in touch
            </button>
        </div>
    )
}