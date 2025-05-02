"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

export function FloatingNavbar({
  children,
  isRegisterPage = false,
  title,
}: {
  children: React.ReactNode;
  isRegisterPage?: boolean;
  title?: string;
}) {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Gallery",
      link: "#gallery",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo title={title} />
          {!isRegisterPage && <NavItems items={navItems} />}
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" href="/register">
              Register
            </NavbarButton>
            <NavbarButton variant="dark" href="/admin">
              Login
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo title={title} />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {!isRegisterPage &&
              navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
                href="/register"
              >
                Register
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="dark"
                className="w-full"
                href="/admin"
              >
                Login
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {children}
    </div>
  );
}

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
//       <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-8">
//         <Link href="/" className="flex items-center gap-2">
//           <img src="/hero-icon.png" alt="" className="h-[4vh]" />
//           <span className="text-sm md:text-xl font-bold">
//             <span className="text-[#50d4e3]">Course</span>
//             <span className="text-[#ee6352]">Hub</span>
//           </span>
//         </Link>
//         <nav className="flex items-center gap-4 md:gap-8">
//           <Link
//             href="/"
//             className="text-sm md:text-base font-medium transition-colors hover:text-[#50d4e3] text-[#ee6352]"
//           >
//             Home
//           </Link>
//           <Link
//             href="/register"
//             className="text-sm md:text-base font-medium transition-colors hover:text-[#50d4e3] text-[#ee6352]"
//           >
//             Register
//           </Link>
//           <Button asChild variant="outline" size="lg" className="text-white bg-[#ee6352] hover:bg-[#50d4e3]">
//             <Link href="/admin">
//               Login
//             </Link>
//           </Button>
//         </nav>
//       </div>
//     </header>
//   );
// }
