from simulator import Simulator
from flask import Flask, jsonify
from flask_cors import CORS

BERLING_BOUNDING_BOX = (13.091992716067702, 52.33488609760638, 13.742786470433, 52.67626223889507)

app = Flask(__name__)
CORS(app)


@app.route("/simulate/<numberOfRequests>", methods=["GET"])
def getSimulationResults(numberOfRequests=10):
  numberOfRequests = int(numberOfRequests)
  simulator = Simulator(BERLING_BOUNDING_BOX)
  result = simulator.simulate(numberOfRequests)
  return result


if __name__ == '__main__':
  app.run(port=8090)