-- CreateTable
CREATE TABLE "mail" (
    "id" SERIAL NOT NULL,
    "createdat" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMPTZ(6),
    "email" VARCHAR(255),

    CONSTRAINT "mail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mail_email_key" ON "mail"("email");

