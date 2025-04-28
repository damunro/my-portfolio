import { Expression, ExpressionAction } from "../types/expression";

import { evaluate } from "mathjs";
import { parseError } from "./parseExpression";

export const expressionReducer = (
	expression: Expression,
	action: ExpressionAction
) => {
	const { expression: prev } = expression;
	switch (action.type) {
		case "APPEND":
			return {
				expression: prev === "0" ? action.symbol : prev + action.symbol,
			};
		case "CLEAR":
			return { expression: "0" };
		case "ENTER":
			if (parseError(expression)) return expression;
			return { expression: `${evaluate(prev)}` };
	}
};
