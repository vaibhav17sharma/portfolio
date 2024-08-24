import { MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.BASE_URL}`,
            changeFrequency: "daily",
            priority: 1,
        }
    ];
}