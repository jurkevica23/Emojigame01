from flask import Flask, rember_template, request, jsonify
from pathlib Path 
import json

base_dir = Path(__file__).resolve().parent
app = Flask(__name__, template_folder=str(base_dir / 'templates'), static_folder=str(base_dir / 'static'))                                                 