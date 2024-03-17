import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  uniqueIndex,
  date,
  numeric,
  integer,
  index,
  bigint,
} from "drizzle-orm/pg-core";
import { InferModel, desc } from "drizzle-orm";

export const UsersTable = pgTable(
  "applied_user",
  {
    id: serial("id").primaryKey().notNull(),
    fullName: text("full_name").notNull(),
    fatherName: text("father_name").notNull(),
    cnic: bigint("cnic", { mode: "number" }).notNull(),
    phoneNumber: bigint("phone_number", { mode: "number" }).notNull(),
    city: text("city").notNull(),
    email: text("email").notNull(),
    gender: text("gender").notNull(),
    dateOfBirth: date("date_of_birth").notNull(),
    highestQualification: text("highest_qualification").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(
        users.cnic,
        users.phoneNumber,
        users.email
      ),
      index: index("idx_sort_id").on(users.id).desc(),
    };
  }
);

export type User = InferModel<typeof UsersTable>;
export type NewUser = InferModel<typeof UsersTable, "insert">;
