CREATE TABLE IF NOT EXISTS "__EFMigrationsHistory" (
    "MigrationId" TEXT NOT NULL CONSTRAINT "PK___EFMigrationsHistory" PRIMARY KEY,
    "ProductVersion" TEXT NOT NULL
);

BEGIN TRANSACTION;

CREATE TABLE "Aluno" (
    "Id" INTEGER NOT NULL CONSTRAINT "PK_Aluno" PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "DataNascimento" TEXT NOT NULL
);

CREATE TABLE "Disciplina" (
    "Id" INTEGER NOT NULL CONSTRAINT "PK_Disciplina" PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "CargaHoraria" INTEGER NOT NULL
);

CREATE TABLE "Boletim" (
    "Id" INTEGER NOT NULL CONSTRAINT "PK_Boletim" PRIMARY KEY AUTOINCREMENT,
    "AlunoId" INTEGER NOT NULL,
    "DataEntrega" TEXT NULL,
    CONSTRAINT "FK_Boletim_Aluno_AlunoId" FOREIGN KEY ("AlunoId") REFERENCES "Aluno" ("Id") ON DELETE CASCADE
);

CREATE TABLE "NotasBoletim" (
    "Id" INTEGER NOT NULL CONSTRAINT "PK_NotasBoletim" PRIMARY KEY AUTOINCREMENT,
    "BoletimId" INTEGER NOT NULL,
    "DisciplinaId" INTEGER NOT NULL,
    "Nota" TEXT NOT NULL,
    CONSTRAINT "FK_NotasBoletim_Boletim_BoletimId" FOREIGN KEY ("BoletimId") REFERENCES "Boletim" ("Id") ON DELETE CASCADE,
    CONSTRAINT "FK_NotasBoletim_Disciplina_DisciplinaId" FOREIGN KEY ("DisciplinaId") REFERENCES "Disciplina" ("Id") ON DELETE CASCADE
);

CREATE INDEX "IX_Boletim_AlunoId" ON "Boletim" ("AlunoId");

CREATE INDEX "IX_NotasBoletim_BoletimId" ON "NotasBoletim" ("BoletimId");

CREATE INDEX "IX_NotasBoletim_DisciplinaId" ON "NotasBoletim" ("DisciplinaId");

INSERT INTO "__EFMigrationsHistory" ("MigrationId", "ProductVersion")
VALUES ('20221106234412_Inicial', '5.0.17');

COMMIT;

