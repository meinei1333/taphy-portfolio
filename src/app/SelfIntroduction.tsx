"use client";

export default function SelfIntroduction() {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold my-4">👋 About Me</h2>
      <p className="text-gray-700">
        Hi, I'm Taphy, a passionate Front End and H5 Game Developer. I love creating interactive and visually appealing web applications.
      </p>
      <p className="mt-4 text-gray-600">My expertise includes:</p>
      <ul className="list-disc list-inside text-gray-600 mt-2">
        <li>React</li>
        <li>TypeScript & JavaScript</li>
        <li>
          Game Development with Canvas & WebGL
          <ul className="list-disc list-inside ml-6 text-gray-500">
            <li>PixiJS</li>
            <li>Phaser</li>
            <li>Cocos Creator</li>
            <li>Egret</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
