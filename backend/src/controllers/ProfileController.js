module.exports = {
    async index(request, response) {
        const ong_id = request.headers.Authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
}