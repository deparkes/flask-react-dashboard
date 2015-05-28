#==============================================
# Simple test application using Flask and React. 
# Single dashboard page at root "/". Loads 
# JavaScript resources at bottom of page to 
# reduce page load time.
#==============================================
import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(port=int(os.environ.get('PORT', 3000)))
