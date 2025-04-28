import { Button, SimpleGrid } from "@chakra-ui/react";

import { Props } from "../types/expression";
import { appendButtons } from "../constants/buttons";

export default function ButtonPanel({ dispatch }: Readonly<Props>) {
	return (
		<SimpleGrid columns={4} py="4">
			<Button onClick={() => dispatch({ type: "ENTER" })}>=</Button>
			<Button onClick={() => dispatch({ type: "CLEAR" })}>C</Button>
			{appendButtons.map((data) => (
				<Button
					key={data.symbol}
					m="0.5"
					rounded="md"
					variant="subtle"
					onClick={() => dispatch(data)}
				>
					{data.symbol}
				</Button>
			))}
		</SimpleGrid>
	);
}
