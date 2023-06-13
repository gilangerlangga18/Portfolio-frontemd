import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

function BoxCarousel({ item }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      data-aos={item.slide}
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-offset="200"
      data-aos-delay="400"
      style={{
        width: "90%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: { xs: "20px", md: "60px" },
          flexDirection: { xs: "column", md: item.direction },
          width: "100%",
          justifyContent: item.justify,
        }}
      >
        <Box
          sx={{
            width: { xs: "300px", md: "600px" },
            height: { xs: "200px", md: "300px" },
            // marginLeft: { xs: "none", md: "50px" },
            border: "2px #EABCAC solid",
            padding: { xs: "10px 25px 25px 25px", md: "30px 40px 30px 40px" },
            borderRadius: "20px",
            backgroundColor: "#EABCAC",
            marginBottom: { xs: "none", md: "40px" },
          }}
        >
          <Box>
            <Slider {...settings}>
              {item.preview_image.map((udin) => (
                <Box>
                  <Box
                    component="img"
                    src={udin}
                    sx={{
                      width: { xs: "300px", md: "600px" },
                      height: { xs: "200px", md: "300px" },
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: { xs: "10px", md: "40px" },
            color: "#e2e8f0",
            width: { xs: "350px", md: "50%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "40px" },
              fontWeight: "800",
              textAlign: { xs: item.justify, md: item.justify },
              width: "100%",
            }}
          >
            {item.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "20px", md: "40px" },
              color: "#e2e8f0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                textAlign: { xs: item.justify, md: item.justify },
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "25px" },
                  fontWeight: "600",
                }}
              >
                Description
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "20px" },
                  fomtWeight: "500",
                }}
              >
                {item.description}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                textAlign: { xs: item.justify, md: item.justify },
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "15px", md: "25px" },
                  fontWeight: "600",
                }}
              >
                Technology Used
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "20px" },
                  fomtWeight: "500",
                }}
              >
                {item.technology_used}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default BoxCarousel;
