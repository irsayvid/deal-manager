/*
  Warnings:

  - You are about to drop the column `materialType` on the `Dealer` table. All the data in the column will be lost.
  - You are about to drop the column `mobileNumber` on the `Dealer` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Dealer` table. All the data in the column will be lost.
  - You are about to drop the column `weightOfMaterial` on the `Dealer` table. All the data in the column will be lost.
  - Added the required column `fullName` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `natureOfMaterial` to the `Dealer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Dealer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dealer" DROP COLUMN "materialType",
DROP COLUMN "mobileNumber",
DROP COLUMN "username",
DROP COLUMN "weightOfMaterial",
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "mobile" TEXT NOT NULL,
ADD COLUMN     "natureOfMaterial" TEXT NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL;
