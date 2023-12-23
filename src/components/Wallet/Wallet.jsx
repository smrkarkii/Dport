import { useState } from "react";
import ABI from "./ABI.json";
import Web3 from "web3";
import React from "react";
import "./Wallet.css";

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(false);

  const initialize = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      //contract instance
      const contract = new web3.eth.Contract(
        ABI,
        "0xd9145CCE52D386f254917e481eB44e9943F39138"
      );
      setConnected(true);
      saveState({ web3: web3, contract: contract });
      console.log(contract);
    } catch (err) {
      alert("Please connect metamask");
      // console.log("Please install metamask");
    }
  };

  return (
    <div className="header">
      <button className="connectBTN" disabled={connected} onClick={initialize}>
        {!connected ? "Connect Metamask" : "Connected"}
      </button>
    </div>
  );
};

export default Wallet;
