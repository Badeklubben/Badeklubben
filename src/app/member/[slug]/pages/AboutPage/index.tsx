import ReactMarkdown from 'react-markdown';
import { Member } from '@/types';
import Image from 'next/image';

export default function AboutPage({ member }: { member: Member }) {
    return (
        <div className="flex flex-col items-center gap-8">
            {/* Profile photo */}
            {member.imageSrc && (
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg">
                    <Image
                        src={member.imageSrc}
                        alt={member.name}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Bio */}
            {member.about && (
                <p className="text-center text-gray-700 max-w-2xl leading-relaxed">
                    {member.about}
                </p>
            )}

            {/* CV / markdown */}
            {member.cv && (
                <div className="w-full max-w-3xl border-t border-gray-200 pt-6">
                    <ReactMarkdown className="prose prose-sm max-w-none">{member.cv}</ReactMarkdown>
                </div>
            )}
        </div>
    );
}
