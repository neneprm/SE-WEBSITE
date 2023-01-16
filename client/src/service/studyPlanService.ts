import { Subject } from "@prisma/client"
import subjectRepository, {
  ISubjectRepository,
} from "../repository/subjectRepository"

export interface IStudyPlanService {
  getSubjectProps(): Promise<ISubjectProp[]>
}

export interface ISubjectProp {
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

class StudyPlanService implements IStudyPlanService {
  private static instance: StudyPlanService
  private repository: ISubjectRepository

  private constructor(repository: ISubjectRepository) {
    this.repository = repository
  }

  public static getInstance(repository: ISubjectRepository) {
    if (!StudyPlanService.instance) {
      StudyPlanService.instance = new StudyPlanService(repository)
    }
    return StudyPlanService.instance
  }

  async getSubjectProp(subject: Subject): Promise<ISubjectProp> {
    const prop: ISubjectProp = {
      id: subject.subjectId,
      subject: subject.name,
      prerequisite: subject.prerequisite ? subject.prerequisite : "None",
      program: subject.program,
      credit: subject.credit,
      lectureHour: subject.lectureHour,
      labHour: subject.labHour,
      studyHour: subject.studyHour,
      description: subject.description,
      year: subject.year.toString(),
      semester: subject.semester.toString(),
      track: subject.track ? subject.track : "None",
    }
    return prop
  }

  async getSubjectProps(): Promise<ISubjectProp[]> {
    return new Promise(async (resolve, _reject) => {
      const subjects = await this.repository.getSubjects()
      const props: ISubjectProp[] = []
      subjects.forEach(async (subject) => {
        props.push(await this.getSubjectProp(subject))
      })
      resolve(props)
    })
  }
}

export default StudyPlanService.getInstance(subjectRepository)
