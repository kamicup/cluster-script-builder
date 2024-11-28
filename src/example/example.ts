/// <reference path="../_cluster_types/index.d.ts" />

$.onStart(() => {
    $.log("初期化します")
})

$.onInteract(player => {
    $.log("インタラクトしたプレイヤー：" + player.userDisplayName)
})
