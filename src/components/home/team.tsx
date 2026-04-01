import SectionTittle from "@/common/section-tittle";
import { TeamMember } from "../about/team-member";

const Team = () => {
  return (
    <section className="" id="team">
      {/* // naymur-rahman, naymur143, naymur-rahman linkedin , naymur fiver, naymur upwork, naymur rahman fiver, naymur rahman upwork, naymur freelancer, naymur-rahman freelancer, naymur Github, naymur-rahman, naymur143 Github, naymur vercel, naymur vercel profile, naymu portfolio */}
      <div className="container mx-auto">
        <SectionTittle
          title="Meet Our Team"
          des="The Talented People Behind the Scene of the Agency"
        />
        <TeamMember />
      </div>
    </section>
  );
};

export default Team;
