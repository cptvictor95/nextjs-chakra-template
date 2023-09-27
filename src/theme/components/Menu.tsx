import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { baseColor } from "../baseColor";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

export const baseStyle = definePartsStyle(() => {
  return {
    list: {
      bg: `${baseColor}.700`,
    },
    groupTitle: {
      fontWeight: "bold",
      color: `${baseColor}.300`,
    },
    divider: {
      color: `${baseColor}.300`,
    },
    button: {
      color: `${baseColor}.100`,
      _hover: {
        color: `${baseColor}.900`,
      },
      _focus: {
        color: `${baseColor}.900`,
      },
    },
    icon: {
      color: `${baseColor}.100`,
      _hover: {
        color: `${baseColor}.900`,
      },
      _focus: {
        color: `${baseColor}.900`,
      },
    },
    item: {
      fontWeight: "semibold",
      color: `${baseColor}.100`,
      bg: `${baseColor}.700`,
      _hover: {
        color: `${baseColor}.900`,
        bg: `${baseColor}.500`,
      },
      _focus: {
        color: `${baseColor}.900`,
        bg: `${baseColor}.500`,
      },
    },
  };
});
export const Menu = defineMultiStyleConfig({
  baseStyle,
});
