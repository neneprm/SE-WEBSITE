import type { NextApiRequest, NextApiResponse } from "next"
import admissionService from "../../src/service/admissionService"

async function admissionHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).send({ res: "method not allowed" })
    return
  }
  try {
    res.status(200).send({ res: await admissionService.getAdmissionProps() })
  } catch (err) {
    res.status(500).send({ res: "internal server error" })
  }
}

export default admissionHandler
