-- CreateTable
CREATE TABLE "url" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "long" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
