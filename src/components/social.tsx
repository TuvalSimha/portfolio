import Link from "next/link";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Image from "next/image";
import React from "react";

type Links = {
  href: string;
  link: React.ReactNode;
};

const SocialLinks: Links[] = [
  {
    href: "https://github.com/TuvalSimha",
    link: <Image src={GithubIcon} alt="Github Icon" />,
  },
  {
    href: "https://www.linkedin.com/in/tuvalsimha",
    link: <Image src={LinkedinIcon} alt="Linkedin Icon" />,
  },
];

export function Social() {
  return (
    <div className="socials flex flex-row gap-2">
      {SocialLinks.map((link, index) => (
        <Link href={link.href} key={index} target="_blank">
          {link.link}
        </Link>
      ))}
    </div>
  );
}
