import { Box, Heading, Link, Stack } from "@chakra-ui/react";

import { RiGithubFill } from "react-icons/ri";

export default function FuelCap() {
	return (
		<Stack separator={<br />} w="80%">
			<Heading size="6xl">
				Capstone Project: Realsense Fuelcap{" "}
				<Link href="https://github.com/damunro" target="_blank">
					<RiGithubFill />
				</Link>
			</Heading>
			<Box
				fontSize="2xl"
				bg="beige"
				p={6}
				borderRadius="2xl"
				shadow="1em 1em 3em"
			>
				The goal of this project was to integrate a computer vision node on top
				of an existing robotics stack. The project was built in ROS 2, creating
				a node which essentially served as a wrapper for our machine learning
				model
			</Box>
		</Stack>
	);
}
