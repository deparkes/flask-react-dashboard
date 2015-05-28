import os
from flask import Flask, render_template

#app = Flask(__name__, static_url_path='', static_folder='static')
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(port=int(os.environ.get('PORT', 3000)))
