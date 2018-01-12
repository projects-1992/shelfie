# Imports
import flask
import os
from werkzeug.utils import secure_filename    # Needed for image upload


# Flask location

SHELFY_BASE_PATH = os.path.realpath(__file__).split('/')[0]
print('SHELFY BASE PATH', SHELFY_BASE_PATH)




# Configure app
app = flask.Flask(__name__)





app.config.from_object(__name__) # Load config from thsie file (permit_generator.py)

app.config.update(dict(
SECRET_KEY = 'key',
USERNAME = 'admin',
PASSWORD = 'default'
))





# Register view blueprints
import shelfy.views


app.register_blueprint(shelfy.views.views)
