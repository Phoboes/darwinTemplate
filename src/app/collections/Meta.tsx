import type { CollectionConfig } from "payload";

export const Meta: CollectionConfig = {
  slug: "meta",
  fields: [
    { name: "title", type: "text" },
    {
      name: "favico",
      type: "upload",
      relationTo: "media",
    },
    { name: "description", type: "text" },
  ],
};
