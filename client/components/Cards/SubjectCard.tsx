import H4 from "../headers/H4"
import P from "../headers/P"

interface ISubjectCard {
  id: string
  subject: string
  prerequisite: string | null
  program: string
  credit: number
  lectureHour: number | null
  labHour: number | null
  studyHour: number | null
  description: string
  year: string
  semester: string
  track: string | null
}

const SubjectCard: React.FunctionComponent<ISubjectCard> = ({
  id,
  subject,
  prerequisite,
  program,
  credit,
  lectureHour,
  labHour,
  studyHour,
  description,
  year,
  semester,
  track
}) => {
  return (
    <>
      <div className="border collapse collapse-arrow border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <H4 style="text-primary font-bold" text={`${id} : ${subject}`} />
        </div>
        <div className="space-y-2 collapse-content">
          <P text={`Year: ${year} Semester: ${semester}`}/>
          <P text={`Prerequisite : ${prerequisite ? prerequisite : 'None'}`} />
          <P text={`Program : ${program}`} />
          <P text={`Track: ${track ? track: 'None'}`} />
          <P text={`Credit : ${credit} (${lectureHour}-${labHour}-${studyHour})`} />
          <P text={`Description: ${description}`} style="mb-4" />
        </div>
      </div>
    </>
  )
}

export default SubjectCard
