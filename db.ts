import { PrismaClient } from "@prisma/client"
import { enhance } from '@zenstackhq/runtime'

export const prisma = enhance(new PrismaClient())

