/*
  Warnings:

  - You are about to drop the column `total_users_by_date` on the `Analytics` table. All the data in the column will be lost.
  - Added the required column `count` to the `Analytics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `Analytics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analytics" DROP COLUMN "total_users_by_date",
ADD COLUMN     "count" INTEGER NOT NULL,
ADD COLUMN     "data" TEXT NOT NULL;
