-- CreateTable
CREATE TABLE "Usuario" (
    "direccion_correo" VARCHAR(150) NOT NULL,
    "descripcion" VARCHAR(500) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("direccion_correo")
);

-- CreateTable
CREATE TABLE "direccion_favorita" (
    "correo_usuario" TEXT NOT NULL,
    "direccion_favorita" VARCHAR(150) NOT NULL,
    "fecha_agregado" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "direccion_favorita_pkey" PRIMARY KEY ("correo_usuario","direccion_favorita")
);

-- CreateTable
CREATE TABLE "direccion_bloqueada" (
    "correo_usuario" TEXT NOT NULL,
    "direccion_bloqueada" VARCHAR(150) NOT NULL,
    "fecha_agregado" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "direccion_bloqueada_pkey" PRIMARY KEY ("correo_usuario","direccion_bloqueada")
);

-- CreateTable
CREATE TABLE "correo" (
    "id" SERIAL NOT NULL,
    "correo_remitente" TEXT NOT NULL,
    "correo_destinatario" TEXT NOT NULL,
    "fecha_envio" TIMESTAMP(3) NOT NULL,
    "es_favorito" BOOLEAN NOT NULL,

    CONSTRAINT "correo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "direccion_favorita" ADD CONSTRAINT "direccion_favorita_correo_usuario_fkey" FOREIGN KEY ("correo_usuario") REFERENCES "Usuario"("direccion_correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "direccion_bloqueada" ADD CONSTRAINT "direccion_bloqueada_correo_usuario_fkey" FOREIGN KEY ("correo_usuario") REFERENCES "Usuario"("direccion_correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "correo" ADD CONSTRAINT "correo_correo_remitente_fkey" FOREIGN KEY ("correo_remitente") REFERENCES "Usuario"("direccion_correo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "correo" ADD CONSTRAINT "correo_correo_destinatario_fkey" FOREIGN KEY ("correo_destinatario") REFERENCES "Usuario"("direccion_correo") ON DELETE RESTRICT ON UPDATE CASCADE;
