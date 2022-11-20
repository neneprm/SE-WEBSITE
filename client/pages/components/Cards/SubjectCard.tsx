import { H4, P } from "../headers"

interface ISubjectCard {
  id: string
  subject: string
  prerequisite: string
  program: string
  credit: string
  description: string
}

const SubjectCard: React.FunctionComponent<ISubjectCard> = ({
  id,
  subject,
  prerequisite,
  program,
  credit,
  description,
}) => {
  return (
    <>
      <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <H4 style="text-primary font-bold" text={`${id} : ${subject}`} />
        </div>
        <div className="collapse-content space-y-2">
          <P text={`Prerequisite : ${prerequisite}`} />
          <P text={`Program : ${program}`} />
          <P text={`Credit : ${credit}`} />
          <P text={`Description: ${description}`} style="mb-4" />
        </div>
      </div>
    </>
  )
}

export default SubjectCard
