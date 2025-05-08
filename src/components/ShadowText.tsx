import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function ShadowText({
	children,
}: Readonly<PropsWithChildren<object>>) {
	return (
		<Box
			fontSize="2xl"
			bg="beige"
			p={6}
			borderRadius="2xl"
			shadow="1em 1em 3em"
		>
			{children}
		</Box>
	);
}
