use("admin");

user = fs.readFileSync(process.env.MONGO_INITDB_ROOT_USERNAME_FILE, "utf8");
pwd = fs.readFileSync(process.env.MONGO_INITDB_ROOT_PASSWORD_FILE, "utf8");

result = db.createUser({
    user,
    pwd,
    roles: [ 
        { role: "userAdminAnyDatabase", db: "admin" },
        { role: "readWriteAnyDatabase", db: "admin" } 
    ]
});