import { Heading } from "@chakra-ui/react";

export type SectionProps = {
	name: string;
};
export default function Section(props: Readonly<SectionProps>) {
	return (
		<Heading
			size="4xl"
			mb="1em"
			bg="green"
			color="white"
			rounded="xl"
			p="0.5em"
			border="3px solid darkgreen"
		>
			{props.name}
		</Heading>
	);
}
