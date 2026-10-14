import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "demo@languagepath.test";
  const passwordHash = await hash("languagepath", 12);
  await prisma.user.upsert({
    where: { email },
    update: { passwordHash },
    create: {
      email,
      name: "Demo learner",
      passwordHash,
    },
  });
  console.log("Seeded demo user demo@languagepath.test / languagepath");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
