export default function Home() {
    return (
        <div className="flex w-fit mx-auto mt-10 flex-col items-center justify-center">
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
                <div className="absolute left-14 lg:left-51 hover-up h-10 w-10 lg:w-20 lg:h-20 shadow-black hover:z-10 shadow-md rounded-full bg-black/20 overflow-hidden shadow-md"><img src="logos/customer2.png" className="rounded-full scale-[1.1]" alt="" /></div>
                <div className="absolute left-21 lg:left-61 hover-up h-10 w-10 lg:w-20 lg:h-20 shadow-black hover:z-10 shadow-md rounded-full bg-black/30 overflow-hidden shadow-md"><img src="logos/customer1.png" className="rounded-full scale-[1.1]" alt="" /></div>
                <div className="absolute left-28 lg:left-71 hover-up h-10 w-10 lg:w-20 lg:h-20 shadow-black hover:z-10 shadow-md rounded-full bg-black/40 overflow-hidden shadow-md"><img src="logos/customer3.png" className="rounded-full scale-[1.1]" alt="" /></div>
                <div className="absolute left-35 lg:left-80 hover-up h-10 w-10 lg:w-20 lg:h-20 shadow-black hover:z-10 shadow-md rounded-full bg-black/50 overflow-hidden shadow-md"><img src="logos/customer4.png" className="rounded-full scale-[1.1]" alt="" /></div>
                <div className=" mt-10">
                    <span className="text-sm lg:absolute lg:z-10 lg:bottom-[-30px] lg:right-55  text-black/70">
                        200+ Satisfied creators
                    </span>
                </div>
            </div>
            <button className="border-none fancy-btn mt-4 px-10 lg:px-20 py-4 rounded-full text-xl text-white/90 bg-black/90 flex shadow-black/50 shadow-lg items-center justify-center">
            Get in touch
            </button>
        </div>
    )
}