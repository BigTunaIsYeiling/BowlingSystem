/*
  Warnings:

  - Added the required column `updatedAt` to the `Bill` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lane" INTEGER NOT NULL,
    "game" INTEGER NOT NULL,
    "frame" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Bill" ("frame", "game", "id", "lane") SELECT "frame", "game", "id", "lane" FROM "Bill";
DROP TABLE "Bill";
ALTER TABLE "new_Bill" RENAME TO "Bill";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
