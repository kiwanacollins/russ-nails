import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "price", "featured", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        {
          label: "Aftercare",
          value: "Aftercare",
        },
        {
          label: "Polish",
          value: "Polish",
        },
        {
          label: "Body Care",
          value: "Body Care",
        },
        {
          label: "Accessories",
          value: "Accessories",
        },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "images",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      required: true,
    },
  ],
};
