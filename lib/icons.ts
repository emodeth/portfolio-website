import { FaReact } from "react-icons/fa";
import { SiVite, SiReactquery, SiShadcnui } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoCss3,
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { LuCode } from "react-icons/lu";
import { IconType } from "react-icons";

export const iconMap: Record<string, IconType> = {
  FaReact: FaReact,
  SiVite: SiVite,
  BiLogoJavascript: BiLogoJavascript,
  BiLogoTypescript: BiLogoTypescript,
  BiLogoTailwindCss: BiLogoTailwindCss,
  BiLogoCss3: BiLogoCss3,
  RiNextjsFill: RiNextjsFill,
  SiReactquery: SiReactquery,
  SiShadcnui: SiShadcnui,
};

export const getTechIcon = (name: string): IconType => {
  return iconMap[name] || LuCode;
};
