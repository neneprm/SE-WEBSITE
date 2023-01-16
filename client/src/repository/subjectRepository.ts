import type { Subject } from "@prisma/client"
import { prisma } from "../server/db"

export interface ISubjectRepository {
  getSubjects(): Promise<Subject[]>
}

class SubjectRepository implements ISubjectRepository {
  private static instance: SubjectRepository

  public static getInstance(): SubjectRepository {
    if (!SubjectRepository.instance) {
      SubjectRepository.instance = new SubjectRepository()
    }
    return SubjectRepository.instance
  }

  async getSubjects(): Promise<Subject[]> {
    return await prisma.subject.findMany()
  }
}

export default SubjectRepository.getInstance()
