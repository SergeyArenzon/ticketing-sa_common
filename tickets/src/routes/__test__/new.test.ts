import request from 'supertest';
import {app} from '../../app';

it('has a route handler listening to api/tickets for posst rquests', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .send({})
    expect(response.status).not.toEqual(404);
})
it('can only be accessed if the user is signed in', async () => {
    await request(app)
        .post('/api/tickets')
        .send({})
        .expect(401)
})
it('returnsa status other than 401 if the user is signed in', async () => {
    const response = await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({})
    expect(response.status).not.toEqual(401);
})
it('returns an error if an invalid titlee is provided', async () => {
    await request(app)
        .post('/api/tickets')
        .set('Cookie', global.signin())
        .send({
            price: 10
        })
        .expect(400)
    })
it('returns an error if an invalid price is provided', async () => {
        await request(app)
            .post('/api/tickets')
            .set('Cookie', global.signin())
            .send({
                title: "asdsf",
                price: -10
            })
            .expect(400)

        await request(app)
            .post('/api/tickets')
            .set('Cookie', global.signin())
            .send({
                title: "asdsf"
            })
            .expect(400)

})
it('creates ticket with valid inputs', async () => {
    await request(app)
        .post('/api/tickets')
        .send({
            title: 'sfdsfsf',
            price: 20
        })
        .expect(201)
})