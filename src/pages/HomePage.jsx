import React from "react";
import Header from "../components/Header";
import MapSection from "../components/MapSection";
import FeaturedProjects from "../components/FeaturedProjects";
import Categories from "../components/Categories";
import ECertificate from "../components/ECertificate";
import News from "../components/News";
import ProjectGallery from "../components/ProjectGallery";

const HomePage = () => {
  return (
    <div className="home-page bg-white">
      <Header />

      {/* Main Content */}
      <main className="main-content">
        {/* Section 1 - Harita */}
        <MapSection />

        {/* Section 2 - Öne Çıkan Projeler */}
        <FeaturedProjects />

        {/* Section 3 - Categories */}
        <Categories />

        {/* Section 4 - E-Sertifika */}
        <ECertificate />

        {/* Section 5 - Bizden Haberler */}
        <News />

        {/* Section 6 - Proje Galerisi */}
        <ProjectGallery />
      </main>
    </div>
  );
};

export default HomePage;
