/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const HeaderAndBreadcrumb = () => {
  return (
    <>
      <header className="wmre-header wmre-header--mobile-app">
        <div className="wmre-container wmre-grid wmre-grid--align-center wmre-grid--justify-between">
          <div className="wmre-header__vertical-align wmre-col-auto">
            {/* <!-- Logo --> */}
            <a
              className="wmre-header__logo-link"
              href="https://wmre.org.uk"
              title="West Midlands Rail Executive Home"
            >
              <img
                className="wmre-header__logo"
                alt="West Midlands Rail Executive logo"
                src="https://cloudcdn.wmca.org.uk/wmreassets/ds/1.0.0/img/logo.svg"
              />
            </a>
          </div>

          <h1 className="wmre-header__title wmre-col-1 wmre-col-sm-auto">Contact Us</h1>
        </div>
      </header>

      {/* <!-- Breadcrumb --> */}
      <div className="wmre-container">
        <nav
          aria-label="Breadcrumb"
          className="wmre-breadcrumb wmre-breadcrumb--mobile-app wmre-col-1"
        >
          <ol className="wmre-breadcrumb__list">
            <li className="wmre-breadcrumb__list-item">
              <a href="https://wmre.org.uk/" className="wmre-breadcrumb__link">
                Home
              </a>
            </li>
            <li className="wmre-breadcrumb__list-item">
              <a
                href="/"
                className="wmre-breadcrumb__link wmre-breadcrumb__link--current"
                aria-current="page"
              >
                Contact Us
              </a>
            </li>
          </ol>
        </nav>
      </div>
      {/* <!-- End Breadcrumb --> */}
    </>
  );
};

HeaderAndBreadcrumb.defaultProps = {
  formSubmitStatus: null,
};

export default HeaderAndBreadcrumb;
