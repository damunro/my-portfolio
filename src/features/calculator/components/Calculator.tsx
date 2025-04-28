"use client";

import { useEffect, useReducer, useState } from "react";

import { Box } from "@chakra-ui/react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import { expressionReducer } from "../utils/reducer";
import { parseError } from "../utils/parseExpression";

export default function Calculator() {
	const [expression, dispatch] = useReducer(expressionReducer, {
		expression: "0",
	});
	const [error, setError] = useState<string>("");

	useEffect(() => {
		setError(parseError(expression));
	}, [expression]);

	return (
		<Box p="5" borderWidth="1px" rounded="md" shadow="lg" maxWidth="2xl">
			<Display expression={expression} dispatch={dispatch} error={error} />
			<ButtonPanel expression={expression} dispatch={dispatch} error={error} />
		</Box>
	);
}
