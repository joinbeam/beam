-- CreateTable
CREATE TABLE "tests" (
    "slug" VARCHAR(128) NOT NULL,
    "count" BIGINT NOT NULL DEFAULT 1,

    CONSTRAINT "tests_pkey" PRIMARY KEY ("slug")
);
