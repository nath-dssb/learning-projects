import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "SEO Title",
  keywords: ["About Page", "Nath", "Description"],
};

const aboutPage = () => {
  return (
    <>
      <span>About Page</span>
    </>
  );
};

export default aboutPage;
