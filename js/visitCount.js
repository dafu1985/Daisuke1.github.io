<!-- 訪問者カウント用のスクリプト -->
<script>

    //カウントをローカルストレージから取得
    let visitCount = localStorage.getItem('visitCount');
    
    console.log('Visit count from local storage:', visitCount);

    //カウントが存在しない場合は初期化
    if(visitCount === null) {
       visitCount = 0 ;
    } else {
    //文字列から数値に変換
       visitCount = parseInt(visitCount);
    }

console.log('Visit count before:', visitCount);

// カウントを増やす
visitCount++;

console.log('Visit count after increment:', visitCount);

// カウントをローカルストレージに保存
localStorage.setItem('visitCount', visitCount);

console.log('Visit count after saving to localStorage:', visitCount);

// カウントをHTMLに表示
document.getElementById('visitCount').textContent = visitCount;

console.log('Visit count after updating HTML:', visitCount);

</script>
