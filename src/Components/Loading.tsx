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
      const timer = setTimeout(() => setCurrentLine(currentLine + 1), 300);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onFinish, 2000);
    }
  }, [currentLine, onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-black p-3">
      <div className="w-1/2 max-[400px]:w-screen bg-black rounded-lg shadow-lg p-10 max-[400px]:p-2 font-mono text-white text-base max-[400px]:text-sm border border-white">
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