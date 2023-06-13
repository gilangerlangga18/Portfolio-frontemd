import { Box, Button, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function MainBanner() {
  const icon = [
    {
      link: "https://github.com/gilangerlangga18",
      icon: GitHubIcon,
    },
    {
      link: "https://www.instagram.com/gilangerlangga18",
      icon: InstagramIcon,
    },
    {
      link: "https://www.linkedin.com/in/gilang-erlangga-099aba239/",
      icon: LinkedInIcon,
    },
    {
      link: "https://wa.me/082269788667",
      icon: WhatsAppIcon,
    },
    {
      link: "mailto:gilang.erlangga1806@gmail.com",
      icon: EmailIcon,
    },
  ];

  return (
    <Box
      id="home"
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
          backgroundColor: "#E2B091",
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
            backgroundColor: "#EABCAC",
            borderRadius: { xs: "40px 40px 0 0", md: "40px 0 0 40px" },
            alignItems: { xs: "center", md: "start" },
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
              alignItems: { xs: "center", md: "start" },
              paddingLeft: { xs: "0", md: "50px" },
            }}
          >
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
                fontSize: { xs: "15px", md: "30px" },
                fontWeight: "700",
              }}
            >
              Frontend Developer
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
              paddingLeft: { xs: "none", md: "60px" },
              display: "flex",
              gap: { xs: "0px", md: "0px" },
              margin: { xs: " 20px 0  20px 0" },
            }}
          >
            {icon.map((item) => (
              <Button component="a" href={item.link}>
                <item.icon
                  sx={{
                    border: "1px #32485c solid",
                    padding: { xs: "8px", md: "10px" },
                    borderRadius: "50%",
                    width: { xs: "20px", md: "25px" },
                    height: { xs: "20px", md: "25px" },
                    cursor: "pointer",
                    color: "#32485c",
                    "&:hover": {
                      transition: "all 0.5s",
                      backgroundColor: "#874e4c",
                      color: "#EABCAC",
                      border: "1px #EABCAC solid",
                    },
                  }}
                />
              </Button>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "none", md: "50%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: { xs: "70%", md: "100%" },
              display: "flex",
              alignItems: "end",
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
