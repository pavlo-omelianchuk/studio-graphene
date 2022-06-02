import React, { useEffect } from "react";
import { Navigation } from "../Navidation/Navigation";
import { SectionIndicators } from "../Navidation/SubsectionIdentifier";
import { HomeLogo } from "./HomeLogo";
import { RequestInfo } from "./RequestInfo";

import useIntersect from "../utils/useIntersection";
import { useSectionVisibility } from "../utils/appContext";

import image from "../../assets/pexels-lukas-616401.webp";
import "./Home.scss";

export const Home = () => {
  const [ref, entry] = useIntersect({});
  const { setSection1Visibility } = useSectionVisibility();

  useEffect(() => {
    const isActive = entry.isIntersecting ? "active" : "";
    setSection1Visibility(isActive);
  }, [setSection1Visibility, entry.isIntersecting]);

  return (
    <section className="home_wrapper" ref={ref}>
      <SectionIndicators />
      <Navigation />
      <RequestInfo />
      <img src={image} alt="Healthy food" className="home_image" />
      <div className="home_message_wrapper">
        <HomeLogo />
        <h1 className="home_message">
          <span className="home_message__pre_main">The Best Foodie</span>{" "}
          <span className="home_message__main">Experience</span>{" "}
          <span className="home_message__secondary">now in London</span>
        </h1>
      </div>
    </section>
  );
};
