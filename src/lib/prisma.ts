import { PrismaClient } from '@prisma/client';

const globalFor = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalFor.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalFor.prisma = prisma;