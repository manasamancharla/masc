import { useEffect } from "react";
import { useLocation, Link } from "react-router";

import { useTheme } from "../hooks/useTheme";
import { getSystemTheme } from "../context/ThemeContext";
import useScrollHandler from "../hooks/useScrollHandler";
import { cn } from "../lib/utils";
import { Dock, DockIcon } from "./ui/Dock";

import { Hand } from "./icons/Hand";
import { Sun } from "./icons/Sun";
import { Moon } from "./icons/Moon";
import { Blog } from "./icons/Blog";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  blog: (props: IconProps) => <Blog {...props} />,
  hand: (props: IconProps) => <Hand {...props} />,
};

const LINKS = {
  navbar: [
    { href: "/", icon: Icons.hand, label: "Home" },
    { href: "/blog", icon: Icons.blog, label: "Blog" },
  ],
};

const THEME = {
  navbar: [{ href: "#", icon: Moon, label: "Theme" }],
};

const Navbar = () => {
  const { navRef, isHidden, handleScroll } = useScrollHandler();
  const location = useLocation();
  const systemTheme = getSystemTheme();

  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark");
    } else {
      setTheme("system");
    }
  };

  const isDarkMode =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-50 transition-transform duration-200",
          isHidden ? "translate-y-[200%]" : "translate-y-0",
        )}
      >
        <Dock className="text-text" isDarkMode={isDarkMode}>
          {LINKS.navbar.map((item) => (
            <DockIcon key={item.label} label={item.label} className="relative">
              <Link
                to={item.href}
                aria-label={item.label}
                className={cn("rounded-full")}
              >
                <item.icon className="w-full h-full" />
              </Link>
              {location.pathname === item.href && (
                <div className="absolute -bottom-0.5 left-1/2 size-1 rounded-full bg-accent"></div>
              )}
            </DockIcon>
          ))}

          <div
            className={cn(
              `border-l  h-full`,
              isDarkMode ? " border-[#232B34]" : " border-[#93a1a1]",
            )}
          />

          {THEME.navbar.map((item) => (
            <DockIcon key={item.label}>
              {isDarkMode ? (
                <Moon
                  className="w-full h-full cursor-pointer"
                  onClick={toggleTheme}
                />
              ) : (
                <Sun
                  className="w-full h-full cursor-pointer"
                  onClick={toggleTheme}
                />
              )}
            </DockIcon>
          ))}
        </Dock>
      </nav>
    </>
  );
};

export default Navbar;
