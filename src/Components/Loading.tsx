import React, { useEffect, useState } from "react";

const commands = [
  "C:\\> ping portfolio.com",
  "Pinging portfolio.com [192.168.1.1] with 32 bytes of data:",
  "Reply from 192.168.1.1: bytes=32 time=24ms TTL=54",
  "Reply from 192.168.1.1: bytes=32 time=22ms TTL=54",
  "C:\\> dir",
  "Volume in drive C is Portfolio",
  "Directory of C:\\Users\\Kavindu\\portfolio",
  "index.html    App.tsx    main.tsx",
  "C:\\> echo Loading portfolio...",
  "Loading portfolio...",
];

const Loading: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < commands.length) {
      const timer = setTimeout(() => setCurrentLine(currentLine + 1), 400);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onFinish, 800);
    }
  }, [currentLine, onFinish]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <div className="w-full max-w-xl bg-gray-900 rounded-lg shadow-lg p-6 font-mono text-green-400 text-sm">
        {commands.slice(0, currentLine).map((cmd, idx) => (
          <div key={idx}>{cmd}</div>
        ))}
        {currentLine < commands.length && (
          <div className="animate-pulse">{`C:\>`}</div>
        )}
      </div>
    </div>
  );
};

export default Loading;