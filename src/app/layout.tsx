import "./globals.css";
import { Metadata } from 'next';

import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    template: '%s | SerenityStrings',
    default: 'SerenityStrings',
  },
  description: "Strum To Your Heart's Content",
  // metadataBase: new URL(''),
};

// This is the main layout component for the entire app
// "export default" means this is the primary component exported from this file
const RootLayout = ({
  children, // "children" represents all nested pages/components that will be rendered inside this layout
}:  {
  // Type definition for the props object passed to the RootLayout component. 
  // It specifies that "children" is a React node, which can be any valid 
  // React element or a collection of elements (JSX, text, components, etc.).
  children: React.ReactNode;
}) => {
  return (
    <html lang = "en">
      <body>
        <Header />
        {children}    {/* This is where the content of each page will be rendered. 
                      The Header component will be displayed on all pages, 
                      and the specific content for each page will be injected here based on the routing. */}
        
      </body>
    </html>
  )
}

export default RootLayout;
