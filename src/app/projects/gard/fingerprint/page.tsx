"use client";
import React, { useState, useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { db } from "./config/firebase_g";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import SHA256 from "crypto-js/sha256";

const FingerprintPage = () => {
  const [name, setName] = useState("");
  const [fingerprint, setFingerprint] = useState("");

  useEffect(() => {
    const generateFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setFingerprint(result.visitorId);
    };

    generateFingerprint();
  }, []);

  const handleSubmit = async () => {
    if (name && fingerprint) {
      try {
        // Hasher fingerprint, skal ikkje sende den i plaintext LOL
        const hashedFingerprint = SHA256(fingerprint).toString();

        // Dokumentene i DB heiter navn til brukere
        const docRef = doc(db, "users", name);

        // Henter ut navn viss den er der
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();

          if (
            // sjekker om ein user har allerede registert den devicen
            userData.devices &&
            userData.devices.includes(hashedFingerprint)
          ) {
            alert("This device is already registered for this user.");
          } else {
            await updateDoc(docRef, {
              devices: arrayUnion(hashedFingerprint),
            });
            alert("New device added for the user!");
          }
        } else {
          await setDoc(docRef, {
            name,
            devices: [hashedFingerprint],
          });
          alert("User registered successfully with the device!");
        }
      } catch (error) {
        console.error(
          "Error registering fingerprint: ",
          error.message,
          error.stack,
        );
        alert("Error registering your device. Please try again.");
      }
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div>
      <h1>Register Device</h1>
      <p>Your device fingerprint is: {fingerprint}</p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default FingerprintPage;
