import MainBanner from "./Component/MainBanner";
import Navbar from "./Component/Navbar";
// import "./App.css";
import { Box } from "@mui/material";
import Project from "./Component/Project";
import Experience from "./Component/Experience";
import StackFrontEnd from "./Component/Mystack";
import Footer from "./Component/Footer";

function App() {
  return (
    <Box>
      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        {" "}
        <Navbar />
        <MainBanner />
        <Project />
        <Experience />
        <StackFrontEnd />
        <Footer />
      </Box>
    </Box>
    //   <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<MainBanner />}>
    //       <Route path="project" element={<Project />} />
    //       <Route path="experience" element={<Experience />} />
    //       <Route path="stack" element={<StackFrontEnd />} />
    //       <Route path="" element={<Footer />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
