import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/profile.jpg" width={200} height={300} alt="profile" />
      <h1 className={styles["title-homepage"]}>Welcome Ananta</h1>
    </Layout>
  );
}
