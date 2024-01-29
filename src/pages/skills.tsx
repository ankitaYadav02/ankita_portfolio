import React from "react";
import Footer from "../components/Footer.astro";
import Header from "../components/Header.astro";
import { SITE_TITLE } from "../consts";

export const Astro = () => {
  console.log("djhjdhkd");
  return (
    <>
      {" "}
      <Header title={SITE_TITLE} />
      <div class="wrapper">
        <div class:list={["skills", "blue"]}>
          <span>Javascript</span>
        </div>
        <div class:list={["skills", "blue"]}>
          <span>Typescript</span>
        </div>
        <div class:list={["skills", "blue"]}>
          <span>HTML</span>
        </div>
        <div class:list={["skills", "blue"]}>
          <span>CSS3</span>
        </div>
      </div>
      <div class="wrapper">
        <div class:list={["skills", "green"]}>
          <span>Reactjs</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>Redux</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>React-Router</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>Storybook</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>Vue</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>Vuex</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>ReactQuery</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>Momentjs</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>Scss</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>Material UI</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>Tailwind</span>
        </div>
        <div class:list={["skills", "green"]}>
          <span>JQuery</span>
        </div>
      </div>
      <Footer />
    </>
  );
};
