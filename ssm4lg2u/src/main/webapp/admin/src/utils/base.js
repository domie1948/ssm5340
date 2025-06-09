const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm4lg2u/",
            name: "ssm4lg2u",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm4lg2u/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "学生考勤管理"
        } 
    }
}
export default base
