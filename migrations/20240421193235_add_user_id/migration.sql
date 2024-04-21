/*
  Warnings:

  - Added the required column `userId` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meal" ADD COLUMN     "userId" TEXT NOT NULL;
