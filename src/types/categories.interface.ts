import { ComponentType, SVGProps } from "react";

export interface ICategory {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: string;
  link: string;
}
