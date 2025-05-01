import {
	Box,
	Heading,
	Image,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";

export default function About() {
	return (
		<VStack>
			<Heading size="5xl">About me</Heading>
			<SimpleGrid textStyle="xl" columns={[1, null, 2]} maxWidth="1200px">
				<Box>
					<Image src="david.jpg" alt="My picture" borderRadius="full" />
				</Box>
				<Box>
					<Text p="3">
						I am a recent computer science graduate with a passion for software
						development. Since summer of 2024, I have held a position at the
						United States Air Force as a computer scientist where I have worked
						as a full stack developer in a DevOps pipeline, delivering software
						solutions for internal tools used by our engineers.
					</Text>
				</Box>
			</SimpleGrid>
		</VStack>
	);
}
