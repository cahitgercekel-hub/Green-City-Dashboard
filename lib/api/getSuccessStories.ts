import { getSuccessStoriesForCategory as getSuccessStoriesFromPrisma } from './prismaService'

export default async function getSuccessStoriesForCategory(category: string) {
  return await getSuccessStoriesFromPrisma(category)
}
