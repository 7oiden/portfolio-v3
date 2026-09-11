import Heading from "../components/common/Heading";
import Biography from "./about/Biography";
import Info from "./about/Info";
import Contact from "./about/Contact";
import { useLocale } from "../i18n/useLocale";

export default function About() {
  const { copy } = useLocale();

  return (
    <>
      <Heading size="1" cssClass="page-heading">
        {copy.about.pageTitle}
        <span className="page-heading__dot">.</span>
      </Heading>
      <Biography />
      <Info />
      <Contact />
    </>
  );
}
