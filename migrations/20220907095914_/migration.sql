/*
  Warnings:

  - You are about to drop the column `savedcards` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "savedcards";

-- CreateTable
CREATE TABLE "SavedCard" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "result" INTEGER NOT NULL,
    "authorId" TEXT,

    CONSTRAINT "SavedCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SavedCard" ADD CONSTRAINT "SavedCard_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
