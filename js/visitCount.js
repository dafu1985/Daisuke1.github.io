<!-- 訪問者カウント用のスクリプト -->
<script>

    //カウントをローカルストレージから取得
    let visitCount = localStorage.getItem('visitCount');
    
  

    //カウントが存在しない場合は初期化
    if(visitCount === null) {
       visitCount = 0 ;
    } else {
    //文字列から数値に変換
       visitCount = parseInt(visitCount);
    }



// カウントを増やす
visitCount++;



// カウントをローカルストレージに保存
localStorage.setItem('visitCount', visitCount);



// カウントをHTMLに表示
document.getElementById('visitCount').textContent = visitCount;



</script>
