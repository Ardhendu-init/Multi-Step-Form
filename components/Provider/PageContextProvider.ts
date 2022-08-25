import { valueProps } from "../../model";
import  {  createContext } from "react";

interface PageContextInterface {
  handlePrev: (values: valueProps) => void;
  handleNext: (values: valueProps) => void;
}

export const PageContext = createContext<PageContextInterface | null>(null);