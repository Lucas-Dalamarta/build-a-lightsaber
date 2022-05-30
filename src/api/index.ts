const BASE_URL = 'https://rickandmortyapi.com/api'

export const getAllCharacters = async (): Promise<any> => {
  const response = await fetch(`${BASE_URL}/character`)

  return response.json()
}