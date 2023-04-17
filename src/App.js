import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop1 from "./pages/Desktop1";
import ArrowLogo from "./pages/ArrowLogo";
import InstagramLogo from "./pages/InstagramLogo";
import FacebookLogo from "./pages/FacebookLogo";
import FacebookSquareLogo from "./pages/FacebookSquareLogo";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/arrow-logo":
        title = "";
        metaDescription = "";
        break;
      case "/instagram-logo":
        title = "";
        metaDescription = "";
        break;
      case "/facebook-logo":
        title = "";
        metaDescription = "";
        break;
      case "/facebooksquare-logo":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop1 />} />
      <Route path="/arrow-logo" element={<ArrowLogo />} />
      <Route path="/instagram-logo" element={<InstagramLogo />} />
      <Route path="/facebook-logo" element={<FacebookLogo />} />
      <Route path="/facebooksquare-logo" element={<FacebookSquareLogo />} />
    </Routes>
  );
}
export default App;
