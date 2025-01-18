import React from "react";
import "../styles/style.css";

const Copyright = () => {
  return (
    <div className="copyright-container">
      <div className="copyright-top container">
        <div className="copyright-left">
          <p>Copyright © 2024 Rite Window. All Rights Reserved.</p>
        </div>
        <div className="copyright-right">
          <a href="#terms" className="copyright-link">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="#privacy" className="copyright-link">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="copyright-bottom">
        <p>
          MHIC #138722 | CT HIC #0669113 | RI GC-34045 | NH ID 459494 | VT
          174.0000357 | ME #OCR16055
        </p>
      </div>
    </div>
  );
};

export default Copyright;
