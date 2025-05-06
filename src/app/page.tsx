import {
	Box,
	Card,
	Link as ChakraLink,
	Heading,
	Image,
	VStack,
} from "@chakra-ui/react";

import Link from "next/link";

export default function Home() {
	const projects = [
		{
			name: "calculator",
			desc: "Simple calculator app",
			image: "calculator.png",
			link: "/labs/calculator",
		},
	];

	return (
		<VStack>
			<Box w="100%">
				<Heading
					size="4xl"
					mb="1em"
					bg="green"
					color="white"
					rounded="xl"
					p="0.5em"
				>
					Projects
				</Heading>
				{projects.map((project) => (
					<Card.Root width="420px" key="name" border="2" shadow="0 0 2em">
						<Card.Body gap="2">
							<Image
								src={project.image}
								alt={`${project.name} image`}
								h={"200px"}
							/>
							<Card.Title>{project.name}</Card.Title>
							<Card.Description>{project.desc}</Card.Description>
							<ChakraLink asChild>
								<Link href={project.link}>Go to project</Link>
							</ChakraLink>
						</Card.Body>
					</Card.Root>
				))}
			</Box>
		</VStack>
	);
}
