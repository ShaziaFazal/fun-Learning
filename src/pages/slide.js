import React from "react";
import Header from "../components/Header";
import StoryElements from "../components/StoryElements";
import LessonNote from "../components/LessonNote";
import Footer from "../components/Footer";
import Layout from "../components/Layout/index";

const Slide = () => {
  return (
    <Layout>
      <div className="min-w-md mx-4">
        <Header />
        <div className="bg-white rounded-lg p-6">
          <StoryElements />
          <LessonNote />
        </div>

        <Footer />
      </div>
    </Layout>
  );
};

export default Slide;
