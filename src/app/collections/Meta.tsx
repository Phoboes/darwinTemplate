import type { GlobalConfig } from "payload";

export const Meta: GlobalConfig = {
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
