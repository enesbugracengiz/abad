import React from "react";
import Header from "../components/Header";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />

      {/* Main Content */}
      <main className="main-content">
        <h1 className="main-title">ÖNE ÇIKAN PROJELER</h1>

        {/* Section 1 */}
        <section className="content-section">
          <h2>Section 1</h2>
          <p>Bu bölüm daha sonra oluşturulacak.</p>
        </section>

        {/* Section 2 */}
        <section className="content-section">
          <h2>Section 2</h2>
          <p>Bu bölüm daha sonra oluşturulacak.</p>
        </section>

        {/* Section 3 */}
        <section className="content-section">
          <h2>Section 3</h2>
          <p>Bu bölüm daha sonra oluşturulacak.</p>
        </section>

        {/* Section 4 */}
        <section className="content-section">
          <h2>Section 4</h2>
          <p>Bu bölüm daha sonra oluşturulacak.</p>
        </section>

        {/* Section 5 */}
        <section className="content-section">
          <h2>Section 5</h2>
          <p>Bu bölüm daha sonra oluşturulacak.</p>
        </section>

        {/* Section 6 */}
        <section className="content-section">
          <h2>Section 6</h2>
          <p>Bu bölüm daha sonra oluşturulacak.</p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
