import "./globals.css";

import { Center, Container, VStack } from "@chakra-ui/react";

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
		<html suppressHydrationWarning lang="en">
			<body>
				<Provider>
					<Center mx="0" px="0">
						<VStack w="80%" maxW="1600" display="flex" flexDir="column">
							<NavBar />
							<Container aspectRatio={2} alignItems="flex-start" pt="5em">
								{children}
							</Container>
							<Footer />
						</VStack>
					</Center>
				</Provider>
			</body>
		</html>
	);
}
