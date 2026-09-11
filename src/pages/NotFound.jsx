import Heading from "../components/common/Heading";
import LinkBtn from "../components/common/LinkBtn";
import { useLocale } from "../i18n/useLocale";

export default function NotFound() {
  const { copy } = useLocale();

  return (
    <>
      <Heading size="1" cssClass="page-heading">
        {copy.common.notFoundTitle}
        <span className="page-heading__dot">.</span>
      </Heading>
      <section className="section-wrapper">
        <p>{copy.common.notFoundBody}</p>
        <LinkBtn url="/" size="md">
          {copy.common.backHome}
        </LinkBtn>
      </section>
    </>
  );
}
