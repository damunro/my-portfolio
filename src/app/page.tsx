import { Box, Card, Link as ChakraLink, Image, VStack } from "@chakra-ui/react";

import Link from "next/link";
import Section from "@/components/Section";

export default function Home() {
	const labs = [
		{
			name: "calculator",
			desc: "Simple calculator app",
			image: "calculator.png",
			link: "/labs/calculator",
		},
	];

	const projects = [
		{
			name: "Realsense Fuelcap",
			desc: "Capstone project, integrating depth camera data into a ROS2 node returning pose data of a fuelcap",
			image: "fuelcap.png",
			link: "/projects/fuelcap",
		},
	];

	return (
		<VStack>
			<Box w="100%">
				<Section name="Projects" />
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
				<br />
				<Section name="labs" />
				{labs.map((lab) => (
					<Card.Root width="420px" key={lab.name} border="2" shadow="0 0 2em">
						<Card.Body gap="2">
							<Image src={lab.image} alt={`${lab.name} image`} h={"200px"} />
							<Card.Title>{lab.name}</Card.Title>
							<Card.Description>{lab.desc}</Card.Description>
							<ChakraLink asChild>
								<Link href={lab.link}>Go to project</Link>
							</ChakraLink>
						</Card.Body>
					</Card.Root>
				))}
			</Box>
		</VStack>
	);
}
