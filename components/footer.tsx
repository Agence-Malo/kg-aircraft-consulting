"use client";

import { useView } from "@/context/view";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import { links } from "@/components/nav";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";

import Contact from "@/components/contact";
import { Privacy, Terms } from "@/components/modals";

const Footer = () => {
  const path = usePathname(),
    [modal, setModal] = useState<null | "privacy policy" | "terms of use">(
      null,
    ),
    { onOpenChange } = useDisclosure(),
    { openView } = useView();

  return (
    <>
      <Contact fixed />
      <footer className="containerize max-lg:px-5 flex flex-col gap-[2vh] items-center justify-center bg-axolotl py-[4vh]">
        <div className={"w-full flex justify-between items-center"}>
          <Link href={"/"}>
            <Logo mono className={"h-[4vh] w-auto"} />
          </Link>
          <a
            href={"https://www.linkedin.com/company/kg-aircraft-consulting/"}
            target={"_blank"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 64 64"
              className={
                "size-[6vh] fill-white hover:fill-white/75 transition-colors duration-200 ease-in-out m-[-1vh]"
              }
            >
              <path d="M40.227,12C51.145,12,52,12.854,52,23.773v16.453C52,51.145,51.145,52,40.227,52H23.773C12.855,52,12,51.145,12,40.227	V23.773C12,12.854,12.855,12,23.773,12H40.227z M25.029,43V26.728h-5.057V43H25.029z M22.501,24.401	c1.625,0,2.947-1.322,2.947-2.949c0-1.625-1.322-2.947-2.947-2.947c-1.629,0-2.949,1.32-2.949,2.947S20.87,24.401,22.501,24.401z M44,43v-8.925c0-4.382-0.946-7.752-6.067-7.752c-2.46,0-4.109,1.349-4.785,2.628H33.08v-2.223h-4.851V43h5.054v-8.05	c0-2.122,0.405-4.178,3.036-4.178c2.594,0,2.628,2.427,2.628,4.315V43H44z"></path>
            </svg>
          </a>
        </div>
        <div className={"w-full h-[0.15vh] bg-vitsippa-100"} />
        <div className={"w-full flex justify-between items-baseline gap-[2vw]"}>
          <div
            className={
              "flex justify-start items-baseline md:gap-[2vw] gap-[4vw] flex-wrap"
            }
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`${path === link.href ? "font-semibold" : "font-medium"} footer-link`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault();
                openView("contact");
              }}
              className={"font-medium footer-link"}
            >
              Contact
            </button>
          </div>
          <div
            className={
              "flex justify-end items-baseline md:gap-[2vw] gap-[4vw] flex-wrap"
            }
          >
            <button
              type={"button"}
              onClick={() => setModal("terms of use")}
              className={"font-medium footer-link"}
            >
              terms
            </button>
            <Terms
              isOpen={modal === "terms of use"}
              onOpenChange={onOpenChange}
              onClose={() => setModal(null)}
            />
            <button
              type={"button"}
              onClick={() => setModal("privacy policy")}
              className={"font-medium footer-link"}
            >
              privacy
            </button>
            <Privacy
              isOpen={modal === "privacy policy"}
              onOpenChange={onOpenChange}
              onClose={() => setModal(null)}
            />
            <a
              href={"https://agencemalo.com/"}
              className={"font-medium footer-link"}
            >
              credits
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
