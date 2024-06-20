import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectBTN = ()=>{
    return <ConnectButton
    showBalance={{
        smallScreen: true,
        largeScreen: false,
    }}
/> 
}

export default ConnectBTN;