import { X, Compass, MapPin } from "lucide-react"
export default function Drawer() {
    return <>


        <div className="menu bg-base-200 text-base-content min-h-full w-80 ">
            <div className="navbar bg-base-300 flex justify-between">
                <label className=" text-3xl font-bold">Mattresses</label>
                <label for='my-drawer' className="btn btn-ghost"><X /></label></div>
            <div className="flex mt-5 flex-col justify-between h-full grow">
                <div>
                    <li ><a><Compass /> Explore mattresses</a></li>
                    <li ><a><MapPin /> See Locations</a></li>
                </div>
            </div >
            <div className="h-20 bg-base-300 flex items-center justify-around gap-10 p-10">
            <div className=" text-xl ">Thanks for visiting ❤️</div>
            
            </div>
        </div>
    </>
}