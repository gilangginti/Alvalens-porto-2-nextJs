import Footer from "@/components/Footer";

export const metadata = {
	title: "Gin.Tech | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
