export type RegisterUser = RegisterUserData[];

export interface RegisterUserData {
    name: string;
    email: string;
    password: string;
    mobileNumber: string;
}

export type LoginUser = LoginUserData[];

export interface LoginUserData {
    email: string;
    password: string;
}