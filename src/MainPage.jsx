import Navbar from "./Navbar"
import Cards from "./Cards"
export default function MainPage(){
    return (
    <>
    <Navbar />
    <div className="flex flex-col h-svh sm:items-center items-start gap-10  p-5 justify-center">

        <h1 className="text-5xl p-5 shadow-2xl outline rounded-2xl font-bold">Matress For All Your Needs</h1>
        <h2 className="font-medium bg-neutral text-neutral-content rounded-2xl p-5 shadow-xl text-2xl">
        Sleep Better, Live Better! 
        </h2>
        <p className="bg-base-300 shadow-xl p-5 max-w-150">
        Discover the ultimate mattress for your perfect night's rest. Soft, firm, or just right—our premium beds hug you back with unmatched comfort and support. Designed for dreamers, crafted for sleepers.
        </p>
        
        
    </div>
    <Cards />
    </>)
}