const accounts = [
    {
        name: "Quang",
        email: "admin@vstd.com",
        password: "1234",
    },
    {
        name: "JavaScript",
        email: "account1@vstd.vn",
        password: "123",
    }
];

export const Authenticate = details => {
    let user = null;
    accounts.forEach((account) => {
        if (details.email == account.email && details.password == account.password)
            user = { name: account.name, email: account.email };
    });
    return user;
}