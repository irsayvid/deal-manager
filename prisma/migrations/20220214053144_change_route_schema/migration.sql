/*
  Warnings:

  - You are about to drop the column `city` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `routeType` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Route` table. All the data in the column will be lost.
  - Added the required column `fromCity` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromState` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toCity` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toState` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Route" DROP COLUMN "city",
DROP COLUMN "routeType",
DROP COLUMN "state",
ADD COLUMN     "fromCity" TEXT NOT NULL,
ADD COLUMN     "fromState" TEXT NOT NULL,
ADD COLUMN     "toCity" TEXT NOT NULL,
ADD COLUMN     "toState" TEXT NOT NULL;

-- DropEnum
DROP TYPE "RouteType";
