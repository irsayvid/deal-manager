/*
  Warnings:

  - You are about to drop the column `mobileNumber` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `truckCapacity` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Driver` table. All the data in the column will be lost.
  - Added the required column `capacity` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "mobileNumber",
DROP COLUMN "truckCapacity",
DROP COLUMN "username",
ADD COLUMN     "capacity" TEXT NOT NULL,
ADD COLUMN     "fullName" TEXT NOT NULL,
ADD COLUMN     "mobile" TEXT NOT NULL,
ALTER COLUMN "age" SET DATA TYPE TEXT,
ALTER COLUMN "drivingExperience" SET DATA TYPE TEXT;
