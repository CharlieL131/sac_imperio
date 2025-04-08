import styles from "./page.module.css";
import HeaderImperio from "@/components/Header";

export default function Home() {
  
  return (
    <div className={styles.container}>
      <HeaderImperio />
      <main className={styles.body}>
        
      </main>
    </div>
  );
}