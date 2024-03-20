// AboutUsSection.js
import React from 'react';
import styles from "./styles.module.css";

const AboutUsSection = () => (
  <section id={styles.about} className={styles.about_section}>
    <div className={styles.container}>
      <h2>Who We Are</h2>
      <p>Founded in 2007, Our Company has been dedicated to providing high-quality uniforms for various sectors including schools, healthcare, hospitality, and more. With over 17 years of experience, we pride ourselves on our commitment to excellence and customer satisfaction.</p>
      <p>Our mission is to empower professionals across industries with uniforms that offer both style and functionality. We believe in the power of a well-crafted uniform to make every day extraordinary.</p>
      <p>Contact us to learn more about how we can serve your organization's needs.</p>
      <button className={styles.cta_button_ABUS}>Learn More</button>
    </div>
    <br></br>
  </section>
);

export default AboutUsSection;
