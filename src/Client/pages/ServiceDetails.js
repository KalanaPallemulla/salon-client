// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import NavBar from "../components/NavBar";
// import ServiceCard from "../components/Card/ServiceCard";
// import Footer from "./HomePage/Footer";
// import { Scrollbars } from "react-custom-scrollbars";
// import ServiceCategorySelectBut from "../components/buttons/ServiceCategorySelectBut";
// import ServiceImage from "../../Client/images/services/salon working-01.png";
// import { getAllServices } from "../../actions/service";
// import ServiceCardTopic from "../components/Card/ServiceCardTopic";

// export default function ServiceDetails() {
//   const dispatch = useDispatch();
//   // const [ispoup, setIspopup] = useState(false);

//   useEffect(() => {
//     dispatch(getAllServices());
//   }, []);

//   return (
//     <>
//       {/* <div
//         className=" relative text-center w-full object-cover h-80 block mx-auto  sm:block sm:w-full"
//         style={{
//           backgroundImage: `url("https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/01/1452119085-woman-getting-hair-cut.jpg")`,
//         }}
//       >
//         <div className=" content-center flex h-full">
//           <div className=" m-auto">
//             {" "}
//             <h1 className="text-4xl text-white font-bold ">Our Services </h1>
//             <h1 className="text-2xl text-white  ">
//               {" "}
//               <Typed
//                 strings={[
//                   "Here you can find anything",
//                   "Here you can find anything",
//                   "Here you can find anything",
//                 ]}
//                 typeSpeed={40}
//                 backSpeed={50}
//                 loop
//               />{" "}
//             </h1>
//           </div>
//         </div>
//       </div> */}

//       <div className="md:h-full lg:h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-6">
//         {/* <!--Card 1--> */}
//         <div className="border-r border-gray-200 flex flex-col">
//           <ServiceCategorySelectBut content="Hair" id="hair" />
//           <ServiceCategorySelectBut content="Skin" />
//           <ServiceCategorySelectBut content="Face" />
//         </div>
//         {/* <!--Card 2--> */}
//         <div className="border-r border-gray-200 ">
//           <Scrollbars style={{ height: 800 }}>
//             <ServiceCard />
//             <ServiceCard />
//             <ServiceCardTopic Topic="Face" />
//             <ServiceCard />
//             <ServiceCard />
//             <ServiceCardTopic Topic="Hair" />
//             <ServiceCard />
//             <ServiceCard />
//             <ServiceCard />
//             <ServiceCardTopic Topic="Skin" />
//             <ServiceCard />
//           </Scrollbars>{" "}
//         </div>

//         {/* <!--Card 3--> */}
//         <div className="border-r border-gray-200">
//           <img className="pt-44" src={ServiceImage} />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
