import React from "react";
import Logo from "../assets/headerlogo.png";
import { TbBrandTelegram } from "react-icons/tb";
import { BsTwitter } from "react-icons/bs";
import { TiChartLine } from "react-icons/ti";

const Header = () => {
  return (
    <header className="py-5 w-full absolute top-0 bg-secondary">
      <div className="container flex justify-between items-center">
        <a
          href=""
          className="text-3xl font-Pokemon text-primary capitalize tracking-wide out-txt"
        >
          never fucking selling
        </a>
        <div className="hidden lg:flex gap-5">
          <a
            href="https://t.me/+GiMpDkGdnkVhN2Ex"
            className="flex items-center text-3xl gap-3"
          >
            <TbBrandTelegram className="text-white" />
            telegram
          </a>
          <a
            href="https://twitter.com/NeverFcknSell"
            className="-rotate-2 flex items-center text-3xl gap-3"
          >
            <BsTwitter className="text-white" />
            twitter
          </a>
          <a href="https://birdeye.so/token/DcoTTEL3T9T9vm9D4DL2RNe7gDSqVytzydEZWcTdp48m?chain=solana" className="flex items-center outlinet  text-3xl gap-3">
            <TiChartLine className="text-white" />
            BIRDEYE
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
