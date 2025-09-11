import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiTypescript,
  SiSpringboot,
  SiDjango,
  SiPostgresql,
  SiJunit5,
  SiSelenium
} from "react-icons/si";

import {
    FaDiscord,
    FaGithub,
    FaLinkedin
} from "react-icons/fa6";

import {
    FaJava,
    FaPython,
    FaReact,
    FaNodeJs,
    FaAws,
    FaDocker,
    FaYoutube,
    FaMicrophoneAlt
} from "react-icons/fa";

import {
    VscAzure
} from "react-icons/vsc";

import {
    DiMysql,
    DiMongodb
} from "react-icons/di";

import {
    GiJesterHat
} from "react-icons/gi";

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  //Languages
  javascript: SiJavascript,
  typescript: SiTypescript,
  java: FaJava,
  //frameworks
  python: FaPython,
  springboot: SiSpringboot,
  react: FaReact,
  node: FaNodeJs,
  django: SiDjango,
  //cloud&devops
  aws: FaAws,
  azure: VscAzure,
  docker: FaDocker,
  //databases
  sql: DiMysql,
  postgres: SiPostgresql,
  mongo: DiMongodb,
  //testing
  junit: SiJunit5,
  jest: GiJesterHat,
  selenium: SiSelenium,
  youtube: FaYoutube,
  podcast: FaMicrophoneAlt
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
