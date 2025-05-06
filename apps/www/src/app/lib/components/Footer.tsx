"use client";
import { Member } from "@/types/member";
import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer({ member }: { member: Member }) {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-sm px-6 py-3 z-50">
      <ul className="flex justify-center gap-8">
        {member.linkedin && (
          <li>
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="hidden sm:inline">Connect</span>
            </Link>
          </li>
        )}
        {member.mail && (
          <li>
            <Link
              href={member.mail}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
            >
              <FaEnvelope className="w-5 h-5" />
              <span className="hidden sm:inline">Contact</span>
            </Link>
          </li>
        )}
      </ul>
    </footer>
  );
}
