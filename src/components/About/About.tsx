import Image from "next/image";

import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.title}>about me</h1>
      <div className={styles.content}>
        <div className={styles.photo}>
          <Image src="/images/profile.png" alt="profile" fill={true} priority />
        </div>
        <div className={styles.info}>
          <p className={styles.text}>
            안녕하세요. <br />
            <span>7년차 웹 퍼블리셔 정수빈</span>입니다.
          </p>
          <div className={styles.tech}>
            <h3>tech stack</h3>
            <ul>
              <li>
                <p>Markup</p>
                <p>HTML5, CSS3, Sass, Responsive</p>
              </li>
              <li>
                <p>Interaction</p>
                <p>JavaScript, jQuery, GASP</p>
              </li>
              <li>
                <p>Frontend</p>
                <p>Next.js(기초), React(hook 사용경험), TypeScript (기초)</p>
              </li>
              <li>
                <p>Tools</p>
                <p>VS Code, Adobe Photoshop, Figma, Notion, GitHub</p>
              </li>
            </ul>
          </div>
          <div className={styles.expe}>
            <h3>experience</h3>
            <ul>
              <li>
                <p>
                  20.09 – 25.12
                  <span>㈜리시드 I 웹 퍼블리셔</span>
                </p>
                <p>
                  기업 웹사이트, 프로모션 페이지, 모바일 콘텐츠 등 다양한 구축 및 운영 프로젝트의 UI 퍼블리싱을 담당했습니다. <br className={styles.web} />
                  반응형 웹, WebView, CMS 등 다양한 서비스 환경에서 UI 를 구현하고 운영했으며, <br className={styles.web} />
                  사용자 경험을 고려한 퍼블리싱과 웹 표준·접근성을 준수한 UI 개선 및 유지보수를 수행했습니다.
                </p>
              </li>
              <li>
                <p>
                  19.04 – 20.07
                  <span>볼드이엑스 I 웹 퍼블리셔</span>
                </p>
                <p>
                  기업 웹사이트 및 모바일 웹 구축 프로젝트의 UI 퍼블리싱을 담당했습니다. <br className={styles.web} />
                  적응형·반응형 웹 환경에서 다양한 디바이스에 최적화된 UI를 구현했으며, <br className={styles.web} />
                  사용자 중심의 인터페이스 구축과 유지보수를 수행했습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
