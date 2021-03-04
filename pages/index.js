import getConfig from "next/config";

import styles from "../styles/Home.module.css";

function Home({ linkHref, linkText }) {
  return (
    <div className={styles.container}>
      <a href={linkHref}>{linkText}</a>
    </div>
  );
}

Home.getInitialProps = async () => {
  const { publicRuntimeConfig } = getConfig();
  console.log('cfg', publicRuntimeConfig);
  return publicRuntimeConfig;
};

export default Home;
