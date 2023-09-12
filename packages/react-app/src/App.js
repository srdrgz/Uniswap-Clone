import React from "react";
import { useEthers } from "@usedapp/core";

import styles from "./styles";
import { usePools } from "./hooks";
import { unilogo } from "./assets";
import { Exchange, Loader, WalletButton } from "./components";

const App = () => {
  const { account } = useEthers();
  const [loading, pools] = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={unilogo}
            alt="uniswap-logo"
            className="w-40 h-42 object-contain"
          />
          <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>TOKEN SWAP</h1>
          <p className={styles.subTitle}>Decentralized Exchange App for CZ4153</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradien" />
              <div className={styles.exchange}>
                {account ? (
                  loading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradien" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;