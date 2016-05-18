
    var oneEle = document.createElement('p');
    oneEle.id = 'load-one';
    document.querySelector('.wrapper').insertBefore(oneEle,document.querySelector('.wrapper').firstChild);
    for (var i = 100000; i > 0 ; i--) {
        var str = "第一部分倒计时" + i;
        oneEle.innerText = str;
    }

