import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FormEase",
  description: "Create forms easily",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
   
    <html className="bg-white" lang="en" >
    
      <body className={inter.className}>
     
        <Header/>
       
        {children}
        <Toaster />
       
      </body>
      
    </html>
 
    </ClerkProvider>
  );
}
