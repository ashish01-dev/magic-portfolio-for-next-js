"use client";

import Masonry from "react-masonry-css";
import { Media } from "@once-ui-system/core";
import styles from "./Gallery.module.scss";

type GalleryImage = {
  src: string;
  alt: string;
  orientation?: "horizontal" | "vertical";
};

const gallery = {
  images: [
    { src: "/images/placeholder1.jpg", alt: "Gallery Image 1", orientation: "horizontal" },
    { src: "/images/placeholder2.jpg", alt: "Gallery Image 2", orientation: "vertical" },
    { src: "/images/placeholder3.jpg", alt: "Gallery Image 3", orientation: "horizontal" },
    { src: "/images/placeholder4.jpg", alt: "Gallery Image 4", orientation: "vertical" },
    { src: "/images/placeholder5.jpg", alt: "Gallery Image 5", orientation: "horizontal" },
    { src: "/images/placeholder6.jpg", alt: "Gallery Image 6", orientation: "vertical" }
  ] as GalleryImage[]
};

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 2,
    720: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map((image: GalleryImage, index: number) => (
        <Media
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          className={styles.gridItem}
        />
      ))}
    </Masonry>
  );
}
