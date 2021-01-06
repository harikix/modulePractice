これはmoduleを練習するためのフォルダです。

named import/export、default import/exportについて解説

tips
・htmlファイルのscriptタグのtypeはmoduleに指定
・また、srcでファイルを読み込む。ファイルは複数読み込んでもいいが、１ファイル１モジュールの原則
・識別子をそのままimport/exportできる。

named import/export
・{}(波括弧)でくくる必要がある。
・エイリアスとは
    →別名の事。変数や定数、関数で値を定義した際につけた名前（識別子）を変えることができる。
・エイリアスをつかうタイミング
    →複数のファイルからimportする際、それぞれのファイルから同じ識別子がexportされていることがある。
    このときにエラーを出さないためにimport側でエイリアスを行う必要がある。
    export側でエイリアスをすることはあまりない。

default import/export
・括弧でくくる必要がない。
・exportのあとにdefaultをつける必要がある。importの時はdefaultはなくていい。
・export defaultは１モジュールにつき１回しか使用できない。
・named exportしているものをexport defaultすることも可能。（あまり使うことはない？）
・import側で名前を変えることができる。
    →これができるのはexportした名前ではなく値で判断しているから。
    ＊しかし、タイポの可能性があるため非推奨の人もいる。
・宣言と同時にexport defaultできるのは関数だけで変数は宣言と同時にexport defaultできない。
・宣言した関数の識別子は省略可能。（宣言と同時にexport defaultするときにのみ？）

特殊なimport/export
・All import
　→１つのモジュールから複数のnamed exportしたものを一挙にまとめてimportすることができる。
    *で全てを選択して、その中から必要なものだけ取り出すやり方。
    メリット
    ・importの記述が楽になる。変数が増えれば増えるほどimportの行が長くなるから。また、変数だけでなく、関数やクラスも同様にall import可能。

・Re-export
　→ディレクトリの中の全ファイルを参照するのではなく、特定のファイルのみを参照するだけでいいようにその特定のファイルに全てexportしてそこから必要なもののみを再度exportするとき等に役立つ。
　①　namedを全てRe-export
    →別のディレクトリ（pokemon）にある１jsファイル（pokemon.js）から同じディレクトリ内の別のjsファイル（index.js）に全てexport
    →全てexportしたjsファイルから第一階層のjsファイルにexportできる。*パスを間違えないように！
    export * from "ファイル名";
　②　namedを全てRe-export + エイリアス　
    →export * as 変更したい名前 from "ファイル名";
　③　namedを選んでRe-export
    →export { ** } from "ファイル名";
　④　namedを選んでRe-export + エイリアス
    →export { ** as 変更したい名前 } from "ファイル名";
    複数それぞれエイリアスすることも、複数の内一つだけエイリアスすることも可能。
　⑤　defaultをdefaultのままRe-export
    →export { default } from "ファイル名";
    ・default exportはnamed exportでas defaultしたものと同じ。
　⑥　defaultをnamedにしてRe-export
    →export default pika; →　export { default as pika } from "ファイル名";
　⑦　namedをdefaultにしてRe-export
    →export { pika } → export { pika as default } from "ファイル名";

・side-effect import
　→変数や関数をimportすることなくモジュールをimportして終わり。モジュールはモジュール同士でやりとりするものだから。
　・ユースケース
    →ログを送る。ブラウザのwindowオブジェクトに対して操作を行う。snsでタイムラインを表示させたいとき。など