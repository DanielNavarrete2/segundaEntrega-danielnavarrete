interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const FooterData: FooterSection[] = [
  { title: "Contacto", links: [
      { text: "+569 123 456 789", href: "#" },
      { text: "contacto@gmail.com", href: "#" }
  ]},

];



