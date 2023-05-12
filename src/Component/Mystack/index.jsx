import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

export const stack = [
  {
    id: 1,
    name: "Bootstrap",
    img: "../../../image/stack/Boot.jpg",
  },
  {
    id: 1,
    name: "FireBase",
    img: "../../../image/stack/Fire.png",
  },
  {
    id: 1,
    name: "Next Js",
    img: "../../../image/stack/Next.png",
  },
  {
    id: 1,
    name: "JavaScript",
    img: "../../../image/stack/jav.png",
  },
  {
    id: 1,
    name: "Material UI",
    img: "../../../image/stack/Mui.png",
  },
  {
    id: 1,
    name: "React Js",
    img: "../../../image/stack/React.png",
  },
  {
    id: 1,
    name: "HTML 5",
    img: "../../../image/stack/html.png",
  },
  {
    id: 1,
    name: "CSS 3",
    img: "../../../image/stack/css.png",
  },
];
function StackFrontEnd() {
  const [state] = useState(stack);

  return (
    <Box
      id="stack"
      sx={{
        width: "100%",
        marginTop: "50px",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "30px", md: "60px" },
          fontWeight: "800",
          marginLeft: "40px",
          color: "#e2e8f0",
        }}
      >
        My Stack __
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            marginTop: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              justifyContent: "center",
            }}
          >
            {state.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: { xs: "120px", md: "350px" },
                  height: { xs: "90px", md: "125px" },
                  backgroundColor: "white",
                  borderRadius: "20px",
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={item.img}
                    sx={{
                      // width: "70px",
                      height: { xs: "30px", md: "50px" },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "15px", md: "30px" },
                    fontWeight: "700",
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default StackFrontEnd;
