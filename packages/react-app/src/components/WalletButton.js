import React, {useState, useEffect} from 'react';
import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core';
import styles from '../styles';

const WalletButton = () => {
  const [accountAddress, setAccountAddress] = useState('');
  /*ethereum name service lookup */
  const {ens} = useLookupAddress();
  const {account, activateBrowserWallet, deactivate} = useEthers();
  /*When account, ens or setAccountAddress changes, call useEffect function */
  useEffect(()=>{
    if(ens){
      setAccountAddress(ens);
    } else if(account){
      setAccountAddress(shortenAddress(account));
    } else{
      setAccountAddress('')
    }
  },[account, ens, setAccountAddress])
  return (
    <button 
    onClick={() =>{
      /*When the button is clicked, If there is no account, browser prompts the user to connect*/
      if (!account){
        activateBrowserWallet();
      } else{
        deactivate();
      }
    }}
    className={styles.walletButton}
    >
      {!accountAddress ? "Connect Wallet" : accountAddress}
    </button>
  )
}

export default WalletButton