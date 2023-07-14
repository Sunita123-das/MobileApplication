class LoginScreen{
get userName(){
    return new UiSelector().text("Username").className("android.widget.EditText")
}

get passWord(){
    return new UiSelector().text("Password").className("android.widget.EditText")
}


}
module.exports=new LoginScreen();