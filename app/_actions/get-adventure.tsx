const rpgFormats = [
  {
    name: "Campaign",
    description:
      "A long-term game with a continuous storyline spanning multiple sessions.",
  },
  {
    name: "One-shot",
    description:
      "A standalone game designed to be completed in a single session.",
  },
  {
    name: "Mini-campaign",
    description:
      "A shorter campaign, usually lasting a few sessions with a focused storyline.",
  },
  {
    name: "Episodic Campaign",
    description:
      "A series of loosely connected adventures, where each session can stand alone.",
  },
  {
    name: "West Marches Campaign",
    description:
      "A player-driven game with an open world, flexible player groups, and sandbox style.",
  },
]

const mockGrimoire = [
  {
    id: "1",
    maxPlayers: 4,
    minPlayers: 2,
    currentPlayers: 3,
    title: "Uivos no Silêncio",
    system: "Brave Zenith",
    schedule: {
      frequency: "Weekly",
      day: "Monday",
      time: "8:00 PM",
    },
    nextSession: {
      date: "2024-11-04T20:00:00Z",
      sessionNumber: "1",
    },
    duration: "2 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about: `The Radiant Citadel: an ethereal, floating city carved out of a single, massive fossil that snakes around a gemstone shard known as the Auroral Diamond. Abandoned and lost for ages, the Citadel was rediscovered and resurrected from its slumber.
            \nThe existence of the Citadel is nought but a dimly understood rumour for most who dwell on the earth...
            \n... But not you.
            \nYou are different. You have been granted special permission to live on the Radiant Citadel. In exchange, you are obligated to use your special skills to bring peace and harmony to the Founders' lands. It is a golden opportunity: a chance to learn of the other cultures of the world, to meet your Dawn Incarnate, maybe even to have an adventure or two...
            \n~~~
            \nWe will use Roll20, (for its VTT) D&DBeyond (for its character sheets\content sharing) and Discord (for voice chatting.) Detailed battlemaps, ambient music and dynamic lighting will be provided for immersive gameplay.
            \nI am available to field questions for newer players, as well as provide rules\character building help.
            \nLGBTQ+ players welcome!`,
    banner:
      "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
  },
  {
    id: "2",
    maxPlayers: 5,
    minPlayers: 3,
    currentPlayers: 3,
    title: "Mystic Realms: Secrets of the Ancients",
    system: "Pathfinder 2e",
    schedule: {
      frequency: "Biweekly",
      day: "Saturday",
      time: "5:00 PM",
    },
    nextSession: {
      date: "2024-11-11T17:00:00Z",
      sessionNumber: "2",
    },
    duration: "3 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[1],
    about: "",
    banner: "https://picsum.photos/id/542/200/300",
  },
  {
    id: "3",
    maxPlayers: 6,
    minPlayers: 3,
    currentPlayers: 0,
    title: "Epic Adventures: The Lost Treasure",
    system: "Dungeons & Dragons 5e",
    schedule: {
      frequency: "Weekly",
      day: "Thursday",
      time: "7:00 PM",
    },
    nextSession: {
      date: "2024-11-02T19:00:00Z",
      sessionNumber: "3",
    },
    duration: "2 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[2],
    about:
      "The existence of the Citadel is nought but a dimly understood rumour for most who dwell on the earth...",
    banner: "https://picsum.photos/id/358/200/300",
  },
  {
    id: "4",
    maxPlayers: 5,
    minPlayers: 3,
    currentPlayers: 2,
    title: "Legends of the Forgotten Realms",
    system: "Dungeons & Dragons 5e",
    schedule: {
      frequency: "Monthly",
      day: "Friday",
      time: "6:00 PM",
    },
    nextSession: {
      date: "2024-12-01T18:00:00Z",
      sessionNumber: "4",
    },
    duration: "4 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[3],
    about: "",
    banner: "https://picsum.photos/id/123/200/300",
  },
  {
    id: "5",
    maxPlayers: 7,
    minPlayers: 4,
    currentPlayers: 5,
    title: "Chronicles of the Arcane",
    system: "Mage: The Awakening",
    schedule: {
      frequency: "Weekly",
      day: "Wednesday",
      time: "8:00 PM",
    },
    nextSession: {
      date: "2024-10-30T20:00:00Z",
      sessionNumber: "5",
    },
    duration: "3 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[4],
    about: "... But not you.",
    banner: "https://picsum.photos/id/666/200/300",
  },
  {
    id: "6",
    maxPlayers: 8,
    minPlayers: 4,
    currentPlayers: 6,
    title: "The Cursed Forest",
    system: "Call of Cthulhu",
    schedule: {
      frequency: "Biweekly",
      day: "Sunday",
      time: "4:00 PM",
    },
    nextSession: {
      date: "2024-11-08T16:00:00Z",
      sessionNumber: "12",
    },
    duration: "4 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about: "",
    banner: "https://picsum.photos/id/237/200/300",
  },
  {
    id: "7",
    maxPlayers: 6,
    minPlayers: 2,
    currentPlayers: 4,
    title: "Forgotten Legends",
    system: "Dungeons & Dragons 5e",
    schedule: {
      frequency: "Monthly",
      day: "Tuesday",
      time: "5:30 PM",
    },
    nextSession: {
      date: "2024-12-15T17:30:00Z",
      sessionNumber: "20",
    },
    duration: "3 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about:
      "You are different. You have been granted special permission to live on the Radiant Citadel. In exchange, you are obligated to use your special skills to bring peace and harmony to the Founders' lands. It is a golden opportunity: a chance to learn of the other cultures of the world, to meet your Dawn Incarnate, maybe even to have an adventure or two...",
    banner: "https://picsum.photos/id/238/200/300",
  },
  {
    id: "8",
    maxPlayers: 7,
    minPlayers: 4,
    currentPlayers: 5,
    title: "Veil of Shadows",
    system: "Vampire: The Masquerade",
    schedule: {
      frequency: "Weekly",
      day: "Friday",
      time: "9:00 PM",
    },
    nextSession: {
      date: "2024-10-31T21:00:00Z",
      sessionNumber: "8",
    },
    duration: "2 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about: "",
    banner: "https://picsum.photos/id/239/200/300",
  },
  {
    id: "9",
    maxPlayers: 4,
    minPlayers: 2,
    currentPlayers: 3,
    title: "Mysteries of the Old World",
    system: "Warhammer Fantasy RPG",
    schedule: {
      frequency: "Weekly",
      day: "Thursday",
      time: "6:00 PM",
    },
    nextSession: {
      date: "2024-11-05T18:00:00Z",
      sessionNumber: "3",
    },
    duration: "3 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about: "~~~",
    banner: "https://picsum.photos/id/287/200/300",
  },
  {
    id: "10",
    maxPlayers: 5,
    minPlayers: 3,
    currentPlayers: 2,
    title: "The Dragon's Horde",
    system: "Dungeons & Dragons 5e",
    schedule: {
      frequency: "Weekly",
      day: "Wednesday",
      time: "7:00 PM",
    },
    nextSession: {
      date: "2024-11-10T19:00:00Z",
      sessionNumber: "15",
    },
    duration: "4 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about: "",
    banner: "https://picsum.photos/id/277/200/300",
  },
  {
    id: "11",
    maxPlayers: 6,
    minPlayers: 3,
    currentPlayers: 4,
    title: "Secrets Beneath the Waves",
    system: "Pathfinder",
    schedule: {
      frequency: "Monthly",
      day: "Saturday",
      time: "3:00 PM",
    },
    nextSession: {
      date: "2024-11-15T15:00:00Z",
      sessionNumber: "4",
    },
    duration: "3 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about:
      "We will use Roll20, (for its VTT) D&DBeyond (for its character sheets/content sharing) and Discord (for voice chatting.) Detailed battlemaps, ambient music and dynamic lighting will be provided for immersive gameplay.",
    banner: "https://picsum.photos/id/267/200/300",
  },
  {
    id: "12",
    maxPlayers: 8,
    minPlayers: 5,
    currentPlayers: 7,
    title: "The Frostbound Peaks",
    system: "Dungeons & Dragons 5e",
    schedule: {
      frequency: "Biweekly",
      day: "Monday",
      time: "7:00 PM",
    },
    nextSession: {
      date: "2024-11-06T19:00:00Z",
      sessionNumber: "10",
    },
    duration: "2 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about: "",
    banner: "https://picsum.photos/id/257/200/300",
  },
  {
    id: "13",
    maxPlayers: 4,
    minPlayers: 2,
    currentPlayers: 3,
    title: "Realm of the Dark Queen",
    system: "Pathfinder",
    schedule: {
      frequency: "Weekly",
      day: "Tuesday",
      time: "5:00 PM",
    },
    nextSession: {
      date: "2024-11-07T17:00:00Z",
      sessionNumber: "2",
    },
    duration: "3 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about:
      "I am available to field questions for newer players, as well as provide rules/character building help.",
    banner: "https://picsum.photos/id/247/200/300",
  },
  {
    id: "14",
    maxPlayers: 6,
    minPlayers: 3,
    currentPlayers: 4,
    title: "Echoes of the Past",
    system: "Dungeon World",
    schedule: {
      frequency: "Monthly",
      day: "Sunday",
      time: "2:00 PM",
    },
    nextSession: {
      date: "2024-11-20T14:00:00Z",
      sessionNumber: "5",
    },
    duration: "4 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about: "",
    banner: "https://picsum.photos/id/337/200/300",
  },
  {
    id: "15",
    maxPlayers: 7,
    minPlayers: 5,
    currentPlayers: 6,
    title: "The Witch's Curse",
    system: "Fate Core",
    schedule: {
      frequency: "Weekly",
      day: "Thursday",
      time: "8:00 PM",
    },
    nextSession: {
      date: "2024-11-15T20:00:00Z",
      sessionNumber: "6",
    },
    duration: "2 hours",
    dungeonMaster: {
      id: "1",
      name: "Alice",
      avatarUrl: "/girl.jpg",
      rating: {
        score: 4.8,
        totalRatings: 150,
      },
      sessionsPlayed: 120,
      yearsExperiencePlayer: 10,
      yearsExperienceDungeonMaster: 7,
      platformTime: "2 years",
      proficiencies: ["Narrativo", "Flexível", "Criativo"],
      aboutMe:
        "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
      style:
        "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
      systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
      socialLinks: {
        twitter: "https://twitter.com/dm_alice",
        instagram: "https://instagram.com/dm_alice_adventures",
      },
    },
    experience: "Beginner",
    age: "+12",
    format: rpgFormats[0],
    about: "LGBTQ+ players welcome!",
    banner: "https://picsum.photos/id/227/200/300",
  },
]

export interface DungeonMasterProps {
  id: string
  name: string
  avatarUrl: string
  rating: {
    score: number
    totalRatings: number
  }
  sessionsPlayed: number
  yearsExperiencePlayer: number
  yearsExperienceDungeonMaster: number
  platformTime: string
  proficiencies: string[] // Ex.: ["Organizado", "Criativo", "Flexível"]
  aboutMe: string
  style: string // Ex.: "Narrativo e descritivo, com ênfase na imersão"
  systemsPlayed: string[] // Ex.: ["Dungeons & Dragons", "Pathfinder"]
  socialLinks: {
    twitter?: string
    instagram?: string
    youtube?: string
  }
}

// Interface para a sessão
interface NextSessionProps {
  date: string // Formato ISO 8601 (ex: "2024-11-04T20:00:00Z")
  sessionNumber: string
}

// Interface para o horário
interface ScheduleProps {
  frequency: string // Ex: "Weekly", "Biweekly", etc.
  day: string // Dia da semana
  time: string // Horário (ex: "8:00 PM")
}

interface FormatProps {
  name: string // Formato ISO 8601 (ex: "2024-11-04T20:00:00Z")
  description: string
}

// Interface principal do Grimoire
export interface AdventureProps {
  id: string
  maxPlayers: number
  minPlayers: number
  currentPlayers: number
  title: string
  system: string // Sistema de RPG (ex: "Dungeons & Dragons 5e")
  schedule: ScheduleProps
  nextSession: NextSessionProps
  duration: string // Duração da sessão
  dungeonMaster: DungeonMasterProps
  experience: string
  age: string
  format: FormatProps
  about: string
  banner: string // URL da imagem do banner
}

const GetAdventure = async (id: string): Promise<AdventureProps> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const grimoire = mockGrimoire.find((g) => g.id === id)
      if (grimoire) {
        resolve(grimoire)
      } else {
        throw new Error(`Aventura com id: "${id} não encontrada`)
      }
    }, 1000)
  })
}

export default GetAdventure
