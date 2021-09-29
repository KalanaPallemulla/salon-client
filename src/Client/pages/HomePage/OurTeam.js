import React from "react";

export default function OurTeam() {
  return (
    <div className="text-gray-600 body-font bg-blue-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-sitetheme-blue mb-4">
            Why eCrew ?{" "}
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p> */}
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-sitetheme-blue inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-sitetheme-blue mb-5 flex-shrink-0">
              {/* <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg> */}
              <i class="fas fa-hand-holding-usd fa-2x"></i>
            </div>
            <div className="flex-grow">
              <h2 className="text-sitetheme-blue text-lg title-font font-medium mb-3">
                Transparent pricing{" "}
              </h2>
              <p className="leading-relaxed text-base">
                No hidden cost! What you see is what you spend.
              </p>
              <a className="mt-3 text-sitetheme-blue inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-sitetheme-blue mb-5 flex-shrink-0">
              <i class="fas fa-user-tie fa-2x"></i>
            </div>
            <div className="flex-grow">
              <h2 className="text-sitetheme-blue text-lg title-font font-medium mb-3">
                Professionals Only{" "}
              </h2>
              <p className="leading-relaxed text-base">
                Experienced and well-trained professionals hand-picked just for
                you!
              </p>
              <a className="mt-3 text-sitetheme-blue inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-sitetheme-blue mb-5 flex-shrink-0">
              <i class="fas fa-thumbs-up fa-2x"></i>
            </div>
            <div className="flex-grow">
              <h2 className="text-sitetheme-blue text-lg title-font font-medium mb-3">
                Trust Assured{" "}
              </h2>
              <p className="leading-relaxed text-base">
                Let’s handle your service needs with the best hands in the
                industry
              </p>
              <a className="mt-3 text-sitetheme-blue inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-sitetheme-blue mb-5 flex-shrink-0">
              <i class="fas fa-clock fa-2x"></i>
            </div>
            <div className="flex-grow">
              <h2 className="text-sitetheme-blue text-lg title-font font-medium mb-3">
                Better Time{" "}
              </h2>
              <p className="leading-relaxed text-base">
                Let’s handle your service needs with the best hands in the
                industry
              </p>
              <a className="mt-3 text-sitetheme-blue inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-sitetheme-blue mb-5 flex-shrink-0">
              <i class="fas fa-user-shield fa-2x"></i>
            </div>
            <div className="flex-grow">
              <h2 className="text-sitetheme-blue text-lg title-font font-medium mb-3">
                Safer{" "}
              </h2>
              <p className="leading-relaxed text-base">
                You can be confident that the services are conducted with proper
                safety regulations
              </p>
              <a className="mt-3 text-sitetheme-blue inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
