import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';

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
                            <span className="text-2xl"><MdOutlineBloodtype className='text-red-600' />
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
                            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>

                                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="/signUp" className="text-gray-300 hover:text-white transition-colors">Register</a></li>
                                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Request Blood</a></li>

                            </ul>
                        </div>

                        {/* About */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">About</h4>
                            <ul className="space-y-2">
                                <li>Our Story</li>
                                <li>Mission</li>
                                <li>Team</li>
                                <li>Feedback</li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-red-600" />
                                    <span className="text-gray-300">+91 98765 4988</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-red-600" />
                                    <span className="text-gray-300">support@lifelink.org</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="h-5 w-5 text-red-600" />
                                    <span className="text-gray-300">LifeLink HQ, New Delhi, India</span>
                                </div>
                            </div>
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