import { useState } from "react";
import ABI from "./ABI.json";
import Web3 from "web3";
import React from "react";
import "./Wallet.css";

const Wallet = (saveState) => {
  const [connected, setConnected] = useState(false);

  function butt() {
    console.log("btn clicked");
  }
  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      //contract instance
      const contract = new web3.eth.Contract(
        ABI,
        "0xddaAd340b0f1Ef65169Ae5E41A8b10776a75482d"
      );
      setConnected(true);
      saveState({ web3: web3, contract: contract });
      console.log(contract);
    } catch (err) {
      console.log("Please install metamask");
    }
  };

  return (
    <div className="header">
      <button className="connectBTN" disabled={!connected} onClick={init}>
        {connected ? "Connect Metamask" : "Connected"}
      </button>
    </div>
  );
};

export default Wallet;
