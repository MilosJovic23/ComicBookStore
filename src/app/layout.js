
import "./globals.css";

import { DM_Sans } from "@next/font/google"

import RecoilContextProvider from "@/app/_libs/RecoilContextProvider";

    const dmSans_init = DM_Sans ({
        subsets: ['latin'],
        weight: ['100','300','400','500'],
        variable: '--font-DMsans'
});


export const metadata = {
  title: "EpicTown",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

    <RecoilContextProvider>
        <body className={dmSans_init.variable}>
            {children}
        </body>
    </RecoilContextProvider>

</html>
)
    ;
}
