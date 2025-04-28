import { Container, Link, Stack } from "@chakra-ui/react";

import { LiaLinkedinIn } from "react-icons/lia";
import { RiGithubFill } from "react-icons/ri";

export default function Footer() {
	return (
		<Container textStyle="3xl">
			<Stack direction="row">
				<Link
					href="https://www.linkedin.com/in/david-munro-7738381a2/"
					target="_blank"
				>
					<LiaLinkedinIn />
				</Link>
				<Link href="https://github.com/damunro" target="_blank">
					<RiGithubFill />
				</Link>
			</Stack>
		</Container>
	);
}
