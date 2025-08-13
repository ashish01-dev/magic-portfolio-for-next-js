// src/app/gallery/page.tsx
import { Column, Heading, Meta } from "@once-ui-system/core";
import { gallery, baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    path: gallery.path,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
  });
}

export default function Gallery() {
  return (
    <Column maxWidth="m">
      <Heading variant="display-strong-l">{gallery.title}</Heading>
      {/* Render gallery items later */}
    </Column>
  );
}
