import type { Subject } from "@prisma/client"
import { prisma } from "../server/db"


export interface ISubjectRepository {
  addSubject(subject: Subject): Promise<Subject>
  getSubject(id: string): Promise<Subject | null>
  getSubjects(): Promise<Subject[]>
  deleteSubject(subject: Subject): Promise<Subject>
  updateSubject(subject: Subject): Promise<Subject>
}

class SubjectRepository implements ISubjectRepository {
  private static instance: SubjectRepository

  public static getInstance(): SubjectRepository {
    if (!SubjectRepository.instance) {
      SubjectRepository.instance = new SubjectRepository()
    }
    return SubjectRepository.instance
  }

  async addSubject(subject: Subject): Promise<Subject> {
    return await prisma.subject.create({ data: subject })
  }

  async getSubject(id: string): Promise<Subject | null> {
    return await prisma.subject.findFirst({ where: { id } })
  }

  async getSubjects(): Promise<Subject[]> {
    return await prisma.subject.findMany()
  }

  async deleteSubject(subject: Subject): Promise<Subject> {
    return await prisma.subject.delete({ where: { id: subject.id } })
  }

  async updateSubject(subject: Subject): Promise<Subject> {
    return await prisma.subject.update({
      data: subject,
      where: { id: subject.id },
    })
  }
}

export default SubjectRepository.getInstance()
