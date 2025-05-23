import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <>
      {/* Page Header Start */}
      <section className="page-header" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="page-header__inner">
            <h2>{breadcrumbTitle}</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span> - </span>
                </li>
                <li>{breadcrumbTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Page Header End */}
    </>
  );
}