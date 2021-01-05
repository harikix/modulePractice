// CORSエラーが発生したため試せてはいない...

const name = "ピカチュウ";
export { name };


// 複数まとめてexportすることも可能
const name = "ピカチュウ";
const name2 = "ライチュウ";

export { name, name2 };

// 宣言した瞬間にexportする方法（定数）
export const name = "ピカチュウ";
export const name2 = "ライチュウ";

// 関数も同様に可能
function log(value) {
    console.log(value);
}

export { log };

// 宣言した瞬間にexportする方法（関数）
export function log(value) {
    console.log(value);
}

// エイリアスとは……
//     別名の意。
//     name、name2、logは識別詞と言われるがこの識別詞とは別に新たに名前をつけることができる。

// named importのエイリアスの練習
const name = "ピカチュウ";

export { name as pika };

// named import/exportのエイリアスの練習
const name2 = "ライチュウ";

export { name2 as rai };

// default exportの練習（定数）
const name = "ピカチュウ";

export default name;

// default exportの練習（関数）
function log(value) {
    console.log(value);
}

export default log;