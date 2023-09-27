import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/Button";
import { IconButton } from "./components/IconButton";
import { baseColor } from "./baseColor";
import { Menu } from "./components/Menu";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        scrollBehavior: "smooth",
        color: `${baseColor}.100`,
        bg: `${baseColor}.900`,
      },
    },
  },
  components: {
    Button,
    IconButton,
    Menu,
  },
});

export default theme;
