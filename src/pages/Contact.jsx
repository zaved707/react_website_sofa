import Navbar from "../components/Navbar"

import React, { useState } from 'react';
import Drawer from '../components/Drawer'

export default function Contact() {
    return (
        <>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <Navbar />
                <div className="flex flex-col min-h-svh items-center  gap-10  p-5 justify-center ">
                <h1 className="text-3xl font-bold p-5 bg-base-300 outline shadow-lg  rounded-2xl">Zoha Bsdk design bana ke do bhai</h1>
                
                </div>

                    
                </div>
                <div className="drawer-side z-2">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <Drawer />
                </div>

            </div>
        </>)
}