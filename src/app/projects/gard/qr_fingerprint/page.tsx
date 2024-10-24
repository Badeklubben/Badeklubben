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
        setMessage("An error occurred while fetching the QR code.");
      }
    };

    fetchQRCode();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Scan the QR Code Between 10:00 and 10:15
        </h1>

        {qrCode ? (
          <div className="mb-4">
            <img
              src={qrCode}
              alt="Daily QR Code"
              className="mx-auto w-64 h-64 object-contain"
            />
            <p className="text-sm text-gray-500 mt-2">
              Use your phone to scan the code
            </p>
          </div>
        ) : (
          <p className="text-lg text-gray-600">Loading QR code...</p>
        )}

        {message && (
          <p className="text-red-500 text-sm mt-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default QRPage;
