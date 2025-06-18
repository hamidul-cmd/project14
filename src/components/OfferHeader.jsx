import React from "react";

function OfferHeader() {
  return (
    <div className="bg-black">
      <div className="max-w-wrapper m-auto text-center py-2 relative">
        <p className="text-12 text-white font-family-Satoshi xll:text-sm">
          Sign up and get 20% off to your first order.{" "}
          <a href="/" className="font-medium underline underline-offset-4">
            Sign Up Now
          </a>
        </p>
        <svg
          className="absolute top-1/2 -translate-y-1/2 right-4 hidden xll:block text-white cursor-pointer"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default OfferHeader;
