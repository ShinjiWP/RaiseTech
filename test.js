//アコーディオンをクリックした時の動作
$(".title").on("mouseenter", function () {
  //タイトル要素をクリックしたら
  $(".list-box").slideUp(500); //クラス名.boxがついたすべてのアコーディオンを閉じる

  var findElm = $(this).next(".list-box"); //タイトル直後のアコーディオンを行うエリアを取得

  if ($(this).hasClass("close")) {
    //タイトル要素にクラス名closeがあれば
    $(this).removeClass("close"); //クラス名を除去
  } else {
    //それ以外は
    $(".close").removeClass("close"); //クラス名closeを全て除去した後
    $(this).addClass("close"); //クリックしたタイトルにクラス名closeを付与し
    $(findElm).slideDown(200); //アコーディオンを開く
  }
});
