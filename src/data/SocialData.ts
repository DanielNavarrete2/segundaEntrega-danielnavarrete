import InstagramLogo from "../assets/instagram-logo.png";
import XLogo from "../assets/x-logo.png";
import FacebookLogo from "../assets/facebook-logo.png";

interface SocialLink {
  name: string;
  href: string;
  icon: string;
  hoverColor: string;
}

interface SocialSection {
  title: string;
  links: SocialLink[];
}

export const SocialData: SocialSection = {
  title: "Síguenos",
  links: [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: InstagramLogo.src, 
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "X",
      href: "https://x.com",
      icon: XLogo.src,
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: FacebookLogo.src,
      hoverColor: "hover:text-blue-600",
    },
  ],
};
