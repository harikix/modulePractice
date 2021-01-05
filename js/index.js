// CORSエラーが発生したため試せてはいない...

import { name } from "./user.js";

document.body.textContent = name;


// 複数まとめてimportすることも可能
import { name, name2 } from "./user.js";

document.body.textContent = name + name2;

// 関数をimportする方法、またここでは関数も変数と同時にimportしている。
import { name, name2, log } from "./user.js";
log("foo");

document.body.textContent = name + name2;

// named importのエイリアスの練習
import { pika } from  "./user.js";

document.body.textContent = pika;

// named import/exportのエイリアスの練習
import { rai as raishu } from "./user.js";

document.body.textContent = raishu;

// default exportの練習（定数）
import name from  "./user.js";

document.body.textContent = name;

// default exportの練習（関数）
import logger from "./user.js";

logger(name);