/*
  Warnings:

  - You are about to drop the column `reviews` on the `Review` table. All the data in the column will be lost.
  - Added the required column `reviewsID` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "reviewsID" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "text" TEXT NOT NULL
);
INSERT INTO "new_Review" ("rating") SELECT "rating" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
CREATE UNIQUE INDEX "Review_reviewsID_key" ON "Review"("reviewsID");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
