import PulsatingDot from "./PulsatingDot";

export default function NavBar() {
  return (
    <div className="flex w-fit flex-col justify-center items-center">
        <div className=" border-b-[2px] border-black/10 gap-2 pt-10 flex flex-col justify-center items-center">
            <div className="w-[100px] h-[100px] shadow-xl bg-black rounded-full"> <img src="logos/creator-hub-logo.png" alt="" /></div>
            <div className="flex flex-col justify-center items-center">
                <span className="text-2xl font-medium ml-3">Creators Hub</span>
                <span className="ml-2 text-black/40">Graphic designer, Video editor</span>
                <div className="h-10  flex items-center justify-center w-full">
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <span><PulsatingDot /></span>
                        <span>Available</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row p-2 gap-2">
            <div className="w-10 h-10 bg-black/20 shadow-md rounded-lg"></div>
            <div className="w-10 h-10 bg-black/20 shadow-md rounded-lg"></div>
            <div className="w-10 h-10 bg-black/20 shadow-md rounded-lg"></div>
        </div>
    </div>
  )
}   