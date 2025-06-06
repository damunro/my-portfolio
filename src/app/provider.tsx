"use client";

import { system } from "@/components/theme";
import { ChakraProvider } from "@chakra-ui/react";
import {
	ColorModeProvider,
	type ColorModeProviderProps,
} from "../components/ui/color-mode";

export function Provider(props: Readonly<ColorModeProviderProps>) {
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
