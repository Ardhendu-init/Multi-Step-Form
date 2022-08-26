import { valueProps } from "../../model";
import  {  createContext } from "react";

interface PageContextInterface {
  handlePrev: () => void;
  handleNext: () => void;
}

export const PageContext = createContext<PageContextInterface | null>(null);