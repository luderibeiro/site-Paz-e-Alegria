"use client";
import React from "react";
import { FloatingNav } from "../components/FloatingNav";
import {
    FaHome,
    FaInfoCircle,
    FaChurch,
    FaComments,
    FaPhoneAlt,
} from "react-icons/fa";

export default function Navbar() {
    const navItems = [
        {
            name: "Início",
            link: "#home",
            icon: <FaHome className="h-5 w-5" />,
        },
        {
            name: "Sobre",
            link: "#sobre",
            icon: <FaInfoCircle className="h-5 w-5" />,
        },
        {
            name: "Cultos",
            link: "#cultos",
            icon: <FaChurch className="h-5 w-5" />,
        },
        {
            name: "Testemunhos",
            link: "#testemunhos",
            icon: <FaComments className="h-5 w-5" />,
        },
        {
            name: "Contato",
            link: "#contato",
            icon: <FaPhoneAlt className="h-5 w-5" />,
        },
    ];

    return <FloatingNav navItems={navItems} />;
}
