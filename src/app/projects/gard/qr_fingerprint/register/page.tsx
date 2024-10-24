
"use client";

import React, { useState, useEffect, useRef } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import { db, app } from "../config/firebase_g";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { isWithinValidTimeFrame } from "../utils/qr";

const RegisterPage = () => {
  const [message, setMessage] = useState("");
  const [registeredToday, setRegisteredToday] = useState(false);
  const hasCheckedDevice = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const analytics = getAnalytics(app);
        console.log("Firebase Analytics initialized");
      } catch (error) {
        console.error("Failed to initialize Firebase Analytics:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (hasCheckedDevice.current) return;
    hasCheckedDevice.current = true;

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

        const usersSnapshot = await getDocs(collection(db, "users"));
        let isDeviceRegistered = false;

        for (const docSnap of usersSnapshot.docs) {
          const userData = docSnap.data();
          if (userData.devices && userData.devices.includes(deviceFingerprint)) {
            setMessage("You are registered today.");
            setRegisteredToday(true);
            isDeviceRegistered = true;
            break;
          }
        }

        if (!isDeviceRegistered) {
          const userName = prompt("Enter your name to register this device:");

          if (userName) {
            const userDocRef = doc(db, "users", userName);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
              await updateDoc(userDocRef, {
                devices: arrayUnion(deviceFingerprint),
              });
              setMessage("Device registered successfully under your name!");
            } else {
              await setDoc(userDocRef, {
                name: userName,
                devices: [deviceFingerprint],
                registeredAt: new Date(),
              });
              setMessage("Device registered successfully!");
            }
            setRegisteredToday(true);
          }
        }
      } catch (error) {
        console.error("Failed to register device:", error);
        setMessage("Error registering your device. Please try again.");
      }
    };

    registerDevice();
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${registeredToday ? "bg-green-500" : "bg-gray-100"
        }`}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Device Registration</h1>
        <p className="text-lg text-gray-600 mb-4">{message}</p>
        {!registeredToday && (
          <p className="text-sm text-gray-500">Your device will be registered here.</p>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
