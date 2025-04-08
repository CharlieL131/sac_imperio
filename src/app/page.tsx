import styles from "./page.module.css";
import HeaderImperio from "@/components/Header";
import SacCard from "@/components/SacCard";

export default function Home() {
  
  return (
    <div className={styles.container}>
      <HeaderImperio />
      <main className={styles.body}>
        <div className={styles.centerRow}>

          <div className={styles.contact}>
            <SacCard icon = "bi bi-telephone-fill" title = "Telefone SAC" isOnline = {true}>
              <h3>(81) 3198-4848</h3>
            </SacCard>
            <SacCard icon = "bi bi-chat-dots-fill" title = "Telefone SAC" isOnline = {true}>
              <h3>(81) 3198-4848</h3>
            </SacCard>
            <SacCard icon = "bi bi-whatsapp" title = "Telefone SAC" isOnline = {true}>
              <h3>(81) 3198-4848</h3>
            </SacCard>
          </div>
        </div>
      </main>
    </div>
  );
}