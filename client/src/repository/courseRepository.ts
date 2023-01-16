import type { Course, Subject } from "@prisma/client"
import { prisma } from "../server/db"

export interface ICourseRepository {
  getSubjectsByCourse(courseId: string): Promise<Subject[]>
  getCourse(year: number, semester: number): Promise<Course | null>
  getCourses(): Promise<Course[]>
}

class CourseRepository implements ICourseRepository {
  private static instance: CourseRepository

  public static getInstance(): CourseRepository {
    if (!CourseRepository.instance) {
      CourseRepository.instance = new CourseRepository()
    }
    return CourseRepository.instance
  }

  async getSubjectsByCourse(courseId: string): Promise<Subject[]> {
    return await prisma.subject.findMany({ where: { courseId: courseId } })
  }

  async getCourse(year: number, semester: number): Promise<Course | null> {
    return await prisma.course.findFirst({ where: { year, semester } })
  }
  
  async getCourses(): Promise<Course[]> {
    return await prisma.course.findMany()
  }
}
