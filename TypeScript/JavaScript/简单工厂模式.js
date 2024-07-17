const huangxi = {
    name: 'huangxi',
    age: 18,
    sex: '男'
}

function AddUser(name, age, sex, work) {
    this.name = name
    this.age = age
    this.sex = sex
    this.work = work
}

const huangxi2 = new AddUser('huangxi2', 18, '男', '没有工作')
// 这就是工厂模式,传入不变的参数,只关心传入对应的数据,获得相应的对象
// 使用工厂函数,来调构造函数,不直接new 沟通函数.

const Factory = (name, age, sex) => {
    let work = ''
    switch (age) {
        case 18:
            work = '工作至少一年'
            break
        case 19:
            work = '工作至少两年'
            break
        case 20:
            work = '工作至少20年'
            break
        case 22:
            work = '工作至少22年'
            break
        case 25:
            work = '工作至少25年'
            break
    }
    return new AddUser(name, age, sex, work)
}

console.log(huangxi, huangxi2, Factory('huangxi3', 22, '男'), Factory('huangxi4', 25, '女'))