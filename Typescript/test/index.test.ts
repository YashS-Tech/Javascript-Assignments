import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import { describe, it,beforeEach, afterEach } from 'mocha';
import {app } from 'C:/Github/Javascript-Assignments/Typescript/index';
import { User} from 'C:/Github/Javascript-Assignments/Typescript/model';
import request from 'supertest'; 
chai.use(chaiHttp);
const expect = chai.expect;


  describe('User API Email Validation', () => {
    let userCreateStub: sinon.SinonStub;
  
    beforeEach(() => {
      userCreateStub = sinon.stub(User, 'create');
    });
  
    afterEach(() => {
      userCreateStub.restore();
    });
  
    before(async () => {
      await User.sync({ force: true }); // sync models with database
    });
  });

  it('should create a new user with valid email', async () => {
    const res = await chai
      .request(app)
      .post('/users')
      .send({
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com',
        addressStreet: '123 Main St',
        addressSuite: 'Apt 1',
        addressCity: 'New York',
        addressZipcode: '10001',
        phone: '555-555-1212',
      });
    expect(res.status).to.equal(201);
    expect(res.body.email).to.equal('johndoe@example.com');
  });

  it('should not create a new user with invalid email format', async () => {
    const res = await chai
      .request(app)
      .post('/users')
      .send({
        name: 'Jane Doe',
        username: 'janedoe',
        email: 'invalid_email',
        addressStreet: '456 Main St',
        addressSuite: '',
        addressCity: 'Los Angeles',
        addressZipcode: '90001',
        phone: '555-555-1212',
      });
    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('Invalid email format');
  });

  it('should update an existing user without changing email', async () => {
    const user = await User.create({
      name: 'John Smith',
      username: 'johnsmith',
      email: 'johnsmith@example.com',
      addressStreet: '789 Main St',
      addressSuite: '',
      addressCity: 'San Francisco',
      addressZipcode: '94101',
      phone: '555-555-1212',
    });
    const res = await chai
      .request(app)
      .put(`/users/${user.id}`)
      .send({
        name: 'John Smith',
        username: 'johnsmith',
        email: 'new_email@example.com', // try to update email
        addressStreet: '789 Main St',
        addressSuite: '',
        addressCity: 'San Francisco',
        addressZipcode: '94101',
        phone: '555-555-1212',
      });
    expect(res.status).to.equal(400);
    expect(res.body.message).to.equal('Cannot update email');
  });
