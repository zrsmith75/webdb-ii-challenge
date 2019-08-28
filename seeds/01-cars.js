exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "JKDL12323KN0KDJ334",
          make: "nissian",
          model: "fronter",
          mileage: 144098,
          transmission: "manual",
          title: "clear"
        },
        {
          vin: "JKFR128893KN0K94",
          make: "ford",
          model: "raptor",
          mileage: 23457,
          transmission: "auto"
        },
        {
          vin: "HJK4355KN0KHJJ45",
          make: "chevy",
          model: "cruse",
          mileage: 311011,
          transmission: "auto",
          title: "salvage"
        }
      ]);
    });
};
