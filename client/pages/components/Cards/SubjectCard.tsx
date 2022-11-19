import { H4, P } from "../headers"

interface ISubjectCard {
  cardStyle?: string
  id: string
  subject: string
  prerequisite: string
  program: string
  credit: string
  description: string
}

const SubjectCard: React.FunctionComponent<ISubjectCard> = ({
  cardStyle,
  id,
  subject,
  prerequisite,
  program,
  credit,
  description,
}) => {
  return (
    <div
      className={`card bg-base-100 card-bordered shadow-lg max-w-fit ${cardStyle}`}
    >
      <div className="card-body">
        <H4 style="card-title text-primary" text={`${id} : ${subject}`} />
        <P text={`Prerequisite : ${prerequisite}`} />
        <P text={`Program : ${program}`} />
        <P text={`Credit : ${credit}`} />
        <P text={`Description: ${description}`} />
      </div>
    </div>
  )
}

export default SubjectCard
