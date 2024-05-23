import { extendTheme } from "@chakra-ui/react";
import { Button } from "bootstrap";
import { Component } from "react";

const customTheme = extendTheme({
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          border: "1px solid", // Đặt viền
          borderColor: "#000", // Màu viền
        },
      },
    },
    
  },
  styles: {
    global: {
      // Áp dụng kiểu toàn cục cho input
      "input:focus": {
        outline: "none !important",
        boxShadow: "none !important",
        borderColor: "transparent !important",
      },
    },
  },
});

export default customTheme;
