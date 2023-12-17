import { Metadata } from "next";

export default function AboutPage() {
  return <h1 className="text-7xl ">About Page</h1>;
}

export const metadata: Metadata = {
  title: "About",
  description: "About description",
  keywords: ["About page", "Eduardo"],
};
