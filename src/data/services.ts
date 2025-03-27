import { FaHammer, FaTree, FaTruckPickup } from "react-icons/fa";
import { Service } from "../types/Service";

export const services: Service[] = [
  {
    title: "Terrassement",
    description:
      "Mise à niveau de terrain, création d’accès, préparation de chantier.",
    icon: FaTruckPickup,
  },
  {
    title: "Tranchées techniques",
    description:
      "Création de tranchées pour raccordement réseaux (eau, électricité, etc.)",
    icon: FaHammer,
  },
  {
    title: "Aménagement paysager",
    description:
      "Réalisation de cours, allées, enrochements, gravier, terre végétale...",
    icon: FaTree,
  },
];
