import type { CollectionConfig } from "payload";

// TODO: Return aws url not local
export const Media: CollectionConfig = {
  slug: "media",
  typescript: {
    interface: "Media",
  },
  upload: true,
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "alt",
      type: "text",
      //required: true,
    },
  ],
};
