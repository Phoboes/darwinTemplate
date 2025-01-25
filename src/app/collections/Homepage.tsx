import type { CollectionConfig } from "payload";

export const Page: CollectionConfig = {
  slug: "homepage",
  fields: [
    { name: "title", type: "text" },
    { name: "content", type: "textarea" },
    { name: "image", type: "upload", relationTo: "media" },
  ],
};
