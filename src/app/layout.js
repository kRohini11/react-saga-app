"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { appStore } from "@/store/appStore";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={appStore}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
