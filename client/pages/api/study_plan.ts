import type { NextApiRequest, NextApiResponse } from "next"
import studyPlanService from "../../src/service/studyPlanService"

async function studyPlanHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).send({ res: "method not allowed" })
    return
  }
  try {
    const subjects = await studyPlanService.getSubjects()
    res.status(200).send({ res: subjects })
  } catch (err) {
    res.status(500).send({ res: "internal server error" })
  }
}

export default studyPlanHandler
