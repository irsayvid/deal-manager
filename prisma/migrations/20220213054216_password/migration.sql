/*
  Warnings:

  - You are about to drop the column `name` on the `Dealer` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Driver` table. All the data in the column will be lost.
  - Added the required column `password` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dealer" DROP COLUMN "name",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "name",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
