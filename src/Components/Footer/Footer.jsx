import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Sagar Resort | Book Your Room</h2>
      <p>
        &copy; <span>{year}</span> HotalBooking.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/pecific602/PrashantSagar"
        >
          Prashant Sagar
        </a>
      </p>
    </footer>
  );
}
