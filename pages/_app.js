// Import resources
import AlertTemplate from "react-alert-template-basic";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";

// Import custom files
import "../src/styles/globals.css";
import GetDatabaseContent from "../src/components/GetDatabaseContent";
import { appColors } from "../src/config/data";

// Define alert provider options
const alertProviderOpt = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "40px",
  transition: transitions.SCALE,
};

// Component
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // Define router
  const router = useRouter();

  // Define isProdEnv
  const isProdEnv = process.env.NODE_ENV === "production";

  // Debug
  //console.log("Debug appjs: ",);

  // Return component
  return (
    <>
      {/** NPROGRESS LOADER */}
      <NextNProgress
        color={appColors?.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/** APP BODY */}
      <RecoilRoot>
        <AlertProvider template={AlertTemplate} {...alertProviderOpt}>
          <SessionProvider session={session}>
            {/** Get global database content */}
            <GetDatabaseContent />

            {/** Main component */}
            <Component {...pageProps} />

            {/** Scroll up button */}
            {/* <ScrollUpButton /> */}
          </SessionProvider>
        </AlertProvider>
      </RecoilRoot>
    </>
  ); // close return
} // close component

// Export
export default MyApp;
