import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdOutlineBloodtype } from "react-icons/md";
import { FaAnglesRight } from "react-icons/fa6";




function Footer() {
    return (
        <>
            <footer className="bg-gray-900  text-gray-300 py-12 ">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col">
                    {/* Top section */}
                    <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl"><MdOutlineBloodtype className='text-red-600'/>
                            </span>
                            <p className="text-lg font-semibold">Blood & Organ Donation</p>
                        </div>
                        <div className="flex items-center gap-4 mt-6 md:mt-0">
                            <p className="text-white font-medium">Ready to get started?</p>
                            <button className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-red-700 transition">
                                Donate
                            </button>
                        </div>
                    </div>

                    {/* Middle section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Newsletter */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">
                                Subscribe to our newsletter
                            </h4>
                            <div className="flex items-centerborder border border-gray-500 rounded-lg overflow-hidden">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full px-3 py-2 bg-gray-800 text-gray-200 outline-none"
                                />
                                <button className="bg-red-600 px-4 py-2 hover:bg-red-700 transition">
                                <FaAnglesRight />

                                </button>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Services</h4>
                            <ul className="space-y-2">
                                <li>Email Marketing</li>
                                <li>Campaigns</li>
                                <li>Branding</li>
                                <li>Offline</li>
                            </ul>
                        </div>

                        {/* About */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">About</h4>
                            <ul className="space-y-2">
                                <li>Our Story</li>
                                <li>Benefits</li>
                                <li>Team</li>
                                <li>Careers</li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Help</h4>
                            <ul className="space-y-2">
                                <li>FAQs</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-12 border-t border-gray-700 pt-6">
                        <p className="text-sm">&copy; 2025 Blood Donation. All rights reserved.</p>

                        {/* Social icons */}
                        <div className="flex gap-6 mt-4 md:mt-0 text-lg">
                            <a href="#" className="hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-white">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer