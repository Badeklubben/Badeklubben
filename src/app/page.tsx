export const revalidate = 60;          // 👈 revalidate every 60 s

import MemberCard from '@/app/commponents/MemberCard'
import LoadMembers, { LoadText } from '@/common/sanityLoader'
import Image from 'next/image'

export default async function Home() {
  const text    = await LoadText('19692804-94c1-4f11-aeae-9a0f2536d356')
  const members = await LoadMembers()

  return (
    <div>
      <header className="header-tmp">
        <Image src="/logo_gif.svg" alt="logo" width={600} height={150} priority />
      </header>

      <section className="info-tmp">{text?.text}</section>

      <section className="members-tmp">
        {members.map(m => (
          <MemberCard key={m._id} member={m} />
        ))}
      </section>
    </div>
  )
}