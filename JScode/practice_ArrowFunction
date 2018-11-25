/**
 * アロー関数について
 */

 /*** １、コンストラクタにならない ***/
 let Arrow = (arg) => {
  this.name = arg;
  this.getName = function() {
    console.log(this.name);
  }
 };

let inst = new Arrow("hoge");
inst.getName();
console.log(typeof inst);

// Arrow is not a constructor

/*** ２、thisの参照先について ***/

let Clas = function() {
  this.a = 1;
};
let ins = new Clas();

// functionでメソッドを追加
ins.normal = function() {
  console.log(this.a);
}
// アロー関数でメソッドを追加
ins.arrow = () => {
  console.log(this.a);
}

ins.normal(); // 1
ins.arrow(); // undefined

/* 【結論】
   アロー関数中のthisは自身が宣言される場所での呼び出し元を保持する。
   function()のthisは呼び出し元を参照しに行く。*/
