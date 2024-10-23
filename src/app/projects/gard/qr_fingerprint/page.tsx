"use client";

import React, { useState, useEffect } from "react";

const QRPage = () => {
  const [qrCode, setQRCode] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const response = await fetch("/api/qr_fingerprint");
        const data = await response.json();

        if (response.status === 403) {
          setMessage(data.error);
        } else {
          setQRCode(data.qrCode);
        }
      } catch (error) {
        console.error("Failed to fetch QR code:", error);
      }
    };

    fetchQRCode();
  }, []);

  return (
    <div>
      <h1>Scan the QR code between 10:00 and 10:15</h1>
      {qrCode ? (
        <img src={qrCode} alt="Daily QR Code" />
      ) : (
        <p>Loading QR code...</p>
      )}
      <p>{message}</p>
    </div>
  );
};

export default QRPage;
