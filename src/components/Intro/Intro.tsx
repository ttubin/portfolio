import styles from "./Intro.module.scss";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <h1 className={`${styles.text} ${styles.text__l}`}>
        web <br />
        <p>portfolio</p>
      </h1>
      <p className={`${styles.text} ${styles.text__m}`}>Frontend-focused Web Publisher</p>
      <p className={`${styles.text} ${styles.text__s}`}>
        6년 이상의 UI 퍼블리싱 경험으로 <br />
        반응형, 실무형 인터페이스를 구축합니다. <br />
        <span>디자인과 개발 사이를 연결하는 UI를 만듭니다.</span>
      </p>
    </section>
  );
}
