// dns for server error
import { setServers } from "node:dns/promises";
setServers(["1.1.1.1", "8.8.8.8"]);

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Home/Footer";
import { Toast } from '@heroui/react';

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata = {
	title: "SkillSwap",
	description: "Freelance Micro-Task Platform",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			data-theme="light"
			className={`h-full antialiased`}
		>

			<body className={`${inter.className} min-h-full flex flex-col`}>
				<Navbar></Navbar>
				<main>
					{children}
				</main>
				<Footer></Footer>
				<Toast.Provider placement="top" />
			</body>
		</html>
	);
}
