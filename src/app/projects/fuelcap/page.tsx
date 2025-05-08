import { AspectRatio, Box, Heading, Link, Stack } from "@chakra-ui/react";

import { RiGithubFill } from "react-icons/ri";
import { Tooltip } from "@/components/ToolTip";

// import { VideoHTMLAttributes } from "react";

export default function FuelCap() {
	return (
		<Stack separator={<br />} w="80%">
			<Heading size="6xl">
				Capstone Project: Realsense Fuelcap{" "}
				<Tooltip content="Go to github page">
					<Link
						href="https://github.com/keenanbuckley/RealsenseFuelcap"
						target="_blank"
					>
						<RiGithubFill />
					</Link>
				</Tooltip>
			</Heading>
			<AspectRatio
				maxW="1200px"
				minH="100px"
				ratio={2}
				borderRadius={"2xl"}
				overflow="hidden"
			>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/DmKT0SBLmPo?si=LOZd5GlAGCTwNegP&rel=0"
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
			</AspectRatio>
			<Box
				fontSize="xl"
				bg="beige"
				p={6}
				borderRadius="2xl"
				shadow="1em 1em 3em"
			>
				<p>
					The goal of this project was to integrate a computer vision node on
					top of an existing robotics stack. The project was built in ROS 2,
					creating a node which essentially served as a wrapper for our machine
					learning model.
				</p>
				<p>
					It was our responsibility to take in depth image data, supplied by a
					Realsense camera, and return a 6DOF pose estimation of a fuel cap, if
					such a fuel cap exists in the image
				</p>
			</Box>
			<Heading fontSize={"3xl"}>Problem Description</Heading>
			<Box
				fontSize="xl"
				bg="beige"
				p={6}
				borderRadius="2xl"
				shadow="1em 1em 3em"
			>
				Our task for my capstone project was to cre
			</Box>
			<Box
				fontSize="2xl"
				bg="tomato"
				p={6}
				borderRadius="2xl"
				shadow="1em 1em 3em"
			>
				I will update more as I find it, it has been some time since I have
				completed this project
			</Box>
		</Stack>
	);
}
