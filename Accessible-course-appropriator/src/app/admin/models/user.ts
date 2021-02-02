export class User {
    userName = String;
    email = String;
    password = String;
}

// tslint:disable-next-line: class-name
export class paginationResp {
    docs = User;
    total = Number;
    pages = Number;
    page = Number;
    limit = Number;
}
