# portfolio

## 使用技術一覧
<p>
    <!-- フロントエンド -->
    <img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic">
    <img src="https://img.shields.io/badge/-Jquery-0769AD.svg?logo=jquery&style=plastic">
    <!-- バックエンド -->
    <img src="https://img.shields.io/badge/-Python-FFFF00.svg?logo=python&style=plastic">
    <img src="https://img.shields.io/badge/-Flask-000000.svg?logo=flask&style=plastic">
    <!-- サーバ -->
    <img src="https://img.shields.io/badge/-Render-2C2255.svg?logo=Render&style=plastic">
</p>

## 目次
1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [環境変数](#環境変数)

## プロジェクトについて
プロジェクト名: portfolio  
概要:
　ポートフォリオ用のウェブサイト。私のプロフィールや成果物、メールフォームなどを掲載しています。

# 環境
|言語・フレームワーク|バージョン|
|------------------|---------|
|jQuery            |3.7.1    |
|Python            |3.12.3   |
|Flask             |3.1.0    |
|Werkzeug          |3.1.3    |

## ディレクトリ構成
```
.
├── Dockerfile
├── README.md
├── app.py
├── requirements.txt
├── static
│   ├── css
│   │   └── style.css
│   ├── img
│   │   ├── close.svg
│   │   ├── github-mark.svg
│   │   ├── myPortfolio
│   │   │   ├── about.jpg
│   │   │   ├── contact.jpg
│   │   │   ├── hero.jpg
│   │   │   └── myPortfolio.jpg
│   │   └── shopping
│   │       ├── cart_example.jpg
│   │       ├── icon.png
│   │       ├── itemlist_example.jpg
│   │       ├── mypage_example.jpg
│   │       └── notification_example.jpg
│   └── js
│       └── script.js
└── templates
    └── index.html
```

# 環境変数
- MAIL_USERNAME: メールを受け取り手のメールアドレス
- MAIL_PASSWORD: 受け取り手のメールのアプリパスワード。各メールアプリのセキュリティ設定等で発行してください。
- MAIL_DEFAULT_SENDER: メールの送り手のメールアドレス.私は受け取り手と同じものにしています。
