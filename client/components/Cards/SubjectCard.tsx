import H4 from "../headers/H4"
import P from "../headers/P"

interface ISubjectCard {
  id: string
  subject: string
  prerequisite: string
  program: string
  credit: string
  description: string
  year: string
  semester: string
  track: string
}

const SubjectCard: React.FunctionComponent<ISubjectCard> = ({
  id,
  subject,
  prerequisite,
  program,
  credit,
  description,
  year,
  semester,
  track
}) => {
  return (
    <>
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <H4 style="text-primary font-bold" text={`${id} : ${subject}`} />
        </div>
        <div className="collapse-content space-y-2">
          <P text={`Year: ${year} Semester: ${semester}`}/>
          <P text={`Prerequisite : ${prerequisite}`} />
          <P text={`Program : ${program}`} />
          <P text={`Track: ${track}`} />
          <P text={`Credit : ${credit}`} />
          <P text={`Description: ${description}`} style="mb-4" />
        </div>
      </div>
    </>
  )
}

export default SubjectCard
