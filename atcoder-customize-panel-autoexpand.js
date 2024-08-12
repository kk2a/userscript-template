// ==UserScript==
// @name         AtCoder Customize Panel Auto-Expand
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Always expand the "Customize" panel on AtCoder standings page at initial load
// @author       kk2a
// @match        https://atcoder.jp/contests/*/standings*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ページが完全にロードされた際に実行
    window.addEventListener('load', () => {
        // 遅延を設定して確実にDOMがロードされるのを待つ
        setTimeout(() => {
            // 順位表カスタマイズパネルの親要素を取得
            const panelHeading = document.getElementById('standings-panel-heading');

            // カスタマイズパネルは存在するか？
            if (panelHeading) {
                // トリガーボタン（見出し部分）を取得
                const toggleButton = panelHeading.querySelector('#standings-heading-div');

                // トリガーボタンは存在するか？
                if (toggleButton) {
                    // クリックイベントをシミュレートしてパネルを展開
                    toggleButton.click();
                }
            }
        }, 1000); // 1秒待ってから実行
    });
})();
