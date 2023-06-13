import { Box, Slide, makeStyles, useScrollTrigger } from "@mui/material";
import React from "react";

const useStyles = makeStyles((theme) => ({
  item: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc",
    animation: "$slideRightToLeft 1s forwards",
  },
  "@keyframes slideRightToLeft": {
    "0%": {
      transform: "translateX(100%)",
      opacity: 0,
    },
    "100%": {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
}));

function SlideOnScroll() {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <Slide direction="left" in={trigger}>
      <Box className={classes.item}></Box>
    </Slide>
  );
}
export default SlideOnScroll;
