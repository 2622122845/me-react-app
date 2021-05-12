    let lrc = "00:00.00]体面 (Live) - 于文文 (Kelly)[00:08.01]词：唐恬[00:16.03]曲：于文文[00:24.05]别堆砌怀念让剧情 变得狗血[00:35.36]深爱了多年又何必 毁了经典[00:44.13]都已成年不拖不欠[00:49.77]浪费时间是我情愿[00:55.33]像谢幕的演员 眼看着灯光熄灭[01:06.77]来不及 再轰轰烈烈[01:12.24]就保留 告别的尊严[01:17.96]我爱你不后悔 也尊重故事结尾[01:29.32]分手应该体面 谁都不用说抱歉[01:36.23]何来亏欠 我敢给就敢心碎[01:41.97]镜头前面是从前的我们[01:46.51]在喝彩 流着泪声嘶力竭[01:51.90]离开也很体面 才没辜负这些年[01:58.79]爱得热烈 认真付出的画面[02:04.54]别让执念 毁掉了昨天[02:09.12]我爱过你 利落干脆[02:36.66]最熟悉的街主角却 换了人演[02:48.06]我哭到哽咽心再痛 就当破茧[02:56.76]来不及 再轰轰烈烈[03:02.36]就保留 告别的尊严[03:08.16]我爱你不后悔 也尊重故事结尾[03:19.40]分手应该体面 谁都不用说抱歉[03:26.36]何来亏欠 我敢给就敢心碎[03:32.03]镜头前面是从前的我们[03:36.61]在喝彩 流着泪声嘶力竭[03:42.02]离开也很体面 才没辜负这些年[03:48.93]爱得热烈 认真付出的画面[03:54.57]别让执念 毁掉了昨天[03:59.20]我爱过你 利落干脆[04:05.29]再见 不负遇见";
    //console.log(lrc);
    let arr1 = lrc.split('[');//分割为数组
    let string = [];//获取歌词
    let time = [];//获取时间
    let ele = document.querySelector('.lyric');
    let fragment = document.createDocumentFragment();

    arr1.forEach(function (str, index) {
        string[index] = arr1[index].slice(9);
        time[index] = Number(arr1[index].slice(0, 2)) * 60 + Number(arr1[index].slice(3, 5));
        let p = document.createElement('p');
        p.innerText = string[index];
        fragment.appendChild(p);
    });
    ele.appendChild(fragment);
    let p = document.querySelectorAll('.lyric p');
    let off = true;
    let cover = document.querySelector('.cover');
    let audio = document.querySelector('audio');
    let pList = document.querySelectorAll('.lyric p');
    cover.onclick = function () {
        if (off) {
            cover.style.animation = 'rotate 10s linear infinite normal';
            let num = 1;
            let index = 0;
            let length = time.length;
            audio.play();
            let counter = setInterval(function () {
                if (time[index] <= num) {
                    if (p[index + 1]) {
                        p[index + 1].style.color = '#000';
                    }
                    p[index].style.display = 'none';
                    index++;
                }
                if (index >= length) {
                    clearInterval(counter);
                    off = !off;
                }
                console.log(num++);
            }, 990);
            off = !off;
        } else {
            alert('刷新页面才能停止播放');
        }
    }







