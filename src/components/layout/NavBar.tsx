import { Box, Link as ChakraLink, HStack } from "@chakra-ui/react";

import { FaFish } from "react-icons/fa";
import Link from "next/link";

export default function NavBar() {
	return (
		<Box
			bg="bg"
			shadow="md"
			borderRadius="sm"
			mb="1em"
			width="100%"
			p="4"
			textStyle="3xl"
			position="fixed"
			top="0"
			zIndex="overlay"
			as={"header"}
		>
			<HStack>
				<FaFish />
				<ChakraLink asChild>
					<Link href="/">Home</Link>
				</ChakraLink>
				<ChakraLink asChild>
					<Link href="/about">About</Link>
				</ChakraLink>
			</HStack>
		</Box>
	);
}
