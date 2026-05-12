import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";

export const metadata = {
  title: "DevAgency | Modern Web Solutions",
  description: "Transform your digital presence with cutting-edge web development",
  viewport: "width=device-width, initial-scale=1",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        <SmoothScrolling/>
        {children}
      </body>
    </html>
  );
}