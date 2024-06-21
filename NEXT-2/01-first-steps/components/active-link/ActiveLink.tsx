'use client';

import Link from "next/link";

import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface activeLinkProps {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: activeLinkProps) => {
  const pathName = usePathname();

  return (
    <Link href={path} className={`${style.link} ${ (pathName === path) && style['active-link'] }`}>
      {text}
    </Link>
  );
};
