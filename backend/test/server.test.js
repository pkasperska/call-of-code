const expect = require("chai").expect;
const should = require("chai").should();
const server = require("../server");

describe("server", () => {
  const cities = [
    {
      name: "Poznań",
      cityLat: "52.40692",
      cityLng: "16.92993"
    },
    {
      name: "Wrocław",
      cityLat: "51.1",
      cityLng: "17.03333"
    },
    {
      name: "Zielona Góra",
      cityLat: "51.93548",
      cityLng: "15.50643"
    }
  ];
  const currentPosition = { latitude: "51.73548", longitude: "15.20643" };

  describe("pickCityForLocation", () => {
    it("should return a string", () => {
      server.pickCityForLocation(currentPosition, cities).should.be.a("string");
    });
    it("should return nearest city according to distance", () => {
      expect(server.pickCityForLocation(currentPosition, cities)).to.equal(
        "Zielona Góra"
      );
    });
  });

  describe("countDistance", () => {
    it("should return number if city and current position are correct", () => {
      const city = { cityLng: "15.71702", cityLat: "51.80333" };
      server.countDistance(city, currentPosition).should.be.a("number");
    });
    it("should return NaN if argument not contain desired properties", () => {
      const city = { cityLat: "51.93548" };
      expect(server.countDistance(city, currentPosition)).to.be.NaN;
    });
    it("should return correct distance from current position to the city", () => {
      const city = cities[0];
      expect(server.countDistance(city, currentPosition)).to.be.equal(139.4616498591773);
    });
  });
});
