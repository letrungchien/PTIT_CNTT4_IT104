class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id,
            this.userName = userName,
            this.password = password,
            this.isLogin = isLogin,
            this.role = role;
    }
    getPassword() {
        return this.password;
    }
    login() {
        console.log(" dang nhap thanh cong");
    }
    logout() {
        if (this.isLogin === true) {
            this.isLogin = false;
            console.log("Dang xuat thanh cong");
        }
    }
}
class UserAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role),
            this.status = status;
    }
    login() {
        if (this.status === "active") {
            console.log("dang nhap thanh cong");
            this.isLogin = true;
            return;
        }
        console.log("tai khoan bi khoa");
    }
}
let userAcc1 = new UserAcc(1, "chien", "123456", false, "sinh vien", "active");
let userAcc2 = new UserAcc(2, "loc", "12345", false, "sinh vien", "banned");
userAcc1.login();
userAcc1.logout();
userAcc2.login();
