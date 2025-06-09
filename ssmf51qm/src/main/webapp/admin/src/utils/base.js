const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmf51qm/",
            name: "ssmf51qm",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmf51qm/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "驾校预约管理系统"
        } 
    }
}
export default base
