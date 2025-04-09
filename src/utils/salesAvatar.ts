import { avatars } from "@/images"

/**
 * Maps salesperson names to their respective avatar image paths
 * @constant
 * @type {Record<string, string>}
 * @description Used to dynamically associeate a name received from the API with the corresponding avatar image path.
 */

export type SalespersonName =
  | 'Fábio Manoel'
  | 'João Medeiros'
  | 'Larissa Lima'
  | 'Marina Ruiz'

export const avatarsMap: Record<SalespersonName, string> = avatars

/**
 * Returns the avatar path based on the salesperson's name
 * @param name - Salesperson's name received from the API
 * @returns Avatar image path or empty string if not found
 */

export function getSalespersonAvatar(name: string): string {
  return avatars[name as SalespersonName] || ''
}
