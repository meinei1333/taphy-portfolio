"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import SelfIntroduction from "./SelfIntroduction";
import Demo from "./Demo";
import Tools from "./Tools";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Self-introduction");

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>My Demo</title>
        <meta name="description" content="Taphy's Page" />
      </Head>

      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Hello, I am Taphy</h1>
        <p className="text-2xl font-bold">Front End/ H5 game Developer</p>
        <a href="https://github.com/meinei1333" target="_blank" rel="noopener noreferrer">github</a>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="flex space-x-4 mb-6">
          <button onClick={() => setActiveTab("Self-introduction")} className={`px-4 py-2 rounded-lg ${activeTab === "Self-introduction" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border"}`}>Self-introduction</button>
          <button onClick={() => setActiveTab("Demo")} className={`px-4 py-2 rounded-lg ${activeTab === "Demo" ? "bg-blue-600 text-white" : "bg-white text-blue-600 border"}`}>Demo</button>
        </div>

        {activeTab === "Self-introduction" && <SelfIntroduction />}
        {activeTab === "Demo" && <Demo />}
        {activeTab === "Tools" && <Tools />}
      </main>
    </div>
  );
}