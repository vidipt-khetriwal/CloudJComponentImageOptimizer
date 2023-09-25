import "../styles/globals.css";
// import Navbar from "../components/Navbar";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
