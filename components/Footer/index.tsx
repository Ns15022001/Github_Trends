import style from "./Footer.module.css";

export default function FooterComponent() {
  return (
    <footer className={style.footer}>
      <a
        href="https://github.com/Ns15022001/Github_Trends"
        rel="noopener"
        target="_blank"
        className={style.link}
      >
        View source code
      </a>
    </footer>
  );
}
