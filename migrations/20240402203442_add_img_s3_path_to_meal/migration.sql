/*
  Warnings:

  - Added the required column `imgS3Path` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meal" ADD COLUMN "imgS3Path" TEXT NOT NULL DEFAULT '';

