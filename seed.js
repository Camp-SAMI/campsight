import chance from 'chance'

// pickset, shuffle

// Reseravatoin
// {
//     startTime: {
//         type: Sequelize.DATE,
//         allowNull: false
//     },
//     endTime: {
//         type: Sequelize.DATE,
//         allowNull: false
//     },
//     partyNumber: {
//         type: Sequelize.INTEGER,
//         defaultValue: 1
//     },
//     daysBooked: {
//         type: Sequelize.VIRTUAL,
//         get() {
//             let dates = [];
//             let currentDate = this.startTime;
//             while (currentDate <= this.endTime) {
//                 dates.push(new Date(currentDate));
//                 currentDate.setDate(currentDate.getDate() + 1);
//             }
//             return dates;
//         }
//     }
// });

const Chance = require('chance')
const chance = new Chance(95698435)

chance.mixin({
  reservation: () => ({
    startTime: chance.date(),
    endTime: chance.last(),
    partyNumber: chance.integer({min: 1, max: 7})
  })
})
