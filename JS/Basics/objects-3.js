const likes = {
  "01.07.2020": { likes: 80, dislikes: 30 },
  "02.07.2020": { likes: 140, dislikes: 90 },
  "03.07.2020": { likes: 40, dislikes: 20 },
  "04.07.2020": { likes: 20, dislikes: 30 },
  "05.07.2020": { likes: 190, dislikes: 60 },
  "06.07.2020": { likes: 80, dislikes: 30 },
  "07.07.2020": { likes: 140, dislikes: 90 },
  "08.07.2020": { likes: 40, dislikes: 20 },
  "09.07.2020": { likes: 20, dislikes: 30 },
  "10.07.2020": { likes: 190, dislikes: 60 },
};

// Задача:
// порахувати загальну кількість likes за весь термін дат

function sol(obj) {
  let totalLikes = 0;

  for (const date in obj) {
    const { likes } = obj[date]; // get likes from each object
    totalLikes = totalLikes + likes;
  }

  console.log("totalLikes", totalLikes);
  return totalLikes;
}

const likesResult = sol(likes);

// Задача:
// порахувати загальну кількість dislikes за весь термін дат

// Задача:
// знайти дату з найбільшою кількістю likes

function sol2(obj) {
  let maxLikesDate = null;

  for (const date in obj) {
    const { likes } = obj[date];

    if (!maxLikesDate) {
      maxLikesDate = date;
    }

    if (obj[maxLikesDate].likes <= likes) {
      maxLikesDate = date;
    }
  }

  console.log(maxLikesDate, "maxLikesDate");
  return maxLikesDate;
}

sol2(likes);

// const likes = {
//   //maxLikesDate = "01.07.2020";
//   //obj["01.07.2020"].likes (80) <= likes
//   "01.07.2020": { likes: 80, dislikes: 30 },
//   // maxLikesDate = "01.07.2020";
//   // obj["01.07.2020"].likes (80) <= likes (140)
//   "02.07.2020": { likes: 140, dislikes: 90 },
//   //  maxLikesDate = "02.07.2020";
//   // obj["02.07.2020"].likes (140) <= likes (40)
//   "03.07.2020": { likes: 40, dislikes: 20 },
//   //  maxLikesDate = "02.07.2020";
//   // obj["02.07.2020"].likes (140) <= likes (20)
//   "04.07.2020": { likes: 20, dislikes: 30 },
//   "05.07.2020": { likes: 190, dislikes: 60 },
//   //  maxLikesDate = "05.07.2020";
//   "06.07.2020": { likes: 80, dislikes: 30 },
//   "07.07.2020": { likes: 140, dislikes: 90 },
//   "08.07.2020": { likes: 40, dislikes: 20 },
//   "09.07.2020": { likes: 20, dislikes: 30 },
//   "10.07.2020": { likes: 190, dislikes: 60 },
//   // maxLikesDate = "10.07.2020"
// };

// Задача:
// знайти дату з найбільшою кількістю dislikes

// Задача:
// повернути вибірку дат з діапазону
// sol3("02.07.2020", "04.07.2020", obj) =>
// {"02.07.2020": { likes: 140, dislikes: 90 },
// "03.07.2020": { likes: 40, dislikes: 20 },
// "04.07.2020": { likes: 20, dislikes: 30 },}

function sol3(stratDate, endDate, obj) {
  const result = {};

  const slicedStartDate = +stratDate.slice(0, 2);
  const slicedEndDate = +endDate.slice(0, 2);

  for (const date in obj) {
    const slicedDate = +date.slice(0, 2);

    if (slicedDate >= slicedStartDate && slicedDate <= slicedEndDate) {
      result[date] = obj[date];
    }
  }

  console.log(result, "result");
  return result;
}

sol3("02.07.2020", "04.07.2020", likes);
