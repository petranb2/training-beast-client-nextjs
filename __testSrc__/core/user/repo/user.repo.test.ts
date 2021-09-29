import { userRepo, mockedAxios } from "./index"


describe('test the signIn function', () => {
    beforeEach(() => {
        mockedAxios.post.mockReset();
    })
    test('success_sign-in_user', async () => {
        let userProfileMock = { email: 'petranb2@gmail.com', username: 'petran' };
        mockedAxios.post.mockResolvedValue({ response: { status: 200 }, data: userProfileMock });
        let profile = await userRepo.signIn({ email: 'petranb2@gmail.com', password: 'olumpos2918' });
        expect(profile).toBe(userProfileMock);
    });

    test('wrong_credentials_sign-in_user', async () => {
        mockedAxios.post.mockRejectedValue({ response: { status: 401 } });
        try {
            await userRepo.signIn({ email: 'petranb2@gmail.com', password: '122456789' });
        } catch (error: any) {
            expect(error.response.status).toBe(401);
        }
    });

    test('bad_request_sign-in_user', async () => {
        mockedAxios.post.mockRejectedValue({ response: { status: 400 } });
        try {
            await userRepo.signIn({ email: '', password: '' });
        } catch (error: any) {
            expect(error.response.status).toBe(400);
        }
    });

    test('internal-server-error_sign-in_user', async () => {
        mockedAxios.post.mockRejectedValue({ response: { status: 500 } });
        try {
            await userRepo.signIn({ email: '', password: '' });
        } catch (error: any) {
            expect(error.response.status).toBe(500);
        }
    });
})

describe('test the signUp function', () => {

    test('success_sign-up_user', async () => {
        let userCredentials = { email: 'petranb2@gmail.com', password: '123456789' };
        mockedAxios.post.mockResolvedValue({ response: { status: 200 } });
        await userRepo.signUp(userCredentials);
    });

    test('bad-request_sign-up_user', async () => {
        let userCredentials = { email: 'petranb2@gmail.com', password: '123456789' };
        mockedAxios.post.mockRejectedValue({ response: { status: 400 } });
        try {
            await userRepo.signUp(userCredentials);
        } catch (error: any) {
            expect(error.response.status).toBe(400);

        }
    });

    test('internal-server-error_sign-up_user', async () => {
        let userCredentials = { email: 'petranb2@gmail.com', password: '123456789' };
        mockedAxios.post.mockRejectedValue({ response: { status: 500 } });
        try {
            await userRepo.signUp(userCredentials);
        } catch (error: any) {
            expect(error.response.status).toBe(500);

        }
    });
})