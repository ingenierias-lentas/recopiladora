import("node-fetch");

/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export function hello(name?: string) {
  return `hello ${name ?? "world"}`;
}

/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export function goodDay(name?: string) {
  return `good day to you, ${name ?? "world"}`;
}

type Planet = {
  "name": string
  "rotation_period": string
  "orbital_period": string
  "diameter": string
  "climate": string
  "gravity": string
  "terrain": string
  "surface_water": string
  "population": string
  "residents": Array<string>
  "films": Array<string>
  "created": string
  "edited": string
  "url": string
}

/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export async function getPlanetById(id: string): Promise<Planet> {
  const result = await fetch(`https://swapi.dev/api/planets/${id}/`)
  const json = (await result.json()) as Planet
  return json
}

type Author = {
  first: string
  last: string
}

type Todo = {
  id: number
  name: string
  content: string
  author: Author
}

/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export async function getTodoById(id: string): Promise<Todo> {
  const result = await fetch(`http://host.docker.internal:5001/todos/${id}`)
  const json = (await result.json()) as Todo
  return json
}
