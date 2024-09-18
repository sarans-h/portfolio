import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { useEffect, useState, useRef } from "react";

export default function Header({ scrollToSection }) {
  const [theme, setTheme] = useState("light");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <Navbar isBordered className="bg-transparent fixed z-20">
      <NavbarBrand className="flex-grow-0">
        <p className="font-bold text-large w-36">SARANSH</p>
      </NavbarBrand>

      {/* Navbar Content for Large Screens */}
      <NavbarContent className="hidden sm:flex gap-8" justify="start">
        <NavbarItem
          className="text-lg cursor-pointer"
          onClick={(e) => scrollToSection("home", e)}
        >
          Home
        </NavbarItem>
        <NavbarItem
          className="text-lg cursor-pointer"
          onClick={(e) => scrollToSection("skills", e)}
        >
          Skills
        </NavbarItem>
        <NavbarItem
          className="text-lg cursor-pointer"
          onClick={(e) => scrollToSection("projects", e)}
        >
          Projects
        </NavbarItem>
        <NavbarItem
          className="text-lg cursor-pointer"
          onClick={(e) => scrollToSection("contact", e)}
        >
          Contact
        </NavbarItem>
      </NavbarContent>

      {/* Button Group for Large Screens */}
      <NavbarContent className="hidden sm:flex gap-4 w-44" justify="end">
        <Button
          color="primary"
          variant="solid"
          className="text-sm"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/saransh-gupta-5aa509250/",
              "_blank"
            )
          }
        >
          Let's Connect!
        </Button>

        <Button color="primary" variant="solid">
          <a
            href="https://docs.google.com/document/d/1_b680x8N665t1MoElujJT0vnmMg0-tPkqV1govmvDZA/export?format=pdf"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Download Resume
          </a>
        </Button>
      </NavbarContent>

      {/* Dropdown Trigger for Small and Medium Screens */}
      <Button
        color="primary"
        variant="solid"
        className="sm:hidden"
        onClick={toggleDropdown}
      >
        Menu
      </Button>

      {/* Dropdown Menu for Small and Medium Screens */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 bg-white backdrop-blur-md shadow-lg z-10 sm:hidden rounded-lg p-4 w-64 mx-auto mt-2"
          style={{ position: "absolute", top: "71%", left: "72%", transform: "translateX(-50%)", marginTop: "8px" }}
        >
          <NavbarItem
            className="text-lg cursor-pointer p-4"
            onClick={(e) => {
              scrollToSection("home", e);
              toggleDropdown();
            }}
          >
            Home
          </NavbarItem>
          <NavbarItem
            className="text-lg cursor-pointer p-4"
            onClick={(e) => {
              scrollToSection("skills", e);
              toggleDropdown();
            }}
          >
            Skills
          </NavbarItem>
          <NavbarItem
            className="text-lg cursor-pointer p-4"
            onClick={(e) => {
              scrollToSection("projects", e);
              toggleDropdown();
            }}
          >
            Projects
          </NavbarItem>
          <NavbarItem
            className="text-lg cursor-pointer p-4"
            onClick={(e) => {
              scrollToSection("contact", e);
              toggleDropdown();
            }}
          >
            Contact
          </NavbarItem>

          <div className="p-4">
            <Button
              color="primary"
              variant="solid"
              className="w-full"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/saransh-gupta-5aa509250/",
                  "_blank"
                );
                toggleDropdown();
              }}
            >
              Let's Connect!
            </Button>

            <Button color="primary" variant="solid" className="w-full mt-2">
              <a
                href="https://docs.google.com/document/d/1hlgeNyYM50XSJe_Lau7AvGJgpHhDGAlF/export?format=pdf"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </Navbar>
  );
}
