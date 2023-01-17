import type { Announcement } from "@prisma/client"
import { prisma } from "../server/db"

export interface IAnnouncementRepository {
  getAnnouncements(): Promise<Announcement[]>
}

class AnnouncementRepository implements IAnnouncementRepository {
  private static instance: AnnouncementRepository

  public static getInstance(): AnnouncementRepository {
    if (!AnnouncementRepository.instance) {
      AnnouncementRepository.instance = new AnnouncementRepository()
    }
    return AnnouncementRepository.instance
  }

  async getAnnouncements(): Promise<Announcement[]> {
    return await prisma.announcement.findMany()
  }
}

export default AnnouncementRepository.getInstance()
