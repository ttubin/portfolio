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
            <span>6년차 웹 퍼블리셔 정수빈</span>입니다.
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
                <p>VS Code, Photoshop, Figma, Notion, GitHub</p>
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
                  기업 웹사이트 및 마케팅 프로모션 페이지의 UI 구현과 운영을 담당했습니다. <br />
                  삼성 헬스 인앱 콘텐츠(5년 운영), 삼성 SDI 뉴스룸, HD 현대건설기계 디지털 카탈로그, 서울대학교 생활과학연구소 웹사이트 등 <br className={styles.web} />
                  다양한 프로젝트의 구축 및 유지보수에 참여했으며, 사용자 경험과 반응형 UI 구현을 중심으로 업무를 수행했습니다.
                </p>
              </li>
              <li>
                <p>
                  19.04 – 20.07
                  <span>볼드이엑스 I 웹 퍼블리셔</span>
                </p>
                <p>
                  기업 웹사이트 및 적응형 모바일 웹사이트 구축 프로젝트의 UI 구현을 담당했습니다. <br />
                  AJ셀카, FOW.TV, 부동산네비 웹사이트 등 다양한 프로젝트에 참여했으며, 반응형·적응형 환경에 맞춘 사용자 중심 <br className={styles.web} />
                  인터페이스 구현 경험을 쌓았습니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
