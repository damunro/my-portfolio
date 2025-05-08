import {
	AspectRatio,
	Box,
	Heading,
	Image,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";

import { RiGithubFill } from "react-icons/ri";
import ShadowText from "@/components/ShadowText";
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
			<ShadowText>
				<Text mb={3}>
					The goal of this project was to integrate a computer vision node on
					top of an existing robotics stack. The project was built in ROS 2,
					creating a node which essentially served as a wrapper for our machine
					learning model.
				</Text>
				<Text>
					It was our responsibility to take in depth image data, supplied by a
					Realsense camera, and return a 6DOF pose estimation of a fuel cap, if
					such a fuel cap exists in the image
				</Text>
			</ShadowText>
			<Heading fontSize={"3xl"}>Theory of Operation</Heading>
			<ShadowText>
				The basis for our projects functionality came from researching attempts
				at 6 degree-of-freedom pose estimation using machine learning. From what
				we saw, there were two approaches we could have taken: create a model
				that would detect pose estimation outright, or create a keypoint
				detection model and use the keypoints (and some linear algebra) to
				estimate the pose based on geometry.
			</ShadowText>
			<Image
				src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*XwM2A2dIiBHE4cLfEzxUfA.png"
				alt="Double hour glass diagram"
			/>
			<ShadowText>
				<Text>
					Our implementation was based off the description found in this{" "}
					<Link asChild>
						<a href="https://medium.com/data-science/geometric-deep-learning-for-pose-estimation-6af45da05922">
							Medium Blog
						</a>
					</Link>
					{""}. Ultimately, pose estimation is calculated in 3 phases:
				</Text>
				<Text>1. Fuel cap detection (bounding box model)</Text>
				<Text>2. Key points detection (double hourglass model)</Text>
				<Text>
					3. Approximate position using intrinsic geometric information
				</Text>
			</ShadowText>
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
