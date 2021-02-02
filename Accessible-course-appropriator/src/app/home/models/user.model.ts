export class User{
    email = String;
    password = String;
}

// tslint:disable-next-line: class-name
export interface UserloginResp{
    success: boolean;
    token: string;
    id: string;
}
