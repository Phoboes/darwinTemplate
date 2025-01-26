import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "meta" DROP CONSTRAINT "meta_favico_id_media_id_fk";
  
  DROP INDEX IF EXISTS "meta_favico_idx";
  ALTER TABLE "media" ALTER COLUMN "filename" SET NOT NULL;
  ALTER TABLE "meta" DROP COLUMN IF EXISTS "favico_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" ALTER COLUMN "filename" DROP NOT NULL;
  ALTER TABLE "meta" ADD COLUMN "favico_id" integer;
  DO $$ BEGIN
   ALTER TABLE "meta" ADD CONSTRAINT "meta_favico_id_media_id_fk" FOREIGN KEY ("favico_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "meta_favico_idx" ON "meta" USING btree ("favico_id");`)
}
