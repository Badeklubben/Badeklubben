'use client'

import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { useMemberProject } from '@/context/MemberContext'

export default function AboutPage() {
  const { member, projects } = useMemberProject()

  return (
    <section className="flex flex-col gap-6 max-w-2xl px-4 py-8 mx-auto">
      {member.imageSrc && (
        <div className="flex justify-center">
          <Image
            className="rounded-full object-cover"
            src={member.imageSrc}
            alt={`Portrait of ${member.name}`}
            width={150}
            height={150}
            priority
          />
        </div>
      )}

      {member.about && (
        <p className="text-base text-gray-700 leading-relaxed">
          {member.about}
        </p>
      )}

      {member.cv && (
        <article className="prose prose-neutral max-w-none">
          <ReactMarkdown>{member.cv}</ReactMarkdown>
        </article>
      )}
    </section>
  )
}
