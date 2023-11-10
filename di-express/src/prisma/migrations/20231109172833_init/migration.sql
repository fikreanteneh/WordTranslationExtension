-- CreateTable
CREATE TABLE "Language" (
    "Language" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("Language")
);

-- CreateTable
CREATE TABLE "Translation" (
    "Word" TEXT NOT NULL,
    "Language" TEXT NOT NULL,
    "TranslatedLanguage" TEXT NOT NULL,
    "TranslatedWord" TEXT NOT NULL,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("Word","Language","TranslatedLanguage")
);
