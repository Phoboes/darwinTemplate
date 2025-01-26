import type { GlobalConfig } from "payload";

export const Page: GlobalConfig = {
  slug: "homepage",
  fields: [
    { name: "title", type: "text" },
    { name: "content", type: "textarea" },
    { name: "image", type: "upload", relationTo: "media" },
  ],
};
