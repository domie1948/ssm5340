
var projectName = '学生考勤管理';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

]


var indexNav = [

{
	name: '学校公告',
	url: './pages/xuexiaogonggao/list.html'
}, 
{
	name: '考勤打卡',
	url: './pages/kaoqindaka/list.html'
}, 
{
	name: '请假',
	url: './pages/qingjia/list.html'
}, 
{
	name: '课表信息',
	url: './pages/kebiaoxinxi/list.html'
}, 

{
	name: '学校论坛',
	url: './pages/forum/list.html'
}, 
]

var adminurl =  "http://localhost:8080/ssm4lg2u/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学校公告","menuJump":"列表","tableName":"xuexiaogonggao"}],"menu":"学校公告管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"班级","menuJump":"列表","tableName":"banji"}],"menu":"班级管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"考勤打卡","menuJump":"列表","tableName":"kaoqindaka"}],"menu":"考勤打卡管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"请假","menuJump":"列表","tableName":"qingjia"}],"menu":"请假管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程名称","menuJump":"列表","tableName":"kechengmingcheng"}],"menu":"课程名称管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"课表信息","menuJump":"列表","tableName":"kebiaoxinxi"}],"menu":"课表信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学校论坛","tableName":"forum"}],"menu":"学校论坛"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"学校公告列表","menuJump":"列表","tableName":"xuexiaogonggao"}],"menu":"学校公告模块"},{"child":[{"buttons":["新增","查看"],"menu":"考勤打卡列表","menuJump":"列表","tableName":"kaoqindaka"}],"menu":"考勤打卡模块"},{"child":[{"buttons":["新增","查看"],"menu":"请假列表","menuJump":"列表","tableName":"qingjia"}],"menu":"请假模块"},{"child":[{"buttons":["新增","查看"],"menu":"课表信息列表","menuJump":"列表","tableName":"kebiaoxinxi"}],"menu":"课表信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","修改","删除"],"menu":"考勤打卡","menuJump":"列表","tableName":"kaoqindaka"}],"menu":"考勤打卡管理"},{"child":[{"buttons":["删除","查看"],"menu":"请假","menuJump":"列表","tableName":"qingjia"}],"menu":"请假管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"学校论坛","tableName":"forum"}],"menu":"学校论坛"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"学校公告列表","menuJump":"列表","tableName":"xuexiaogonggao"}],"menu":"学校公告模块"},{"child":[{"buttons":["新增","查看"],"menu":"考勤打卡列表","menuJump":"列表","tableName":"kaoqindaka"}],"menu":"考勤打卡模块"},{"child":[{"buttons":["新增","查看"],"menu":"请假列表","menuJump":"列表","tableName":"qingjia"}],"menu":"请假模块"},{"child":[{"buttons":["新增","查看"],"menu":"课表信息列表","menuJump":"列表","tableName":"kebiaoxinxi"}],"menu":"课表信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"buttons":["查看","审核"],"menu":"请假","menuJump":"列表","tableName":"qingjia"}],"menu":"请假管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课程名称","menuJump":"列表","tableName":"kechengmingcheng"}],"menu":"课程名称管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"课表信息","menuJump":"列表","tableName":"kebiaoxinxi"}],"menu":"课表信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"学校论坛","tableName":"forum"}],"menu":"学校论坛"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"师生交流","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"学校公告列表","menuJump":"列表","tableName":"xuexiaogonggao"}],"menu":"学校公告模块"},{"child":[{"buttons":["新增","查看"],"menu":"考勤打卡列表","menuJump":"列表","tableName":"kaoqindaka"}],"menu":"考勤打卡模块"},{"child":[{"buttons":["新增","查看"],"menu":"请假列表","menuJump":"列表","tableName":"qingjia"}],"menu":"请假模块"},{"child":[{"buttons":["新增","查看"],"menu":"课表信息列表","menuJump":"列表","tableName":"kebiaoxinxi"}],"menu":"课表信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
