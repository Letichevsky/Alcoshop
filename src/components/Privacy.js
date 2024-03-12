import React, { useEffect } from "react";
import "./Privacy.css";

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms">
      <h1 className="products_section_title">Privacy Policy</h1>
      <div className="terms_section">
        <div className="termsBox">
          <h3 className="termsH3">Alcoline</h3>
          <h3 className="termsH3">LEGAL</h3>
          <h3 className="termsH3">
            DISCLAIMER OF WARRANTIES & LIMITATION OF LIABILITY
          </h3>
          <h3 className="termsH3">GENERAL</h3>
          <p className="termsP">
            Your access to and use of software and other materials on, or
            through, this Website is solely at your own risk. Alcoline makes no
            warranty whatsoever about the reliability, stability, or virus-free
            nature of such software.
          </p>
          <h3 className="termsH3">DISCLAIMER OF WARRANTY</h3>
          <p className="termsP">
            Neither Alcoline, nor any of its employees, nor its affiliated
            companies, nor any of their employees, make any warranty, express or
            implied, or assume any legal liability (to the extent permitted by
            law) or responsibility for the accuracy or completeness of any
            information contained on or provided indirectly through this site.
            All information is provided ‘AS IS’ without warranty of any kind. We
            hereby disclaim all warranties and conditions with regard to this
            information, software, products, and services contained in this
            website, including all implied warranties and conditions of
            merchantability, fitness for a particular purpose, title, and
            non-infringement.
          </p>
          <h3 className="termsH3">LIMITATION OF LIABILITY</h3>
          <p className="termsP">
            To the extent permitted by law, in no event shall Alcoline nor any
            of its affiliated companies be liable for any direct, indirect,
            incidental, special, or consequential damages or any damages
            whatsoever, whether based on breach of contract, tort, negligence,
            strict liability, or otherwise, arising from access to, use of, or
            reliance upon information contained in or provided indirectly
            through this site. Such information may be changed by Alcoline at
            any time.
          </p>
          <p className="termsP">
            Nothing in this limitation of liability shall exclude liabilities
            not permitted to be excluded by applicable law. Any rights not
            expressly granted herein are reserved by us.
          </p>
          <h3 className="termsH3">INDEMNITY</h3>
          <p className="termsP">
            As a condition of use of this Website, you agree to indemnify
            Alcoline from and against any and all liabilities, expenses
            (including attorney’s fees), and damages arising out of claims
            resulting from your use of this Website, including, without
            limitation, any claims alleging facts that if true would constitute
            a breach by you of these terms and conditions.
          </p>
          <h3 className="termsH3">LINKS TO THIRD-PARTIES’ WEBSITES</h3>
          <p className="termsP">
            This Website may contain links and pointers to Internet sites
            maintained by third parties. Alcoline does not operate or control in
            any respect any information, products, or services on such
            third-party sites. Third-party links and pointers are included
            solely for your convenience and do not constitute any endorsement by
            Alcoline. You assume sole responsibility for the use of third-party
            links and pointers. Modification of Terms Alcoline may change these
            terms and conditions at any time without advance notice. Changed
            terms will become effective once posted on the Website and will not
            have any retrospective effect on existing contractual arrangements
            made through this Website. Your continued use of this Website after
            any change means you have accepted the changed terms and conditions.
          </p>
          <h3 className="termsH3">LIMITATIONS ON USE</h3>
          <p className="termsP">
            You agree to not abuse the Website. “Abuse” includes, without
            limitation, using the Website to:
          </p>
          <ul>
            <li>
              Defame, harass, stalk, threaten, abuse or otherwise violate
              others’ rights as defined by applicable law.
            </li>
            <li>
              Harm or interfere with the operation of others’ computers and
              software in any respect, including, without limitation, by
              uploading, downloading or transmitting corrupt files or computer
              viruses.
            </li>
            <li>
              Violate applicable intellectual property, publicity or privacy
              rights, including, without limitation, by uploading, downloading
              or transmitting materials or software.
            </li>
            <li>
              Omit or misrepresent the origin of, or rights in, any file you
              download or upload, including, without limitation, by omitting
              proprietary language, author identifications, or notices of
              patent, copyright or trademark.
            </li>
            <li>
              Transmit, post, or otherwise disclose trade secrets, or other
              confidential or protected proprietary material or information.
              Download or upload files that are unlawful to distribute through
              the Website.
            </li>
            <li>
              Transmit any information or software obtained through the Website,
              or copy, create, display, distribute, licence, perform, publish,
              recreate, reproduce, sell, or transfer works deriving from the
              Website.
            </li>
            <li>
              Cause an excessively large load on the infrastructure of the
              Website.
            </li>
            <li>
              Falsely use a password or personal identification number during
              logging into the Website, or misrepresent one’s identity or
              authority to act on behalf of another.
            </li>
            <li>Violate this Agreement in any other manner</li>
          </ul>

          <h3 className="termsH3">COPYRIGHT AND TRADEMARK NOTICES</h3>
          <p className="termsP">
            All content of this Website is Copyright © Alcoline 2024. All rights
            reserved.
          </p>
          <p className="termsP">
            This Site is for your personal, non-commercial use. You may not
            modify, copy, distribute, transmit, display, perform, reproduce,
            publish, license, create derivative works from, transfer, or sell
            any information, software, products, or services obtained from this
            Website. Alcoline and any other product or trade names of Alcoline
            referenced herein are our service marks or registered service marks.
            Other product and company names mentioned herein may be the
            trademarks of their respective owners.
          </p>
          <p className="termsP">
            Images, trademarks and brands displayed on this website are
            protected by copyright, trade mark and other intellectual property
            laws and may not be reproduced or appropriated in any manner without
            the written permission of their respective owner(s).
          </p>
          <p className="termsP">
            If you have any questions concerning legalities please send an email
            to the following address and Alcoline will be happy to try and help
            you out wherever possible.
          </p>
          <h3 className="termsH3">Alcoline</h3>
          <h3 className="termsH3">Privacy</h3>
          <p className="termsP">
            At Alcoline, we have utmost respect for your privacy. Any data you
            have provided to us will not be shared with any third parties.
          </p>
          <p className="termsP">
            We will always give you the option to opt out of monthly emails,
            personalized offers or invitations to our events.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
