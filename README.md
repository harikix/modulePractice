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

named import/exportとdefault import/exportの違い
・