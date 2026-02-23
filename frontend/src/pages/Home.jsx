import { Navigate } from "react-router-dom";
import ImgCarousel from "../components/ImgCarousal";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Programs from "./Programs";

function Home() {
  const navigate = useNavigate();
  const programs = ["BIT", "BBA", "BHM"];
  return (
    <>
      <ImgCarousel />
      <Programs/>

    </>
  );
}

export default Home;
