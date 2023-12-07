import { cva } from "@shadow-panda/styled-system/css";

export const dropdownButton = cva({
    base: {
        px: "4px",
        py: "2px",
        borderWidth: "1px",
        boxShadow: { base: "none", _focus: "none" },
        outline: { base: "none", _focus: "none" },
        textStyle: "bodyM",
        "&[data-state=open]": {
            color: "blue.400",
            outline: "2px solid",
            outlineColor: "blue.400",
        },
    },
});

export const pandaBadge = cva({
    base: {
        borderRadius: "4px",
    },
    variants: {
        visual: {
            outline: {
                borderRadius: "16px",
            },
            increase: {
                bg: "magenta.100",
                color: "magenta.400",
            },
            decrease: {
                bg: "blue.100",
                color: "blue.500",
            },
            same: {
                bg: "mint.100",
                color: "mint.300",
            },
            na: {
                bg: "gray.200",
                color: "gray.500",
            },
            beta: {
                bg: "#B87CDA",
                color: "#fff",
                borderRadius: "2px",
                padding: "2px 4px",
            },
            stable: {
                bg: "blue.50",
                color: "blue.500",
                borderRadius: "2px",
                padding: "2px 4px",
            },
            mildlyUnstable: {
                bg: "blue.50",
                color: "orange.700",
                borderRadius: "2px",
                padding: "2px 4px",
            },
            moderatelyUnstable: {
                bg: "blue.50",
                color: "red.550",
                borderRadius: "2px",
                padding: "2px 4px",
            },
            severelyUnstable: {
                bg: "blue.50",
                color: "red.550",
                borderRadius: "2px",
                padding: "2px 4px",
            },
            unlimited: {
                bg: "blue.50",
                color: "blue.700",
                borderRadius: "2px",
                padding: "2px 4px",
            },
            exceeded: {
                bg: "blue.50",
                color: "red.600",
                borderRadius: "2px",
                padding: "2px 4px",
            },
        },
    },
});
