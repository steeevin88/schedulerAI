-- DropIndex
DROP INDEX "Event_email_key";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY;
ALTER TABLE "Event" ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");
