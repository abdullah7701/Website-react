import Link from "next/link";

export default function Menu() {
  return (
    <>
      <ul className="main-menu__list">
        <li className="dropdown">
          <Link href="/">Products</Link>
          <ul>
            <li>
              <Link href="/revenue-based-financing">Revenue Based Financing</Link>
            </li>
            <li>
              <Link href="/term-loans">Term Loans</Link>
            </li>
            <li>
              <Link href="/sba-loans">SBA Loans</Link>
            </li>
            <li>
              <Link href="/merchant-cash-advance">Merchant Cash Advance</Link>
            </li>
            <li>
              <Link href="/business-lines-of-credit">Business Lines of Credit</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/">Resources</Link>
          <ul>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
            <li>
              <Link href="/requently-asked-questions">FAQs</Link>
            </li>
            <li>
              <Link href="/bank-statement">Upload Bank Statements</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/partnerships">Partnerships</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link href="tel:8883431156">(888) 343-1156</Link>
        </li>
      </ul>
    </>
  );
}