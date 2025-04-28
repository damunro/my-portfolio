import { Box, Image, Link, SimpleGrid } from "@chakra-ui/react";

import { LiaLinkedinIn } from "react-icons/lia";

export default function About() {
	return (
		<SimpleGrid textStyle="xl" columns={[1, null, 2]}>
			<Box>
				<Image
					src="david.jpg"
					alt="My picture"
					borderRadius="full"
					height="170px"
				/>
			</Box>
			<Box>
				<Link href="https://www.linkedin.com/in/david-munro-7738381a2/">
					<LiaLinkedinIn />
				</Link>
			</Box>
		</SimpleGrid>
	);
}
