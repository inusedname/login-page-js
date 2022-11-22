const users = [
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

export const authenticateUser = details => {
    let user = null;
    users.forEach((account) => {
        if (details.email == account.email && details.password == account.password)
            user = { name: account.name, email: account.email };
    });
    return user;
}