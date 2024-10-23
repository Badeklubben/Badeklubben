
"use client";

import React, { useState, useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { db, app } from "../config/firebase_g"; // Import Firebase app and Firestore
import { getAnalytics } from "firebase/analytics"; // Import Analytics for client-side
import { collection, getDocs, doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { isWithinValidTimeFrame } from "../utils/qr";

const RegisterPage = () => {
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Initialize Firebase Analytics only on the client-side
    if (typeof window !== "undefined") {
      try {
        const analytics = getAnalytics(app); // Initialize Firebase Analytics
        console.log("Firebase Analytics initialized");
      } catch (error) {
        console.error("Failed to initialize Firebase Analytics:", error);
      }
    }
  }, []); // Only run this on the client after the first render

  useEffect(() => {
    if (!isWithinValidTimeFrame()) {
      setMessage("This page is only accessible between 10:00 and 10:15.");
      setTimeout(() => {
        router.push("/");
      }, 3000);
      return;
    }

    const registerDevice = async () => {
      try {
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        const deviceFingerprint = result.visitorId;

        // Check if the device is already registered
        const usersSnapshot = await getDocs(collection(db, "users"));
        let isDeviceRegistered = false;

        usersSnapshot.forEach((doc) => {
          const userData = doc.data();
          if (userData.devices && userData.devices.includes(deviceFingerprint)) {
            setMessage("You are registered today.");
            isDeviceRegistered = true;
            return;
          }
        });

        if (!isDeviceRegistered) {
          const userName = prompt("Enter your name to register this device:");

          if (userName) {
            const userDocRef = doc(db, "users", userName);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
              // Update the document if the user already exists
              await updateDoc(userDocRef, {
                devices: arrayUnion(deviceFingerprint),
              });
              setMessage("Device registered successfully under your name!");
            } else {
              // Create a new document if the user doesn't exist
              await setDoc(userDocRef, {
                name: userName,
                devices: [deviceFingerprint],
                registeredAt: new Date(),
              });
              setMessage("Device registered successfully!");
            }
          }
        }
      } catch (error) {
        console.error("Failed to register device:", error);
        setMessage("Error registering your device. Please try again.");
      }
    };

    registerDevice();
  }, [router]);

  return (
    <div>
      <h1>Device Registration</h1>
      <p>{message}</p>
    </div>
  );
};

export default RegisterPage;
