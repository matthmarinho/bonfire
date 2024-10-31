"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card"
import { Badge } from "@/app/_components/ui/badge"
import { Button } from "@/app/_components/ui/button"
import { BookTextIcon, CalendarIcon } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "../_components/ui/tabs"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
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
}

const cards = [
  {
    id: "1",
    title: "A Profecia de Eldoria",
    status: "Em Andamento",
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
  },
  {
    id: "2",
    title: "Sombras de Kaldoria",
    status: "Requisitado",
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
  },
  {
    id: "3",
    title: "Labirinto dos Antigos",
    status: "Recusado",
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
  },
  {
    id: "4",
    title: "Terras de Aranthis",
    status: "Requisitado",
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
  },
  {
    id: "5",
    title: "Terras de Aranthis",
    status: "Requisitado",
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
  },
  {
    id: "6",
    title: "Terras de Aranthis",
    status: "Requisitado",
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
  },
]

const Requests = () => {
  const [adventures, setAdventures] = useState<AdventureCard[] | []>([])
  const [tab, setTab] = useState("adventures")

  const handleTabs = (event: string) => {
    setTab(event)
  }

  useEffect(() => {
    if (tab === "adventures") {
      setAdventures(cards.filter((c) => c.status === "Em Andamento"))
    } else {
      setAdventures(cards.filter((c) => c.status !== "Em Andamento"))
    }
  }, [tab])

  const renderBadge = (param: string) => {
    switch (param) {
      case "Recusado":
        return (
          <Badge variant="destructive" className="mb-4">
            {param}
          </Badge>
        )
      case "Requisitado":
        return <Badge className="mb-4">{param}</Badge>
      default:
        return (
          <Badge variant="positive" className="mb-4">
            {param}
          </Badge>
        )
    }
  }

  return (
    <div className="h-[calc(100vh-47px)]">
      <div className="no-scrollbar relative top-0 h-full w-full overflow-auto">
        <div className="absolute left-0 right-0 top-0 z-20 bg-background px-4 pb-3">
          <Tabs value={tab} onValueChange={handleTabs}>
            <TabsList className="flex w-full flex-row justify-stretch">
              <TabsTrigger className="w-full" value="adventures">
                Adventures
              </TabsTrigger>
              <TabsTrigger className="w-full" value="pending">
                Pending
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="no-scrollbar mt-4 flex h-[calc(100vh-87px)] flex-col gap-5 overflow-auto px-4 pb-20 pt-11">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {adventures.map((card, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="px-4 pb-2 pt-4">
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-4 py-0 text-sm">
                  {renderBadge(card.status)}

                  <div className="justify-left flex flex-row items-center gap-1">
                    <BookTextIcon size={16} />
                    <p>{card.rpgFormat}</p>
                  </div>
                  <div className="justify-left flex flex-row items-center gap-1">
                    <CalendarIcon size={16} />
                    <p>{dayjs(card.nextSession).format("DD MMM")}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4">
                  <Button>Open</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Requests
