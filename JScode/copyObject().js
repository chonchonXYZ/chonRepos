/**
 * 配列、連想配列の完全なコピーを生成する。（参照渡しではない）
 * 値が参照型の場合でも再帰的に呼び出すのでネストが続く限りコピーを続ける。
 * @param {Array||Object} target コピー元オブジェクト
 * @return {Array||Object} 新たに生成されたオブジェクト
 */
function copyObject(target) {
  try {
    // ループ用
    function roop(target, i, obj) {
      if (target[i] === null) {
        obj[i] = null;
      } else if (typeof(target[i]) === "function") {
        obj[i] = target[i];
      } else if (target[i] instanceof Array) {
        obj[i] = copyAry(target[i]);
      } else if (typeof(target[i]) === "object") {
        obj[i] = copyObj(target[i]);
      } else {
        obj[i] = target[i];
      }
      return obj;
    }

    // オブジェクトリテラル用
    function copyObj(target) {
      var obj = {};
      for each (var i in Object.keys(target)) {
        roop(target, i, obj);
      }
      return obj;
    }

    // 配列リテラル用
    function copyAry(target) {
      var obj = [];
      for (var i = 0; i < target.length; i++) {
        roop(target, i, obj);
      }
      return obj;
    }

    // 引数の型を判別して実行
    if (target instanceof Array) {
      return copyAry(target);
    } else if (target !== null && typeof(target) !== "function" && typeof(target) === "object") {
      return copyObj(target);
    } else {
      throw new Error("引数が連想配列、配列ではありません。");
    }
  } cath(e) {
    throw e;
  }
}
