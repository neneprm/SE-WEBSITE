import Head from "next/head"
import Image from "next/image"
import { H3, P } from "../components/headers"
import PictureCard from "../components/cards/picture-card"

const LECTURERS_LIST = [
  {
    name: "Asst.Prof.Dr. Visit Hirankitti",
    pos: "Director of the B.Eng. in Software Engineering Program",
    edu: [
      {
        li1: "B.Eng. (Hons) in Computer Engineering | King Mongkut's Institute of Technology Ladkrabang",
        li2: "PhD in Computer Science | Imperial College London, UK",
        li3: "",
      },
    ],
  },
  {
    name: "Dr. Natthapong Jungteerapanich",
    pos: "Associate Dean",
    edu: [
      {
        li1: "B.Eng. (First Hons) Computer Engineering | King Mongkut's Institute of Technology Ladkrabang",
        li2: "M.Sc. Advanced Computing | Imperial College London, UK",
        li3: "Ph.D. Informatics | University of Edinburgh, UK",
      },
    ],
  },
  {
    name: "Asst.Prof.Dr. Ronnachai Tiyarattanachai",
    pos: "Associate Dean",
    edu: [
      {
        li1: "B.E. Enviromental Engineering | Chulalongkorn University",
        li2: "M.S. Environmental Management | Chulalongkorn University",
        li3: "Ph.D. Environmental Policy | New Jersey Institute of Technology, USA",
      },
    ],
  },
  {
    name: "Asst.Prof.Dr. Isara Anantavrasilp",
    pos: "Assistant Dean",
    edu: [
      {
        li1: "B.Sc. Information Technology | Siridhorn International Institute of Technology",
        li2: "M.Sc. Computer Science | Technische Universität Dresden, Germany",
        li3: "Dr. rer. nat. Informatics | Technische Universität München, Germany",
      },
    ],
  },
  {
    name: "Asst.Prof.Dr. Chaiwat Nuthong",
    pos: "",
    edu: [
      {
        li1: "B.Eng. Electrical Engineering | King Mongkut's Institute of Techonology Ladkrabang",
        li2: "M.Sc. Mechatronics | University of Siegen, Germany",
        li3: "Dr.Ing. Control Engineering | University of Federal Armed Force, Germany",
      },
    ],
  },
  {
    name: "Asst.Prof.Dr. Chivalai Temiyasathit",
    pos: "",
    edu: [
      {
        li1: "B.Eng. Industrial Engineering | Chulalongkorn University",
        li2: "M.S. Industrial Engineering | University of Texas Arlington, USA",
        li3: "Ph.D. Industrial Engineering | University of Texas Arlington, USA",
      },
    ],
  },
  {
    name: "Dr.Churirat Boonkhun",
    pos: "",
    edu: [
      {
        li1: "B.Eng Telecommunication Engineering | King Mongkut's Institute of Techonology Ladkrabang",
        li2: "M.S Industrial Engineering | Pennnsylvaia state University, USA",
        li3: "Ph.D Industrial Engineering | Pennnsylvaia state University, USA",
      },
    ],
  },
  {
    name: "Asst.Prof.Dr. Kulwadee Somboonviwat",
    pos: "",
    edu: [
      {
        li1: "B.Eng. (First Hons) Computer Engineering | King Mongkut's Institute of Technology Ladkrabang",
        li2: "M.Sc. Information and Communication Engineering | University of Tokyo, Japan",
        li3: "Ph.D. Information and Communication Engineering | University of Tokyo, Japan",
      },
    ],
  },
  {
    name: "Dr.Montri Phothisonothai",
    pos: "",
    edu: [
      {
        li1: "B.S. Electrical Engineering | King Mongkut's University of Technology Thonburi",
        li2: "M.Eng. Electrical Engineering | King Mongkut's University of Technology Thonburi",
        li3: "Ph.D. Information Science and Control Engineering | Nagaoka University of Technology, Japan",
      },
    ],
  },
  {
    name: "Dr. Pipat Sookavatana",
    pos: "",
    edu: [
      {
        li1: "M.Sc. in Computer Engineering | Syracuse University, USA",
        li2: "Ph.D. in Electrical Engineering |The University of New South Wales, Australia",
        li3: "",
      },
    ],
  },
  {
    name: "Dr. Ukrit Watchareeruetai",
    pos: "",
    edu: [
      {
        li1: "B.Eng (First Hons) Electrical Engineering | Kasetsart University",
        li2: "M.S. Information Science | Nagoya University, Japan",
        li3: "D.Eng. Information Science | Nagoya University, Japan",
      },
    ],
  },
  {
    name: "Assoc.Prof.Dr. Veera Boonjing",
    pos: "",
    edu: [
      {
        li1: "Ph.D. in Decision Sciences and Engineering Systems | Rensselaer Polytechnic Institute, USA",
        li2: "",
        li3: "",
      },
    ],
  },
]

const Lecturers = () => {
  return (
    <>
      <Head>
        <title>SE Lecturers | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container mx-auto my-4">
        <H3 style="text-gradient font-bold text-center" text="LECTURERS" />
      </section>

      <section>
        {/* <PictureCard
          title="Asst.Prof.Dr. Visit Hirankitti"
          body="ssssss"
          image={VisitH}
          imageAlt="Asst.Prof.Dr. Visit Hirankitti"
        /> */}

        {/* {LECTURERS_LIST.map((person, id) => (
          <PictureCard
            title="Asst.Prof.Dr. Visit Hirankitti"
            body={person.map((education) => (
              education
            ))}
            image={VisitH}
            imageAlt="Asst.Prof.Dr. Visit Hirankitti"
          />
        ))} */}

        {LECTURERS_LIST.map((person) => (
          <div
            className="card card-bordered bg-base-100 shadow-lg w-full mb-4"
            key={person.name}
          >
            <div className="card-body">
              <div className="card-title">
                <P text={person.name} style="text-accent font-bold m-0" />
                <div
                  className={
                    person.pos === ""
                      ? "hidden"
                      : "badge badge-lg badge-secondary"
                  }
                >
                  {person.pos}
                </div>
              </div>
              <ul className="list-disc list-inside text-sm sm:text-base md:text-lg lg:text-xl space-y-2">
                {person.edu.map((list) => (
                  <li
                    key={list.li1}
                    className={list.li1 === "" ? "hidden" : ""}
                  >
                    {list.li1}
                  </li>
                ))}
                {person.edu.map((list) => (
                  <li
                    key={list.li2}
                    className={list.li2 === "" ? "hidden" : ""}
                  >
                    {list.li2}
                  </li>
                ))}
                {person.edu.map((list) => (
                  <li
                    key={list.li3}
                    className={list.li3 === "" ? "hidden" : ""}
                  >
                    {list.li3}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
      <div className="mb-8"></div>
    </>
  )
}

export default Lecturers
