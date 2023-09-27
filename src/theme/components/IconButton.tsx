import { baseColor } from "../baseColor";

export const IconButton = {
  variants: {
    primary: {
      color: `${baseColor}.900`,
      bg: `${baseColor}.200`,
      _hover: {
        color: `${baseColor}.900`,
        bg: `${baseColor}.300`,
      },
      _active: {
        color: `${baseColor}.900`,
        bg: `${baseColor}.400`,
      },
    },
    solid: {
      color: `${baseColor}.100`,
      bg: `${baseColor}.500`,
      _hover: {
        color: `${baseColor}.100`,
        bg: `${baseColor}.600`,
      },
      _active: {
        color: `${baseColor}.100`,
        bg: `${baseColor}.700`,
      },
    },
    link: {
      color: `${baseColor}.200`,
      _hover: {
        color: `${baseColor}.300`,
      },
      _active: {
        color: `${baseColor}.400`,
      },
    },
    outline: {
      color: `${baseColor}.200`,
      borderColor: `${baseColor}.200`,
      _hover: {
        color: `${baseColor}.200`,
        bg: `${baseColor}.500`,
        borderColor: `${baseColor}.500`,
      },
      _active: {
        color: `${baseColor}.200`,
        bg: `${baseColor}.600`,
        borderColor: `${baseColor}.600`,
      },
    },
  },
};
