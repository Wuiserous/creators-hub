export default function Home() {
    return (
        <div className="flex w-fit mt-10 flex-col items-center justify-center">
            <div className="relative  text-center w-full h-20">
                <div className="absolute left-14 h-10 w-10 rounded-full bg-black/20"></div>
                <div className="absolute left-21 h-10 w-10 rounded-full bg-black/30"></div>
                <div className="absolute left-28 h-10 w-10 rounded-full bg-black/40"></div>
                <div className="absolute left-35 h-10 w-10 rounded-full bg-black/50"></div>
                <div className=" mt-10">
                    <span className="text-sm text-black/70">
                        200+ Satisfied creators
                    </span>
                </div>
            </div>
            <span className="text-4xl font-medium">
                Your Vision
            </span>
            <span className="text-4xl font-medium">
                Our Creativity
            </span>
            <span className="text-black/40">
                Let's create something amazing
            </span>
            <button className="border-none mt-4 px-10 py-4 rounded-full text-xl text-white/90 bg-black/90 flex shadow-black/50 shadow-lg items-center justify-center">
            Get in touch
            </button>
        </div>
    )
}