let num = 0
const startingTexts = [
    "<span id=\"name\">K-Currencies</span>.",
    "ㅅ <span id=\"name\">K-Currencies</span>.",
    "서 <span id=\"name\">K-Currencies</span>.",
    "서ㅂ <span id=\"name\">K-Currencies</span>.",
    "서버 <span id=\"name\">K-Currencies</span>.",
    "서버  <span id=\"name\">K-Currencies</span>.",
    "서버 ㄱ <span id=\"name\">K-Currencies</span>.",
    "서버 겨 <span id=\"name\">K-Currencies</span>.",
    "서버 경 <span id=\"name\">K-Currencies</span>.",
    "서버 경ㅈ <span id=\"name\">K-Currencies</span>.",
    "서버 경제 <span id=\"name\">K-Currencies</span>.",
    "서버 경제  <span id=\"name\">K-Currencies</span>.",
    "서버 경제 ㅅ <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시 <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시ㅅ <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스 <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스ㅌ <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스테 <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템 <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템  <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템 ㄱ <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템 구 <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템 구ㅊ <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템 구추 <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템 구축 <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템 구축, <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템 구축, <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템 구축, <span id=\"name\">K-Currencies</span>.",
    "서버 경제 시스템 구축, <span id=\"name\">K-Currencies</span>ㄹ.",
    "서버 경제 시스템 구축, <span id=\"name\">K-Currencies</span>로.",
]
const repeatedTexts = ["서버 경제 시스템 구축", "역할 지급 시스템 구축", "채팅 보상 시스템 구축", "출석 보상 시스템 구축"]

document.addEventListener(
    "DOMContentLoaded",
    function () {
        let b = setTimeout(
            function () {
                let a = setInterval(
                    function () {
                        if (num < startingTexts.length) {
                            document.getElementById('catchphrase').innerHTML = startingTexts[num]
                        }
                        else {
                            clearInterval(a)
                            num = 0
                            setInterval(
                                function () {
                                    document.getElementById('catchphrase').innerHTML = repeatedTexts[num % repeatedTexts.length] + ", <span id=\"name\">K-Currencies</span>로."
                                    num++
                                },
                                2500
                            )
                        }
                        num++
                    },
                    200
                )
            },
            2000
        )
    }
)