import Database from '@/sql/interactors/categories'
export default class Controller {
  // Fetch article
  static async read (request, reply) {
    try {
      let category = await Database.read(request.params.id, request.params.relations)
      reply.code(200).send(category)
    } catch (e) {
      console.log(e)
      reply.code(404).send()
    }
  }
}