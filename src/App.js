import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header class="header">
        <a href="/" class="logo">Fuyad.</a>

        <nav class="navbar">
          <a href="/" class="active">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact</a>
        </nav>
      </header>

      <section class="home">
        <div class="home-content">
          <h1>Hi, I'm Fuyad Hasan Fahim</h1>
          <h3>Frontend Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum reprehenderit omnis velit laborum. Nisi
            fugiat exercitationem ipsam! Repudiandae a ullam illum tenetur, blanditiis libero, nihil et quas
            officiis, debitis eaque.</p>

          <div class="btn-box">
            <a href="/">Hire me</a>
            <a href="/">Let's Talk</a>
          </div>
        </div>

        <div class="home-sci">
          <a href="/"><i class='bx bxl-facebook-circle'></i></a>
          <a href="/"><i class='bx bxl-twitter'></i></a>
          <a href="/"><i class='bx bxl-linkedin'></i></a>
        </div>

        <span class="home-imgHover"></span>
      </section>
    </>
  );
}

export default App;
