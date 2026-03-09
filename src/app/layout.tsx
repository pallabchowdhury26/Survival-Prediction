import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, Typography } from "@mui/material";
import Providers from "./providers";
import Navbar from "@/component/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const visuallyHidden = {
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    title: "Survival Prediction",
    description:
      "Tool for patients with kidney disease to estimate 3-year survival and mortality risk for dialysis or kidney transplant in Ontario. Created for doctors, nurses, social workers, and patient educators.",
    keywords: [
      "dialysis",
      "kidney transplant",
      "estimated survival",
      "mortality risk",
      "Ontario",
      "renal disease",
      "patient education",
      "Emory University",
      "CIHR",
      "Can-SOLVE CKD",
    ],
    authors: [{ name: "Emory University Research Team" }],
    openGraph: {
      title: "Dialysis vs. Kidney Transplant - Estimated Survival in Ontario",
      description:
        "Tool for patients with kidney disease to estimate 3-year survival and mortality risk for dialysis or kidney transplant in Ontario.",
      url: baseUrl, // dynamic base URL
      siteName: "Dialysis vs. Kidney Transplant Risk Calculator",
      images: [
        {
          url: `${baseUrl}/images/Logo_small.png`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Dialysis vs. Kidney Transplant - Estimated Survival in Ontario",
      description: "Estimate 3-year survival and mortality risk for dialysis or kidney transplant in Ontario.",
      images: [`${baseUrl}/images/Logo_small.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(baseUrl),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <Navbar />

          <Box bgcolor="background.default" color="text.primary" paddingY={4} component="main">
            <Container>
              <Typography component="h1" sx={visuallyHidden}>
                Survival Prediction Calculator
              </Typography>
              {children}
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
