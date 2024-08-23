const pushedSuzuki = document.getElementById("suzuki")
const pushedYamaguchi = document.getElementById("yamaguchi")
const allImg = document.getElementById("images")
const displayMSG =document.getElementById("displayMSG")
const count = document.getElementById("count")
const success = document.getElementById("success")
const miss = document.getElementById("miss")
const kentei = document.getElementById("kentei")
const startGame = document.getElementById("start")
const reload = document.getElementById("reload")

var time = 0
var missCount = 0
var successCount = 0
var gameCount = 1 //回数カウントのために0ではなく1を代入
startGame.disabled = false
reload.style.display ='none'

//ゲーム開始
function gameStart(){
    pushedSuzuki.style.display ='block'
    pushedYamaguchi.style.display = 'block'
    count.textContent =("現在："+gameCount+"/10問目")
    displayMSG.style.display = 'none'
    startGame.disabled = true
    startGame.style.display = 'none'
    

    //乱数生成
    randomNumberOne = Math.floor(Math.random() *3)
    randomNumberTwo = Math.floor(Math.random() *3)
    const viewImg = Math.floor(Math.random() * 2)
    console.log(viewImg)

    //ゲーム終了を判別
    if (gameCount == 11){
        displayMSG.style.display = 'block'
        displayMSG.textContent ="ゲーム終了！！"
        pushedSuzuki.style.display ='none'
        pushedYamaguchi.style.display = 'none'
        success.textContent = ("正解数は"+successCount+"回です")
        miss.textContent = ("不正解数は"+missCount+"回です")
        count.style.display ='none'
        startGame.style.display = 'none'
        reload.style.display ='block'
        reload.textContent ="もう一度プレイするならF5を押そう"
            //スコアに応じて表示内容を変更
            if(successCount >= 9){
                kentei.textContent ="鈴木検定1級です！！！すごい！！！！！"
            }
            else if(successCount >= 7){
                kentei.textContent ="鈴木検定2級です！！！もう少し！！"
            }
            else if(successCount >= 5){
                kentei.textContent ="鈴木検定3級です！！！頑張れ！！！"
            }else{
                kentei.textContent ="不合格だよバカが帰れ"
            }
            return
    }

    //生成された乱数をファイル名に割り当てて表示
        if(viewImg == 0){
            pushedSuzuki.src ="./img/suzuki/suzuki-"+randomNumberOne+".jpg"
            pushedYamaguchi.src="./img/yamaguchi/yamaguchi-"+randomNumberTwo+".jpg"
        }
        else if(viewImg == 1){
            pushedYamaguchi.src="./img/suzuki/suzuki-"+randomNumberTwo+".jpg"
            pushedSuzuki.src="./img/yamaguchi/yamaguchi-"+randomNumberOne+".jpg"
        }
        else {
            console.log("謎エラー")
        } 


    
}
//正誤判定
function pushImgs(event){ 
    const  clickedImg = (event.target.src)
    const isClickedSucuki = clickedImg.includes("suzuki")
    const isClickedYamaguchi = clickedImg.includes("yamaguchi")
    

    if(isClickedSucuki){
        console.log("success")
        displayMSG.textContent = "正解"
        displayMSG.style.display = 'block'
        successCount++
        gameCount++
    }
    else if(isClickedYamaguchi){
        console.log("miss")
        displayMSG.textContent = "不正解"
        displayMSG.style.display = 'block'
        missCount++
        gameCount++
    }
    else{
        console.log("謎")
    }

    const timeout = setTimeout(gameStart,2000)

}