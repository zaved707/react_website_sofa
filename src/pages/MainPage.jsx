
import Navbar from "../components/Navbar"
import Cards from "../components/Cards";
import React, { useState } from 'react';
import Drawer from '../components/Drawer'

export default function MainPage() {
    return (
        <>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <Navbar />
                <div className="flex flex-col mt-20 min-h-svh sm:items-center items-start gap-10 pt-10 p-5 ">

                    <h1 className="text-5xl p-5 shadow-2xl outline rounded-2xl font-bold">Matress For All Your Needs</h1>
                    <h2 className="font-medium bg-neutral text-neutral-content rounded-2xl p-5 shadow-xl text-2xl">
                        Sleep Better, Live Better!
                    </h2>
                    <p className="bg-base-300 shadow-xl p-5 max-w-150">
                        Discover the ultimate mattress for your perfect night's rest. Soft, firm, or just right—our premium beds hug you back with unmatched comfort and support. Designed for dreamers, crafted for sleepers.
                    </p>


                </div>
                <Cards />
                </div>
                <div className="drawer-side z-2">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <Drawer />
                </div>

            </div>
        </>)
}