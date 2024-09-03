import React from "react";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center mt-24 mb-10 text-gray-600">
      <p>Copyright 2023. 조하현. All rights reserved.</p>
      <a href="https://github.com/hyoni-ch" target="_blank">
        <BsGithub color="#666666" size="20" />
      </a>
    </footer>
  );
}
