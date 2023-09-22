import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "პროგრამები",
      href: "/programs",
    },
    {
      title: "საბავშვი პროგრამები",
      href: "/guides",
    },   
    {
      title: "კურსები",
      href: "/courses",
    },
  ],
  sidebarNav: [
    {
      title: "HTML თავები",
      items: [
        {
          title: "თავი 1 - შესავალი",
          href: "/courses/html/1-shesavali",
        },
        {
          title: "თავი 2 - ელემენტები",
          href: "/courses/html/2-elementebi",
        },
        {
          title: "თავი 3 - ატრიბუტები",
          href: "/courses/html/3-atributebi",
        },
        {
          title: "თავი 4 - ატრიბუტები",
          href: "/courses/html/4-bmulebi",
        },
        {
          title: "თავი 5 - სურათები",
          href: "/courses/html/5-suratebi",
        }
      ],
    },
  ],
  aboutProgramsNav: [
    {
      title: "სასწავლო პროცესი",
      items: [
        {
          title: "სტრუქტურა",
          href: "/programs/about/structure",
        },
        {
          title: "ხანგრძლივობა",
          href: "/programs/about/duration",
        },
        {
          title: "საფასური",
          href: "/programs/about/pricing",
        },
        // {
        //   title: "ლექტორები",
        //   href: "/programs/about/lecturers",
        // },
        // {
        //   title: "მენტორები",
        //   href: "/programs/about/mentors",
        // },
        // {
        //   title: "სწავლის დაწყება",
        //   href: "/programs/about/start",
        // },
        {
          title: "რეგისტრაცია",
          href: "/programs/about/registration",
        },
      ],
    },
  ],
  universalProgramsNav: [
    {
      title: "უნივერსალური",
      items: [
        {
          title: "პროგრამირების საფუძვლები",
          href: "/programs/universal/programming",
        },
      ],
    },
  ],
  frontendProgramsNav: [
    {
      title: "Front-End",
      items: [
        {
          title: "React",
          href: "/programs/front-end/react",
        },
        {
          title: "Vue",
          href: "/programs/front-end/vue",
        },
      ],
    },
  ],
  backendProgramsNav: [
    {
      title: "Back-End",
      items: [
        {
          title: "Python",
          href: "/programs/back-end/python",
        },
        {
          title: "Node.js",
          href: "/programs/back-end/nodejs",
        },
      ],
    },
  ],
  fullstackProgramsNav: [
    {
      title: "Full-Stack",
      items: [
        {
          title: "🚀 BitCamp PRO",
          href: "/programs/full-stack/pro",
        },
      ],
    },
  ],
  kidsProgramsNav: [
    {
      title: "საბავშვო პროგრამები",
      items: [
        {
          title: "👾 BitCamp Kids",
          href: "/programs/kids",
        },
      ],
    },
  ],
}
