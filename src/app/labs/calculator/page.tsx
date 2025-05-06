import { Box, Center, Heading, VStack } from "@chakra-ui/react";

import Calculator from "@/features/calculator/components/Calculator";

export default function page() {
	return (
		<VStack>
			<Heading size="3xl">Calculator</Heading>
			<Box w="svw">
				<Center>
					<Calculator />
				</Center>
			</Box>
		</VStack>
	);
}
