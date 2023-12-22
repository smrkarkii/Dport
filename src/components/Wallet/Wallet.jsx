import { useState } from "react";
import ABI from "./ABI.json";
import Web3 from "web3";
import React from "react";
import "./Wallet.jsx";

const Wallet = () => {
  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      //contract instance
      const contract = new web3.eth.Contract(
        ABI,
        "0xddaAd340b0f1Ef65169Ae5E41A8b10776a75482d"
      );
      console.log(contract);
    } catch (err) {
      alert("Please install metamask");
    }
  };
  return (
    <div>
      <button className="connectBTN" onClick={init}>
        Connect Metamask
      </button>
    </div>
  );
};

export default Wallet;
