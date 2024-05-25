"use client";

import { IconLogo } from "@/public/graphics/images/logo";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Quote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className={
        "containerize h-screen bg-white flex flex-col justify-center items-center text-blue-950 gap-[4vh]"
      }
    >
      <h2
        className={`text-center ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}
      >
        Your Boutique Aviation Operator
        <br className={"hidden md:block"} />
        <span className={"md:hidden"}> </span>
        Crafted With Soul
      </h2>
      <p
        className={`md:w-[48vw] text-justify ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}
      >
        JetHouse is a fresh face in business aviation, holding a Maltese Air
        Operator Certificate (AOC MT-82). JetHouse offers bespoke business
        aircraft management, charter, and consulting services. We stand as the
        prime choice when larger operators fall short of meeting the discerning
        expectations of business aircraft owners.
      </p>
      <span ref={ref}>
        <IconLogo
          mono={false}
          className={`w-[6vh] ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-1000 ease-in-out`}
        />
      </span>
    </section>
  );
};

export default Quote;
