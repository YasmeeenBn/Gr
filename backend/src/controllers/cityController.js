var City = require("../models/citySchema");
const mongoose = require("mongoose");

// get countries
exports.getCities = async (req, res, next) => {
  const { keyword } = req.params;
  try {
    const cities = await City.find({
      nomCommune: { $regex: new RegExp(keyword, "i") },
      // type:"metro"
    })
      .limit(100)
      .sort({ nomCommune: 1 });
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ error });
  }
};

// exports.getCitiesOutre = async (req, res, next) => {
//   const { keyword } = req.params;
//   try {
//     const cities = await City.find({
//       nomCommune: { $regex: new RegExp(keyword, "i") },
//       type:"outre"
//     })
//       .limit(100)
//       .sort({ nomCommune: 1 });
//     res.status(200).json(cities);
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };
