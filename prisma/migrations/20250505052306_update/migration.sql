/*
  Warnings:

  - The primary key for the `Analytics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Analytics` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "Analytics_id_key";

-- AlterTable
ALTER TABLE "Analytics" DROP CONSTRAINT "Analytics_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Analytics_pkey" PRIMARY KEY ("id");
