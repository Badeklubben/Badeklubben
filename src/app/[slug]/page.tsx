'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { useMemberProject } from '@/context/MemberContext'


export default function AboutPage() {
  const { member } = useMemberProject()

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="flex flex-col gap-10 max-w-4xl px-4 py-12 mx-auto"
    >
      {/* PROFILE HEADER */}
      <div className="flex flex-col items-center text-center gap-4">
        {member.imageSrc && (
          <Image
            src={member.imageSrc}
            alt={`Portrait of ${member.name}`}
            width={160}
            height={160}
            className="rounded-full object-cover shadow-lg"
            priority
          />
        )}

        {member.name && (
          <h1 className="text-3xl font-semibold tracking-tight">
            {member.name}
          </h1>
        )}

        {member.role && (
          <p className="text-muted-foreground text-lg">{member.role}</p>
        )}
      </div>

      {/* ABOUT / BIO */}
      {member.about && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base leading-relaxed text-gray-700 md:text-lg"
        >
          {member.about}
        </motion.p>
      )}

      {/* CV (MARKDOWN) */}
      {member.cv && (
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="prose prose-neutral max-w-none"
        >
          <ReactMarkdown>{member.cv}</ReactMarkdown>
        </motion.article>
      )}
    </motion.section>
  )
}
