"use client";
// import { DropIcon } from "@/components/icons/drop-icon";
// import { PackageIcon } from "@/components/icons/package-icon";
import Link from "next/link";
import { useState } from "react";

interface NavLink {
  href: string;
  label: string;
}

interface CollapsibleItemProps {
  label: string;
  items: NavLink[];
}

function CollapsibleItem({ label, items }: CollapsibleItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative cursor-pointer overflow-hidden">
      {/* This first container is for the triggering  */}
      <button
        className={`px-2 transition-all duration-500 flex flex-row-reverse w-60 py-1  items-center justify-end gap-7 ${isOpen ? "bg-white text-[#9E1D22]" : ""} rounded-md`}
        onClick={toggleCollapse}
      >
        <span
          className={`w-5 block ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-all duration-500`}
        >
          {/* <DropIcon /> */}
        </span>

        <span className="font-semibold">{label}</span>
        <span
          className={`w-8 h-8 ${isOpen ? "text-[#9E1D22]" : "text-white"} `}
        >
          {/* <PackageIcon /> */}
        </span>
      </button>
      {/* This is the collapsible container  */}
      <div
        className={`transition-all duration-500 overflow-hidden flex flex-col gap-2  text-white relative   ${
          isOpen ? "max-h-screen mt-3" : "max-h-0 mt-0"
        }`}
      >
        {items?.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.href}
              className=" py-2 pl-2 hover:bg-white hover:text-[#9E1D22] rounded-md flex-1"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CollapsibleItem;
