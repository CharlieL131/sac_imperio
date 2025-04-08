import styles from "./page.module.css";
import HeaderImperio from "@/components/Header";
import SacCard from "@/components/SacCard";

export default function Home() {
  
  return (
    <div className={styles.container}>
      <HeaderImperio />
      <main className={styles.body}>
        <SacCard icon = "bi bi-telephone-fill" title = "Telefone SAC" isOnline = {true}>
          <h3>(81) 3198-4848</h3>
        </SacCard>
      </main>
    </div>
  );
}