// const router = require('express').Router

// try {
//   const dbGalleryData = await FitnessPlan.findAll({
//     include: [
//       {
//         model: Workout,
//         attributes: ["filename", "description"],
//       },
//     ],
//   });
//   const fitplans = dbFitnessPlanData.map((fitplan) =>
//     fitplan.get({ plain: true })
//   );

//   req.session.save(() => {
//     if (req.session.countVisit) {
//       req.session.countVisit++;
//     } else {
//       req.session.countVisit = 1;
//     }
//     res.render("homepage", {
//       fitplans,
//       countVisit: req.session.countVisit,
//     });
//   });
// } catch (err) {
//   res.status(500).json(err);
// }
