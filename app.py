import os
from dotenv import load_dotenv
from flask import Flask,  request, render_template
from flask_mail import Mail, Message
from flask_cors import CORS
from flask import Response

load_dotenv()
app = Flask(__name__)
CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_DEFAULT_SENDER')

mail = Mail(app)


@app.route('/', methods=['GET'])
def index() -> Response:
    """ポートフォリオのサイトを表示する.

    Returns:
        Response: index.htmlに遷移.
    """
    return render_template('index.html')



@app.route('/contact', methods=['POST'])
def contact() -> Response:
    """フォームに入力した内容をメールとして送信する.

    Returns:
        Response: 処理を行ったあとindex.htmlに遷移.
    """
    name = request.form.get('name')
    email = request.form.get('email')
    contents = request.form.get('contents')
    
    if not name or not email or not contents:
        return render_template('index.html', error='すべての項目を入力してください.')

    try:
        msg = Message(subject='ポートフォリオからのお問い合わせ', recipients=[os.environ.get('MAIL_USERNAME')])
        msg.body = f'お名前: {name}\nメアド: {email}\n内容:\n {contents}'
        mail.send(msg)    
        return render_template('send.html')
    
    except Exception as e:
        return render_template('index.html', error=f'送信に失敗しました. {str(e)}')
    

if __name__ == '__main__':
    app.run()