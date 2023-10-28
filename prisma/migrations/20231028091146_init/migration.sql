-- CreateTable
CREATE TABLE "User" (
    "email" STRING NOT NULL,
    "name" STRING NOT NULL,
    "password" STRING NOT NULL,
    "preferences" STRING NOT NULL
);

-- CreateTable
CREATE TABLE "Friend" (
    "email" STRING NOT NULL
);

-- CreateTable
CREATE TABLE "Event" (
    "email" STRING NOT NULL,
    "event_name" STRING NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Friend_email_key" ON "Friend"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Event_email_key" ON "Event"("email");

-- AddForeignKey
ALTER TABLE "Friend" ADD CONSTRAINT "Friend_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
