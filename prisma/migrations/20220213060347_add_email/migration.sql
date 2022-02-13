/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Dealer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Driver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dealer" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Dealer_email_key" ON "Dealer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_email_key" ON "Driver"("email");
