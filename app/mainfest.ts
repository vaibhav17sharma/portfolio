import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vaibhav Sharma | WebDEV",
    short_name: "VaibDEV",
    description: "Welcome to the portfolio of Vaibhav Sharma",
    start_url: "/",
    display: "standalone",
    lang: "en",
    dir: "ltr",
    icons: [
        {
          src: '/icon.png',
          sizes: 'any',
        },
      ],
  };
}
