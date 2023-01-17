import { Announcement } from "@prisma/client"
import announcementRepository, {
  IAnnouncementRepository,
} from "../repository/announcementRepository"

export interface IAdmissionService {
  getAdmissionProps(): Promise<IAnnouncementProp[]>
}

export interface IAnnouncementProp {
  title: string
  link: string
}

class AdmissionService implements IAdmissionService {
  private static instance: AdmissionService
  private repository: IAnnouncementRepository

  private constructor(repository: IAnnouncementRepository) {
    this.repository = repository
  }

  public static getInstance(repository: IAnnouncementRepository) {
    if (!AdmissionService.instance) {
      AdmissionService.instance = new AdmissionService(repository)
    }
    return AdmissionService.instance
  }

  async getAnnouncementProp(
    announcement: Announcement
  ): Promise<IAnnouncementProp> {
    const prop: IAnnouncementProp = {
      title: announcement.title,
      link: announcement.link,
    }
    return prop
  }

  async getAdmissionProps(): Promise<IAnnouncementProp[]> {
    return new Promise(async (resolve, _reject) => {
      const announcements = await this.repository.getAnnouncements()
      const props: IAnnouncementProp[] = []
      announcements.forEach(async (announcement) => {
        props.push(await this.getAnnouncementProp(announcement))
      })
      resolve(props)
    })
  }
}

export default AdmissionService.getInstance(announcementRepository)
