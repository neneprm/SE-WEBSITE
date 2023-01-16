import { Subject } from "@prisma/client"
import subjectRepository, {
  ISubjectRepository,
} from "../repository/subjectRepository"

export interface IStudyPlanService {
  getSubjects(): Promise<Subject[]>
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

  async getSubjects(): Promise<Subject[]> {
    return await this.repository.getSubjects()
  }
}

export default StudyPlanService.getInstance(subjectRepository)
