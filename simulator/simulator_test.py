from simulator import Simulator

BERLING_BOUNDING_BOX = (13.091992716067702, 52.33488609760638, 13.742786470433, 52.67626223889507)


sim = Simulator(BERLING_BOUNDING_BOX)
result = sim.simulate(100)

print(result['booking_distance_bins'])