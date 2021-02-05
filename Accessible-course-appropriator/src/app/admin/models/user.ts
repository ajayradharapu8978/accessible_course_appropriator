export class User {
    // tslint:disable-next-line: variable-name
    _id = String;
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
