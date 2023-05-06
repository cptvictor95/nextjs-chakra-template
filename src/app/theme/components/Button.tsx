export const Button = {
  variants: {
    primary: {
      color: "gray.900",
      bg: "gray.200",
      _hover: {
        color: "gray.900",
        bg: "gray.300",
      },
      _active: {
        color: "gray.900",
        bg: "gray.400",
      },
    },
    solid: {
      color: "gray.100",
      bg: "gray.500",
      _hover: {
        color: "gray.100",
        bg: "gray.600",
      },
      _active: {
        color: "gray.100",
        bg: "gray.700",
      },
    },
    link: {
      color: "gray.200",
      _hover: {
        color: "gray.300",
      },
      _active: {
        color: "gray.400",
      },
    },
    outline: {
      color: "gray.200",
      borderColor: "gray.200",
      _hover: {
        color: "gray.200",
        bg: "gray.500",
        borderColor: "gray.500",
      },
      _active: {
        color: "gray.200",
        bg: "gray.600",
        borderColor: "gray.600",
      },
    },
  },
};
