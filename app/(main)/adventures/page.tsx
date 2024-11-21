"use client"

import SearchBar from "@/app/_components/search-bar"
import { Badge } from "@/app/_components/ui/badge"
import { Button } from "@/app/_components/ui/button"
import { Card, CardContent } from "@/app/_components/ui/card"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import Image from "next/image"
import { useEffect, useState } from "react"
dayjs.locale("pt-br")

interface AdventureCard {
  id: string
  title: string
  status: string
  dungeonMaster: {
    name: string
    experience: string
    profileLink: string
  }
  description: string
  rpgFormat: string
  nextSession: string
  playersCount: number
  maxPlayers: number
  banner: string
}

const cards = [
  {
    id: "1",
    title: "A Profecia de Eldoria",
    status: "confirmed",
    dungeonMaster: {
      name: "Arthorius Valen",
      experience: "5 anos",
      profileLink: "/profile/arthorius-valen",
    },
    description:
      "Em uma terra repleta de enigmas, heróis precisam desvendar os mistérios de uma profecia esquecida.",
    rpgFormat: "D&D 5e",
    nextSession: "2024-11-05T19:00:00Z",
    playersCount: 4,
    maxPlayers: 6,
    banner:
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
  },
  {
    id: "2",
    title: "Sombras de Kaldoria",
    status: "pending",
    dungeonMaster: {
      name: "Lysandra Darkmoon",
      experience: "3 anos",
      profileLink: "/profile/lysandra-darkmoon",
    },
    description:
      "Na escuridão das florestas de Kaldoria, algo sinistro aguarda os aventureiros que ousam entrar.",
    rpgFormat: "Pathfinder",
    nextSession: "2024-11-10T18:30:00Z",
    playersCount: 2,
    maxPlayers: 5,
    banner: "https://picsum.photos/id/542/200/300",
  },
  {
    id: "3",
    title: "Labirinto dos Antigos",
    status: "recused",
    dungeonMaster: {
      name: "Thorne Shieldbreaker",
      experience: "8 anos",
      profileLink: "/profile/thorne-shieldbreaker",
    },
    description:
      "Um labirinto há muito esquecido esconde segredos que podem mudar o destino do mundo.",
    rpgFormat: "Dungeon World",
    nextSession: "2024-11-12T20:00:00Z",
    playersCount: 5,
    maxPlayers: 5,
    banner:
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
  },
  {
    id: "4",
    title: "Terras de Aranthis",
    status: "pending",
    dungeonMaster: {
      name: "Eldric Stormcaller",
      experience: "6 anos",
      profileLink: "/profile/eldric-stormcaller",
    },
    description:
      "Em Aranthis, as antigas forças da natureza e da magia colidem, trazendo caos e aventuras inesquecíveis.",
    rpgFormat: "Savage Worlds",
    nextSession: "2024-11-12T20:00:00Z",
    playersCount: 4,
    maxPlayers: 4,
    banner:
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
  },
  {
    id: "5",
    title: "Terras de Aranthis",
    status: "pending",
    dungeonMaster: {
      name: "Eldric Stormcaller",
      experience: "6 anos",
      profileLink: "/profile/eldric-stormcaller",
    },
    description:
      "Em Aranthis, as antigas forças da natureza e da magia colidem, trazendo caos e aventuras inesquecíveis.",
    rpgFormat: "Savage Worlds",
    nextSession: "2024-11-12T20:00:00Z",
    playersCount: 4,
    maxPlayers: 4,
    banner:
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
  },
  {
    id: "6",
    title: "Terras de Aranthis",
    status: "pending",
    dungeonMaster: {
      name: "Eldric Stormcaller",
      experience: "6 anos",
      profileLink: "/profile/eldric-stormcaller",
    },
    description:
      "Em Aranthis, as antigas forças da natureza e da magia colidem, trazendo caos e aventuras inesquecíveis.",
    rpgFormat: "Savage Worlds",
    nextSession: "2024-11-12T20:00:00Z",
    playersCount: 4,
    maxPlayers: 4,
    banner:
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
  },
]

const Adventures = () => {
  const [adventures, setAdventures] = useState<AdventureCard[] | []>([])
  const [tab, setTab] = useState("all")
  const [value, setValue] = useState("")

  const handleTabs = (event: string) => {
    setTab(event)
  }

  useEffect(() => {
    if (tab === "all") {
      setAdventures(cards.filter((c) => c.title.toLowerCase().includes(value)))
    } else {
      setAdventures(
        cards
          .filter((c) => c.status === tab)
          .filter((c) => c.title.toLowerCase().includes(value)),
      )
    }
  }, [tab, value])

  const handleClear = () => {
    setValue("")
    setAdventures(adventures)
  }

  const renderBadge = (param: AdventureCard) => {
    switch (param.status) {
      case "recused":
        return <Badge variant="destructive">{param.status}</Badge>
      case "pending":
        return <Badge>{param.status}</Badge>
      default:
        return (
          <Badge variant="positive">
            {dayjs(param.nextSession).format("DD MMM")}
          </Badge>
        )
    }
  }

  return (
    <>
      <div className="h-[calc(100dvh-3.5rem)] w-full">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex flex-row gap-2">
            <SearchBar
              value={value}
              setValue={setValue}
              handleClear={handleClear}
            />
          </div>
          <div className="no-scrollbar flex w-full gap-2 overflow-hidden overflow-x-auto p-1">
            <Button
              size="sm"
              variant={tab === "all" ? "pressed" : "neutral"}
              onClick={() => handleTabs("all")}
            >
              All
            </Button>
            <Button
              size="sm"
              variant={tab === "confirmed" ? "pressed" : "neutral"}
              onClick={() => handleTabs("confirmed")}
            >
              Confirmed
            </Button>
            <Button
              size="sm"
              variant={tab === "pending" ? "pressed" : "neutral"}
              onClick={() => handleTabs("pending")}
            >
              Pending
            </Button>
            <Button
              size="sm"
              variant={tab === "recused" ? "pressed" : "neutral"}
              onClick={() => handleTabs("recused")}
            >
              Recused
            </Button>
          </div>
        </div>
        <div className="no-scrollbar h-[calc(100dvh-8rem)] overflow-y-auto px-4 pb-20">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {adventures.map((card, index) => (
              <Card
                key={index}
                className="flex flex-col hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
              >
                <a href={`adventures/${card.id}`}>
                  <CardContent className="relative flex-grow p-0 text-sm">
                    <div className="relative aspect-[3/4] rounded-lg">
                      <Image
                        alt={card.title}
                        src={card.banner}
                        fill
                        className={"h-full w-full rounded-lg object-cover"}
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 m-2 space-y-2 rounded-lg border-2 border-border bg-white p-2">
                      <div className="absolute -top-3 left-3">
                        {renderBadge(card)}
                      </div>
                      <p className="text-base font-semibold">{card.title}</p>
                    </div>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Adventures

// "use client"

// import { Card, CardContent } from "@/app/_components/ui/card"
// import { Badge } from "@/app/_components/ui/badge"
// import { Tabs, TabsList, TabsTrigger } from "../../_components/ui/tabs"
// import dayjs from "dayjs"
// import "dayjs/locale/pt-br"
// import { useEffect, useState } from "react"
// import Image from "next/image"
// import { cn } from "../../_lib/utils"
// import { Button } from "@/app/_components/ui/button"
// dayjs.locale("pt-br")

// interface AdventureCard {
//   id: string
//   title: string
//   status: string
//   dungeonMaster: {
//     name: string
//     experience: string
//     profileLink: string
//   }
//   description: string
//   rpgFormat: string
//   nextSession: string
//   playersCount: number
//   maxPlayers: number
//   banner: string
// }

// const cards = [
//   {
//     id: "1",
//     title: "A Profecia de Eldoria",
//     status: "confirmed",
//     dungeonMaster: {
//       name: "Arthorius Valen",
//       experience: "5 anos",
//       profileLink: "/profile/arthorius-valen",
//     },
//     description:
//       "Em uma terra repleta de enigmas, heróis precisam desvendar os mistérios de uma profecia esquecida.",
//     rpgFormat: "D&D 5e",
//     nextSession: "2024-11-05T19:00:00Z",
//     playersCount: 4,
//     maxPlayers: 6,
//     banner:
//       "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
//   },
//   {
//     id: "2",
//     title: "Sombras de Kaldoria",
//     status: "pending",
//     dungeonMaster: {
//       name: "Lysandra Darkmoon",
//       experience: "3 anos",
//       profileLink: "/profile/lysandra-darkmoon",
//     },
//     description:
//       "Na escuridão das florestas de Kaldoria, algo sinistro aguarda os aventureiros que ousam entrar.",
//     rpgFormat: "Pathfinder",
//     nextSession: "2024-11-10T18:30:00Z",
//     playersCount: 2,
//     maxPlayers: 5,
//     banner: "https://picsum.photos/id/542/200/300",
//   },
//   {
//     id: "3",
//     title: "Labirinto dos Antigos",
//     status: "recused",
//     dungeonMaster: {
//       name: "Thorne Shieldbreaker",
//       experience: "8 anos",
//       profileLink: "/profile/thorne-shieldbreaker",
//     },
//     description:
//       "Um labirinto há muito esquecido esconde segredos que podem mudar o destino do mundo.",
//     rpgFormat: "Dungeon World",
//     nextSession: "2024-11-12T20:00:00Z",
//     playersCount: 5,
//     maxPlayers: 5,
//     banner:
//       "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
//   },
//   {
//     id: "4",
//     title: "Terras de Aranthis",
//     status: "pending",
//     dungeonMaster: {
//       name: "Eldric Stormcaller",
//       experience: "6 anos",
//       profileLink: "/profile/eldric-stormcaller",
//     },
//     description:
//       "Em Aranthis, as antigas forças da natureza e da magia colidem, trazendo caos e aventuras inesquecíveis.",
//     rpgFormat: "Savage Worlds",
//     nextSession: "2024-11-12T20:00:00Z",
//     playersCount: 4,
//     maxPlayers: 4,
//     banner:
//       "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
//   },
//   {
//     id: "5",
//     title: "Terras de Aranthis",
//     status: "pending",
//     dungeonMaster: {
//       name: "Eldric Stormcaller",
//       experience: "6 anos",
//       profileLink: "/profile/eldric-stormcaller",
//     },
//     description:
//       "Em Aranthis, as antigas forças da natureza e da magia colidem, trazendo caos e aventuras inesquecíveis.",
//     rpgFormat: "Savage Worlds",
//     nextSession: "2024-11-12T20:00:00Z",
//     playersCount: 4,
//     maxPlayers: 4,
//     banner:
//       "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
//   },
//   {
//     id: "6",
//     title: "Terras de Aranthis",
//     status: "pending",
//     dungeonMaster: {
//       name: "Eldric Stormcaller",
//       experience: "6 anos",
//       profileLink: "/profile/eldric-stormcaller",
//     },
//     description:
//       "Em Aranthis, as antigas forças da natureza e da magia colidem, trazendo caos e aventuras inesquecíveis.",
//     rpgFormat: "Savage Worlds",
//     nextSession: "2024-11-12T20:00:00Z",
//     playersCount: 4,
//     maxPlayers: 4,
//     banner:
//       "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
//   },
// ]

// const Requests = () => {
//   const [adventures, setAdventures] = useState<AdventureCard[] | []>([])
//   const [tab, setTab] = useState("adventures")

//   const handleTabs = (event: string) => {
//     setTab(event)
//   }

//   useEffect(() => {
//     if (tab === "adventures") {
//       setAdventures(cards.filter((c) => c.status === "confirmed"))
//     } else {
//       setAdventures(cards.filter((c) => c.status !== "confirmed"))
//     }
//   }, [tab])

//   const renderBadge = (param: AdventureCard) => {
//     switch (param.status) {
//       case "recused":
//         return <Badge variant="destructive">{param.status}</Badge>
//       case "pending":
//         return <Badge>{param.status}</Badge>
//       default:
//         return (
//           <Badge variant="positive">
//             {dayjs(param.nextSession).format("DD MMM")}
//           </Badge>
//         )
//     }
//   }

//   return (
//     <>
//       <div className={cn("h-[calc(100dvh-6rem)] w-full")}>
//         <div className="absolute left-0 right-0 top-12 z-20 h-12 flex flex-row justify-between px-4 gap-4">
//           <Tabs className="w-full" value={tab} onValueChange={handleTabs}>
//             <TabsList className="flex w-full flex-row justify-stretch shadow-light">
//               <TabsTrigger className="w-full" value="adventures">
//                 Adventures
//               </TabsTrigger>
//               <TabsTrigger className="w-full" value="pending">
//                 Pending
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//           <Button className="h-12">
//             Opa
//           </Button>
//         </div>
//         <div className="no-scrollbar mt-12 flex h-[calc(100dvh-6rem)] w-full flex-col gap-5 overflow-y-scroll">
//           <div className="grid grid-cols-2 gap-4 px-4 pb-20 pt-4 md:grid-cols-4 lg:grid-cols-8">
//             {adventures.map((card, index) => (
//               <Card
//                 key={index}
//                 className="flex flex-col hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none"
//               >
//                 <a href={`adventures/${card.id}`}>
//                   <CardContent className="relative flex-grow p-0 text-sm">
//                     <div className="relative aspect-[3/4] rounded-lg">
//                       <Image
//                         alt={card.title}
//                         src={card.banner}
//                         fill
//                         className={"h-full w-full rounded-lg object-cover"}
//                       />
//                     </div>
//                     <div className="absolute inset-x-0 bottom-0 m-2 space-y-2 rounded-lg border-2 border-border bg-white p-2">
//                       <div className="absolute -top-3 left-3">
//                         {renderBadge(card)}
//                       </div>
//                       <p className="text-base font-semibold">{card.title}</p>
//                     </div>
//                   </CardContent>
//                 </a>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Requests
