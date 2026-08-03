import { BackToTop } from "@/components/back-to-top";
import { PortfolioPage } from "@/components/portfolio-sections";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <PortfolioPage />
      <BackToTop />
    </>
  );
}
