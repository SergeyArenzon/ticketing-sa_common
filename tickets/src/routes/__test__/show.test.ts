import request from "supertest";
import { app } from "../../app";

it('return a 404 when ticket not found', async () => {
    await request(app)
        .get('/api/tickets/asdsdfsf')
        .send()
        .expect(404);
})
it('return the ticket if it found', async () => {
    const title = 'concert';
    const price = 20;

    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie',global.signin())
        .send({
            title,
            price
        })
        .expect(201);

        const ticketResponse = await request(app)
            .get(`/api/tickets/${response.body.id}`)
            .send()
            .expect(200)

        expect(ticketResponse.body.title).toEqual(title);
        expect(ticketResponse.body.price).toEqual(price);
})