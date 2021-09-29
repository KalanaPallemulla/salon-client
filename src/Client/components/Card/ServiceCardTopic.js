import React from "react";

export default function ServiceCardTopic({ Topic }) {
  return (
    <section id={`${Topic}`}>
      <div className="container flex justify-center">
        <div className="max-w-md md:w-full w-80 text-white shadow-lg rounded-full font-medium text-3xl text-center mt-2 py-3 bg-sitetheme-blue">
          {Topic}
        </div>
      </div>
    </section>
  );
}
