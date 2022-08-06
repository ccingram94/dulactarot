-- DropForeignKey
ALTER TABLE "Reading" DROP CONSTRAINT "Reading_authorId_fkey";

-- AlterTable
ALTER TABLE "Reading" ADD COLUMN     "type" TEXT,
ALTER COLUMN "question" DROP NOT NULL,
ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Reading" ADD CONSTRAINT "Reading_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
