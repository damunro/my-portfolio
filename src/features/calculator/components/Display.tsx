import { Field, Input } from "@chakra-ui/react";

import { Props } from "../types/expression";

export default function Display({ expression, error }: Readonly<Props>) {
	return (
		<Field.Root invalid={!!error}>
			<Input
				readOnly
				textAlign="right"
				placeholder="Enter a mathematical expression..."
				caretColor="transparent"
				value={expression.expression}
			/>
			<Field.ErrorText>{error}</Field.ErrorText>
		</Field.Root>
	);
}
