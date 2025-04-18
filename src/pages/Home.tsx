import CarBanner from "../assets/car-banner.png"

export function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-neutral-200">
            <div className="flex flex-rol w-full items-center justify-center mt-[68px]">
                <div className="flex flex-rol w-full items-center object-cover">
                    <img className="opacity-80 w-[900px] object-cover" style={{ height: 'calc(100vh - 68px)' }} src={CarBanner} alt="" />
                    <p className="text-black">GRL</p>
                </div>
            </div>
        </div>
    );
}
