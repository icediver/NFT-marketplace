import { ICategory } from "@/types/categories.interface";
import PaintBrush from "@/assets/icons/categories/PaintBrush.svg";
import Basketball from "@/assets/icons/categories/Basketball.svg";
import Camera from "@/assets/icons/categories/Camera.svg";
import MagicWand from "@/assets/icons/categories/MagicWand.svg";
import MusicNotes from "@/assets/icons/categories/MusicNotes.svg";
import Planet from "@/assets/icons/categories/Planet.svg";
import Swatches from "@/assets/icons/categories/Swatches.svg";
import VideoCamera from "@/assets/icons/categories/VideoCamera.svg";

export const categories: ICategory[] = [
  {
    title: "Art",
    image: "/images/categories/category-01.png",
    Icon: PaintBrush,
    link: "/category/art",
  },
  {
    title: "Collectibles",
    image: "/images/categories/category-02.png",
    Icon: Swatches,
    link: "/category/collectibles",
  },
  {
    title: "Music",
    image: "/images/categories/category-03.png",
    Icon: MusicNotes,
    link: "/category/music",
  },
  {
    title: "Photography",
    image: "/images/categories/category-04.png",
    Icon: Camera,
    link: "/category/photography",
  },
  {
    title: "Video",
    image: "/images/categories/category-05.png",
    Icon: VideoCamera,
    link: "/category/video",
  },
  {
    title: "Utility",
    image: "/images/categories/category-06.png",
    Icon: MagicWand,
    link: "/category/utility",
  },
  {
    title: "Sports",
    image: "/images/categories/category-07.png",
    Icon: Basketball,
    link: "/category/sports",
  },
  {
    title: "Virtual Worlds",
    image: "/images/categories/category-08.png",
    Icon: Planet,
    link: "/category/virtual-worlds",
  },
];
