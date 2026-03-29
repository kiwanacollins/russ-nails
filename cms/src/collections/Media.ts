import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    imageSizes: [
      {
        name: "productCard",
        width: 900,
        height: 1100,
        fit: "cover",
      },
    ],
    adminThumbnail: "productCard",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
