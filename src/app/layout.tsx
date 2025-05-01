import "./globals.css";

import { Container } from "@chakra-ui/react";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import NavBar from "@/components/layout/NavBar";
import { Provider } from "./provider";

export const metadata: Metadata = {
	title: "David Munro's portfolio",
	description:
		"Collection of labs, projects, and blogs created or contributed by me, David",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Provider>
					{/* <Header /> */}
					<NavBar />
					<Container aspectRatio={2} alignItems="flex-start">
						{children}
					</Container>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
