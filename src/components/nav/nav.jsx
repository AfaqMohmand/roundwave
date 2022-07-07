import React from "react";
import styles from "./nav.module.css";
import Logo from "../../Photo/Logo.png";

// Icons
import Op from "../../Photo/ham.png";
import Xx from "../../Photo/xx.png";

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const Open = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.Tone}>
      <div className={styles.None}>
        <One />
        <div className={styles.Mobile} onClick={Open}>
          {open ? <img src={Xx} /> : <img src={Op} />}
        </div>
        <div onClick={Open} className={open ? styles.Menu : styles.No}>
          <Two />
          <Three />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

// One
function One() {
  return (
    <div className={styles.One}>
      <img src={Logo} alt="logo" />
    </div>
  );
}

// Two
function Two() {
  return (
    <div className={styles.Two}>
      <ItemsTwo data={`About`} />
      <ItemsTwo data={`Utilities`} />
      <ItemsTwo data={`Road Map`} />
      <ItemsTwo data={`Team`} />
      <ItemsTwo data={`Traits`} />
      <ItemsTwo data={`FAQs`} />
      <ItemsTwo data={`Mint`} />
    </div>
  );
}

// Three
function Three() {
  return (
    <div className={styles.Three}>
      <button>Connect Wallet</button>
    </div>
  );
}

// items Two
function ItemsTwo({ data }) {
  return <div className={styles.TwoI}>{data}</div>;
}
