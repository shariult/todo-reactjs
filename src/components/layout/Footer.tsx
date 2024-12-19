import Button from "../ui/Button";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <p className={"container " + styles["copyright"]}>
        Copyright &copy; 2024{" "}
        <Button variant="link" to="https://shariul.com">
          Shariul
        </Button>
        . All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
