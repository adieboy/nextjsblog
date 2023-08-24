import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/16552753/pexels-photo-16552753/free-photo-of-abstract-steel-hexagon-pattern.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>
            Developer/Photographer/VideoGrapher
          </h1>
          <h2 className={styles.desc}> Lorem ipsum dolor sit amet.</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            provident nesciunt eveniet excepturi culpa consequuntur perferendis
            veritatis id,
            <br />
            <br />
            exercitationem sunt veniam natus. Velit, deleniti ab.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            exercitationem corrupti impedit fugiat recusandae! Tempore quae
            ratione numquam maiores saepe modi corporis dolor,
            <br />
            <br />
            tempora fugit odio repellat, facere aliquid voluptatibus?
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
