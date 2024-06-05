import Link from "next/link";
import SpinLogo from "@/components/SpinLogo";
import Image from 'next/image'
import { RiLockPasswordFill } from "react-icons/ri";
import MemberCard from "@/components/MemberCard";

export default function Home() {
  return (
    <div>
      <title>Velkommen til Badeklubben!</title>

      <div className="header-tmp">
        <SpinLogo size={300}/>
      </div>
      <div className="info-tmp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sodales enim. Quisque feugiat dui id erat cursus, id blandit turpis dignissim. Duis hendrerit lacus sed lobortis consequat. Quisque et urna ante. Integer ipsum nisl, accumsan non sem et, condimentum tincidunt quam. Aenean porttitor vel enim sed hendrerit. Proin efficitur, justo gravida rhoncus lacinia, nisl augue cursus massa, non fermentum dolor dui et lectus. Morbi vestibulum sollicitudin arcu sit amet auctor. Morbi elementum, mi et finibus cursus, est ipsum finibus nunc, eget laoreet urna dolor nec lorem.</div>
      <div className="members-tmp">
        <MemberCard name="Stian Munkejord" path="/stian" image_path="/arne.jpg" role="Master i datatryggleik" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sodales enim. Quisque feugiat dui id erat cursus, id blandit turpis dignissim. Duis hendrerit lacus sed lobortis consequat. Quisque et urna ante."></MemberCard>
        <MemberCard name="Arne Natskår" path="/arne" image_path="/arne.jpg" role="Master i datatryggleik" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sodales enim. Quisque feugiat dui id erat cursus, id blandit turpis dignissim. Duis hendrerit lacus sed lobortis consequat. Quisque et urna ante."></MemberCard>
        <MemberCard name="Lars Bysheim" path="/lars" image_path="/arne.jpg" role="Master i datatryggleik" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sodales enim. Quisque feugiat dui id erat cursus, id blandit turpis dignissim. Duis hendrerit lacus sed lobortis consequat. Quisque et urna ante."></MemberCard>
        <MemberCard name="Gard Heine Kalland" path="/gard" image_path="/arne.jpg" role="Master i datatryggleik" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sodales enim. Quisque feugiat dui id erat cursus, id blandit turpis dignissim. Duis hendrerit lacus sed lobortis consequat. Quisque et urna ante."></MemberCard>
        <MemberCard name="Oskar Krystian Michalski" path="/oskar" image_path="/arne.jpg" role="Master i datatryggleik" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sodales enim. Quisque feugiat dui id erat cursus, id blandit turpis dignissim. Duis hendrerit lacus sed lobortis consequat. Quisque et urna ante."></MemberCard>
        <MemberCard name="Østen Vestby Edvardsen" path="/osten" image_path="/arne.jpg" role="Master i datatryggleik" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget sodales enim. Quisque feugiat dui id erat cursus, id blandit turpis dignissim. Duis hendrerit lacus sed lobortis consequat. Quisque et urna ante."></MemberCard>

      </div>
    </div>
  );
}