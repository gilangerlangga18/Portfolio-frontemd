import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function MainBanner() {
  return (
    <Box
      sx={{
        marginTop: { xs: "50px", md: "160px" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "80%" },
          display: "flex",
          height: { xs: "700px", md: "800px" },
          backgroundColor: "#FF9A3C",
          // alignItems: "center",
          // justifyContent: "space-between",
          borderRadius: "40px",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "none", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            backgroundColor: "#FF6F3C",
            // marginLeft: "50px",
            borderRadius: { xs: "40px 40px 0 0", md: "40px 0 0 40px" },
            alignItems: { xs: "center", md: "start" },
            // height: { xs: "40%", md: "none" },
          }}
        >
          <Box
            sx={{
              fontSize: { xs: "20px", md: "40px" },
              fontWeight: "900",
              marginLeft: { xs: "none", md: "40px" },
            }}
          >
            {" "}
            Hi! I am,
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "10px", md: "20px" },
              // alignSelf: "center",
              alignItems: { xs: "center", md: "start" },
              paddingLeft: { xs: "0", md: "50px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "30px" },
                fontWeight: "700",
              }}
            >
              Frontend Developer
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "25px", md: "60px" },
                fontWeight: "900",
              }}
            >
              {" "}
              Gilang Erlangga
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "17px" },
                fontWeight: "400",
                textAlign: { xs: "center", md: "start" },
              }}
            >
              I am a highly skilled front-end developer with experience in
              building web applications. using frameworks such as React JS, Next
              JS, and Material UI. With my technical expertise, I am able to
              create highly performant and elegant solutions that are easy to
              maintain and scale. I am always eager to learn new technologies
              and improve my skills
            </Typography>
          </Box>
          <Box
            sx={{
              paddingLeft: { xs: "none", md: "40px" },
              display: "flex",
              gap: { xs: "10px", md: "30px" },
              margin: { xs: " 20px 0  20px 0" },
            }}
          >
            <Button component="a" href="https://github.com/gilangerlangga18">
              <GitHubIcon
                sx={{
                  border: "1px black solid",
                  padding: { xs: "8px", md: "10px" },
                  borderRadius: "50%",
                  width: { xs: "20px", md: "25px" },
                  height: { xs: "20px", md: "25px" },
                  cursor: "pointer",
                  color: "black",
                }}
              />
            </Button>

            <Button
              component="a"
              href="https://www.instagram.com/gilangerlangga18"
            >
              <InstagramIcon
                sx={{
                  border: "1px black solid",
                  padding: { xs: "8px", md: "10px" },
                  borderRadius: "50%",
                  width: { xs: "20px", md: "25px" },
                  height: { xs: "20px", md: "25px" },
                  cursor: "pointer",
                  color: "black",
                }}
              />
            </Button>

            <Button
              component="a"
              href="https://www.linkedin.com/in/gilang-erlangga-099aba239/"
            >
              <LinkedInIcon
                sx={{
                  border: "1px black solid",
                  padding: { xs: "8px", md: "10px" },
                  borderRadius: "50%",
                  width: { xs: "20px", md: "25px" },
                  height: { xs: "20px", md: "25px" },
                  cursor: "pointer",
                  color: "black",
                }}
              />
            </Button>

            <Button component="a" href="https://wa.me/082269788667">
              <WhatsAppIcon
                sx={{
                  border: "1px black solid",
                  padding: { xs: "8px", md: "10px" },
                  borderRadius: "50%",
                  width: { xs: "20px", md: "25px" },
                  height: { xs: "20px", md: "25px" },
                  cursor: "pointer",
                  color: "black",
                }}
              />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "none", md: "50%" },
            display: "flex",
            justifyContent: "center",
            // alignItems: "end",
          }}
        >
          <Box
            sx={{
              // width: "400px",
              height: { xs: "70%", md: "100%" },
              // backgroundColor: "red",
              display: "flex",
              // justifyContent: "center",
              alignItems: "end",
              // objectFit: "cover",
              marginBottom: { xs: "50px", md: "none" },
            }}
          >
            <Box
              component="img"
              src="../../../image/gilang.svg"
              sx={{
                width: { xs: "100%", md: "none" },
                height: { xs: "550px", md: "100%" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainBanner;
