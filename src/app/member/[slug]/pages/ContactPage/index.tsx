import { Member } from '@/types';
import Link from 'next/link';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactPage({ member }: { member: Member }) {
    return (
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            {member.linkedin && (
                <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                    <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
                    <span className="text-sm text-gray-700 truncate">LinkedIn-profil</span>
                </Link>
            )}
            {member.mail && (
                <Link
                    href={member.mail}
                    className="flex w-full items-center gap-3 px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                    <FaEnvelope className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-700 truncate">
                        {member.mail.replace(/^mailto:/, '')}
                    </span>
                </Link>
            )}
            {!member.linkedin && !member.mail && (
                <p className="text-sm text-gray-400">Ingen kontaktinfo tilgjengelig.</p>
            )}
        </div>
    );
}
