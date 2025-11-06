import React from "react";

interface ErrorPageLayoutProps {
  children: React.ReactNode;
}

export default function ErrorPageLayout({ children }: ErrorPageLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <img 
        src="/climate-kic-logo.png" 
        alt="Climate KIC" 
        style={{ width: 120, height: 120, objectFit: "contain" }}
      />
      <div className="max-w-[40rem] w-full border bg-background-neutral-00 shadow-02 rounded-16 p-6 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
