// import { GrimoireCardProps } from "./getGrimoire";

// const mockDM = [
//   {
//     id: "dm1",
//     name: "Alice",
//     avatarUrl: "/dm-avatar-1.jpg",
//     rating: {
//       score: 4.8,
//       totalRatings: 150,
//     },
//     sessionsPlayed: 120,
//     yearsExperiencePlayer: 10,
//     yearsExperienceDungeonMaster: 7,
//     platformTime: "2 years",
//     proficiencies: ["Narrativo", "Flexível", "Criativo"],
//     aboutMe: "Eu adoro criar aventuras intensas e desafiadoras, onde os jogadores sempre podem esperar o inesperado.",
//     style: "Narrativo com ênfase em descrições detalhadas e mecânicas ajustadas",
//     systemsPlayed: ["Dungeons & Dragons 5e", "Vampire: The Masquerade"],
//     socialLinks: {
//       twitter: "https://twitter.com/dm_alice",
//       instagram: "https://instagram.com/dm_alice_adventures",
//     },
//     gamesCreated: [
//       {
//         id: 1,
//         maxPlayers: 4,
//         minPlayers: 2,
//         currentPlayers: 3,
//         title: "Uivos no Silêncio",
//         system: "Brave Zenith",
//         schedule: {
//           frequency: "Weekly",
//           day: "Monday",
//           time: "8:00 PM",
//         },
//         nextSession: {
//           date: "2024-11-04T20:00:00Z",
//           sessionNumber: "1",
//         },
//         duration: "2 hours",
//         dungeonMaster: {
//           name: "Matthaeus",
//           avatarUrl: "/girl.jpg",
//           rating: {
//             score: 5,
//             totalRatings: 666,
//           },
//         },
//         experience: "Beginner",
//         age: "+12",
//         about: `The Radiant Citadel: an ethereal, floating city carved out of a single, massive fossil that snakes around a gemstone shard known as the Auroral Diamond. Abandoned and lost for ages, the Citadel was rediscovered and resurrected from its slumber.
//                 \nThe existence of the Citadel is nought but a dimly understood rumour for most who dwell on the earth...
//                 \n... But not you.
//                 \nYou are different. You have been granted special permission to live on the Radiant Citadel. In exchange, you are obligated to use your special skills to bring peace and harmony to the Founders' lands. It is a golden opportunity: a chance to learn of the other cultures of the world, to meet your Dawn Incarnate, maybe even to have an adventure or two...
//                 \n~~~
//                 \nWe will use Roll20, (for its VTT) D&DBeyond (for its character sheets\content sharing) and Discord (for voice chatting.) Detailed battlemaps, ambient music and dynamic lighting will be provided for immersive gameplay.
//                 \nI am available to field questions for newer players, as well as provide rules\character building help.
//                 \nLGBTQ+ players welcome!`,
//         banner:
//           "https://s3-sa-east-1.amazonaws.com/cdn.br.catarse/uploads/redactor_rails/picture/data/546900/e76f2b1a-aa1e-472c-a5db-e5b13d0f7db9.png",
//       },
//       {
//         id: 2,
//         maxPlayers: 5,
//         minPlayers: 3,
//         currentPlayers: 3,
//         title: "Mystic Realms: Secrets of the Ancients",
//         system: "Pathfinder 2e",
//         schedule: {
//           frequency: "Biweekly",
//           day: "Saturday",
//           time: "5:00 PM",
//         },
//         nextSession: {
//           date: "2024-11-11T17:00:00Z",
//           sessionNumber: "2",
//         },
//         duration: "3 hours",
//         dungeonMaster: {
//           name: "Marcus",
//           avatarUrl: "/dm-avatar-1.jpg",
//           rating: {
//             score: 2.2,
//             totalRatings: 200,
//           },
//         },
//         experience: "Beginner",
//         age: "+12",
//         about: "",
//         banner: "https://picsum.photos/id/542/200/300",
//       },
//     ],
//   },
//   // Outros DungeonMasters e seus jogos criados podem ser adicionados aqui
// ];

// interface DungeonMasterProps {
//   id: string;
//   name: string;
//   avatarUrl: string;
//   rating: {
//     score: number;
//     totalRatings: number;
//   };
//   sessionsPlayed: number;
//   yearsExperiencePlayer: number;
//   yearsExperienceDungeonMaster: number;
//   platformTime: string;
//   proficiencies: string[]; // Ex.: ["Organizado", "Criativo", "Flexível"]
//   aboutMe: string;
//   style: string; // Ex.: "Narrativo e descritivo, com ênfase na imersão"
//   systemsPlayed: string[]; // Ex.: ["Dungeons & Dragons", "Pathfinder"]
//   socialLinks: {
//     twitter?: string;
//     instagram?: string;
//     youtube?: string;
//     [key: string]: string | undefined;
//   };
//   gamesCreated: GrimoireCardProps[];
// }

// const GetDungeonMaster = async (): Promise<DungeonMasterProps> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(mockDM[0])
//     }, 1000)
//   })
// }

// export default GetDungeonMaster
