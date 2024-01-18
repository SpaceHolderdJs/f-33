window.onload = () => {
  const students = [
    {
      name: "Igor",
      img: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    },
    {
      name: "Olena",
      img: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    },
    {
      name: "Andryi",
      img: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    },
    {
      name: "Maya",
      img: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    },
  ];

  $("input.autocomplete").autocomplete({
    data: students.reduce((acc, student) => {
      const { name, img } = student;

      acc[name] = img;

      return acc;
    }, {}),
  });
};
