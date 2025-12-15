import { getSurveysForCategory as getSurveysFromPrisma } from './prismaService'

export default async function getSurveysForCategory(category: string) {
  return await getSurveysFromPrisma(category)
}
