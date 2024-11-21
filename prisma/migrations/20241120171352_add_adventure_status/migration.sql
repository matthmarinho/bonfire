-- CreateEnum
CREATE TYPE "AdventureStatus" AS ENUM ('WAITING_FOR_PLAYERS', 'ACTIVE', 'PAUSED');

-- AlterTable
ALTER TABLE "Adventure" ADD COLUMN     "status" "AdventureStatus" NOT NULL DEFAULT 'WAITING_FOR_PLAYERS';
