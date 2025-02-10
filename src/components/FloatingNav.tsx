"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavItem {
    name: string;
    link: string;
    icon: React.ReactNode;
}

interface FloatingNavProps {
    navItems: NavItem[];
}

export const FloatingNav = ({ navItems }: FloatingNavProps) => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-x-0 top-4 z-50 mx-auto w-max"
        >
            <div className="flex items-center justify-center gap-2 rounded-full border border-amber-500/30 bg-black/50 px-6 py-2 shadow-xl backdrop-blur-md">
                {navItems.map((navItem, idx) => (
                    <Link
                        key={idx}
                        href={navItem.link}
                        className="flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-all hover:bg-amber-500/20"
                    >
                        <span className="text-amber-500">{navItem.icon}</span>
                        <span className="hidden text-gray-100 md:block font-medium">
                            {navItem.name}
                        </span>
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
};
