// 封装函数
function getJsonObj(url,callback) {
    let xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('get', url);
    xmlHttpRequest.addEventListener('load', function (e) {
      let responseText = this.responseText;
      callback(JSON.parse(responseText));
    })
    xmlHttpRequest.send(null);
  }
  // 调用
  let queArr = []
  getJsonObj('./user.json',(data) => {
    // 一个对象
    queArr = data;
    put();
  });
  
    // 选项
    const chosArr = document.querySelectorAll('.chos');
    // 下一题
    const next = document.getElementById('next');
    // 上一题
    const pre = document.getElementById('pre');
    // 提交
    const submit = document.getElementById('submit')
    // 问题
    const question = document.getElementById('question');
    // 结算页面
    const last = document.getElementById('last');
    // 分数
    const mark = document.getElementById('p2');
    // 答题情况
    const check = document.getElementById('check');
    // 再次答题
    const again2 = document.getElementById('again2')
    // 选项内容
    const cA = document.getElementById('chooseA');
    const cB = document.getElementById('chooseB');
    const cC = document.getElementById('chooseC');
    const cD = document.getElementById('chooseD');
    // 用户选择的答案
    let ansArr = new Array(5);
    // 正确答案
    let tansArr = new Array(5);
    // 用户选择的选项
    let num = new Array(5);
    // 选项id，存入ansArr中
    let id = 0;
    // 题目序号
    let index = 0;
    // 分数
    let count = 0;

    let flag = 0;
    // 存题目
    function put(){
        for (let q = 0; q < queArr.length; q++) {
            tansArr[q] = queArr[q].Answer.toString();
        }
    }
    // put();



    // 第一题内容
    change();

    // 用户点击选项
    for (let i = 0; i < chosArr.length; i++) {
        chosArr[i].addEventListener('click', function () {
            //修改选项颜色
            for (let j = 0; j < chosArr.length; j++) {
                NormalColor(chosArr[j])
                num[index] = i;
            }
            BlueColor(this);
            // 记录用户答案
            id = this.getAttribute("id");
            // console.log(id);
            ansArr[index] = id;
            console.log(queArr);
            console.log(queArr[0].Answer);
            console.log(tansArr);
            
        })
        if (flag == 1) {
            if (ansArr[index] == tansArr[index]) {
                GreenColor(chosArr[num[index]]);
            }
        }

    }

    // 下一题
    next.addEventListener('click', function () {
        index++;
        if (index >= 4) {
            // 提交按钮出现
            next.style.display = 'none';
            submit.style.display = 'inline';
            index = 4
            change();
            for (let j = 0; j < chosArr.length; j++) {
                NormalColor(chosArr[j]);
            }
            // 记录用户选项
            if (num[index] == null) {
                num[index] == null;
                if (flag == 1) {
                    for (let j = 0; j < chosArr.length; j++) {
                        RedColor(chosArr[j]);
                    }
                }
            } else {
                test();
            }
        } else {
            for (let j = 0; j < chosArr.length; j++) {
                NormalColor(chosArr[j]);
            }
            // 记录用户选项
            if (num[index] == null) {
                num[index] == null;
                if (flag == 1) {
                    for (let j = 0; j < chosArr.length; j++) {
                        RedColor(chosArr[j]);
                    }
                }
            } else {
                test();
            }
            // 修改选项和题目  
            change();
        }
    })

    pre.addEventListener('click', function () {
        index--;
        if (index < 0) {
            alert('没有上一题了')
            index = 0
        } else {
            for (let j = 0; j < chosArr.length; j++) {
                NormalColor(chosArr[j]);
            }
            if (num[index] == null) {
                num[index] == null;
                if (flag == 1) {
                    for (let j = 0; j < chosArr.length; j++) {
                        RedColor(chosArr[j]);
                    }
                }
            } else {
                BlueColor(chosArr[num[index]]);
                test();
            }
            // 修改选项和题目
            change();
            // 隐藏提交按钮
            submit.style.display = 'none';
            next.style.display = 'inline';
        }
    })



    //提交
    submit.addEventListener('click', function () {
        for (let w = 0; w < ansArr.length; w++) {
            // 计算分数
            if (tansArr[w] == ansArr[w]) {
                count += 20;
            }
            console.log(tansArr[w]);
        }
        last.style.display = 'flex';
        mark.innerHTML = count;
    })

    // 检查题目
    check.addEventListener('click', function () {
        last.style.display = 'none'
        count = 0;
        index = 4;
        // 隐藏提交按钮
        flag = 1;

        if (num[index] == null) {
            num[index] == null;
            if (flag == 1) {
                for (let j = 0; j < chosArr.length; j++) {
                    RedColor(chosArr[j]);
                }
            }
        } else {
            test();
        }
        for (let j = 0; j < chosArr.length; j++) {
            chosArr[j].style.pointerEvents = 'none'
        }
        submit.style.pointerEvents = 'none'
        again2.style.display = 'block'

    })


    // 渲染题目和选项
    function change() {
        chosArr[0].style.transition = "0.5s"; 
        chosArr[1].style.transition = "0.5s"; 
        chosArr[2].style.transition = "0.5s"; 
        chosArr[3].style.transition = "0.5s"; 
        setTimeout(function () {
            chosArr[0].style.opacity = 0; 
            chosArr[1].style.opacity = 0; 
            chosArr[2].style.opacity = 0; 
            chosArr[3].style.opacity = 0; 
            question.style.opacity = 0; 
            setTimeout(function () {
                chosArr[0].style.opacity = 1; 
                chosArr[1].style.opacity = 1; 
                chosArr[2].style.opacity = 1; 
                chosArr[3].style.opacity = 1; 
                question.innerHTML = queArr[index].title;
                question.style.opacity = 1; 
                cA.innerHTML = queArr[index].secA;
                cB.innerHTML = queArr[index].secB;
                cC.innerHTML = queArr[index].secC;
                cD.innerHTML = queArr[index].secD;
            }, 500);    
        })
    }

    //显示题目对错颜色
    function test() {
        if (flag == 1) {
            if (ansArr[index] == tansArr[index]) {
                GreenColor(chosArr[num[index]]);
            } else {
                RedColor(chosArr[num[index]]);
            }
        } else {
            BlueColor(chosArr[num[index]]);
        }
    }

function GreenColor(optionOj) //将选项主题颜色变为绿色
{
    optionOj.style.color = "#1FA308";
    optionOj.style.backgroundColor = "#B7DFBF";
    optionOj.style.borderWidth = "2px";
    optionOj.style.borderStyle = "solid";
    optionOj.style.borderColor = "#1FA308";
}

function RedColor(optionOj) //将选项主题颜色变为红色
{
    optionOj.style.color = "#C82323";
    optionOj.style.backgroundColor = "#E0B7B7";
    optionOj.style.borderWidth = "2px";
    optionOj.style.borderStyle = "solid";
    optionOj.style.borderColor = "#C82323";
}

function BlueColor(optionOj) //将选项主题颜色变为选中颜色
{
    optionOj.style.color = "#0052FC";
    optionOj.style.backgroundColor = "#78B5FC";
    optionOj.style.borderWidth = "2px";
    optionOj.style.borderStyle = "solid";
    optionOj.style.borderColor = "#5FA7FB";
}

function NormalColor(optionOj) //将选项主题颜色变为正常颜色
{
    optionOj.style.color = "#242020";
    optionOj.style.backgroundColor = "#DDDEDE";
    optionOj.style.border = "none";
    optionOj.style.borderBottomStyle = "solid";
    optionOj.style.borderBottomWidth = "3px";
    optionOj.style.borderBottomColor = "#D0D1D1";
    optionOj.style.borderRadius = "8px";
}

