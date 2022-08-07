import { faker } from '@faker-js/faker';

type SignUp = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
};

export function createSignupAttributes(attributes: Partial<SignUp>): SignUp {
    return {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(12),
        ...attributes,
    };
}