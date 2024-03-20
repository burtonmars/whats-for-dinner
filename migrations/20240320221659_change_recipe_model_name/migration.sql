-- CreateTable
CREATE TABLE "Meal" (
    "id" SERIAL NOT NULL,
    "mainTitle" TEXT NOT NULL,
    "secondaryTitle" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "tags" TEXT[],
    "ingredients" TEXT[],
    "notes" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meal_pkey" PRIMARY KEY ("id")
);
