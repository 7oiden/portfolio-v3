import Heading from "../../components/Heading";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { SiScrimba } from "react-icons/si";

export default function Education() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <section>
      <Heading size="2" cssClass="section-heading underline">
        Education & Training
      </Heading>
      <div className="path">
        <div>
          <div>
            <div className="path__vert path-1"></div>
            <div className="path__icon-container path-1">
              <SiScrimba className="path-icon" />
            </div>
            <div className="path__date">FEB23 - JAN24</div>
          </div>
          <div className="path__info">
            <div className="triangle-left"></div>
            <Heading size="3" cssClass="path-heading">
              The Frontend Career Path
            </Heading>
            <div className="path-sub-heading-container">
              <Heading size="4" cssClass="path-sub-heading">
                Scrimba
              </Heading>
              <MdOutlineArrowForwardIos
                className={
                  isOpen
                    ? "arrow-icon arrow-icon--up"
                    : "arrow-icon arrow-icon--down"
                }
                onClick={handleClick}
              />
            </div>
            {isOpen && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="path">
          <div>
            <div className="path__vert path-2"></div>
            <div className="path__icon-container path-2">
              <SiScrimba className="path-icon" />
            </div>
            <div className="path__date">FEB23 - JAN24</div>
          </div>
          <div className="path__info">
            <div className="triangle-left"></div>
            <Heading size="3" cssClass="path-heading">
              The Frontend Career Path
            </Heading>
            <div className="path-sub-heading-container">
              <Heading size="4" cssClass="path-sub-heading">
                Scrimba
              </Heading>
              <MdOutlineArrowForwardIos
                className={
                  isOpen
                    ? "arrow-icon arrow-icon--up"
                    : "arrow-icon arrow-icon--down"
                }
                onClick={handleClick}
              />
            </div>
            {isOpen ? (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
