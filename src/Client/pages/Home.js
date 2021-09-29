import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ServicesHome from "./HomePage/ServicesHome";
import Welcome from "./HomePage/Welcome";
import Footer from "./HomePage/Footer";
import OurTeam from "./HomePage/OurTeam";

export default function Home() {
  const [Location, setlocation] = useState("");
  // console.log(Location);

  return (
    <div>
      <Welcome Location={Location} setlocation={setlocation} />
      <ServicesHome Location={Location} />
      <OurTeam />
      <Footer />
    </div>
  );
}
