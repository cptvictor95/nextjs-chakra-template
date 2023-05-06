import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";
import { IconButton } from "./components/IconButton";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        scrollBehavior: "smooth",
        color: "gray.100",
        bg: "gray.900",
      },
    },
  },
  components: {
    Button,
    IconButton,
  },
});

export default theme;
