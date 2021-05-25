-- CreateTable
CREATE TABLE "Board" (
    "id" TEXT NOT NULL,
    "A1" TEXT NOT NULL,
    "A2" TEXT NOT NULL,
    "A3" TEXT NOT NULL,
    "B1" TEXT NOT NULL,
    "B2" TEXT NOT NULL,
    "B3" TEXT NOT NULL,
    "C1" TEXT NOT NULL,
    "C2" TEXT NOT NULL,
    "C3" TEXT NOT NULL,
    "winerId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Board" ADD FOREIGN KEY ("winerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
