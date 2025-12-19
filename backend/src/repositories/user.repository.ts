import { prisma } from "../lib/prisma";
import { CreateUserInput } from "../types/auth.types";

export class UserRepository {
  async createUser(data: CreateUserInput) {
    return prisma.user.create({
      data
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email }
    });
  }

  async findById(id: string) {
    return prisma.user.findUnique({
      where: { id }
    });
  }
}
