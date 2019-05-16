export const animateChoosenDog = (index, whichDogs, section) => {
  if (whichDogs) {
    hidePrevious(whichDogs);
  }
  const numOfColumns = section === 1 ? 4 : 3;
  const row = index < 5 || (index > 8 && index < 12) ? "top" : "bottom";
  const direction = [1, 2, 5, 6, 9, 10, 12, 13].includes(index)
    ? "right"
    : "left";

  const dog = document.querySelector(`#dog--slate-${index}`);
  //animates the clicked dog
  dog.classList.add(`choose-dog__${row}-row-${direction}`);
  const dogAbout = document.querySelector(
    `#dog--slate-${index} .dog--slate--description`
  );
  dogAbout.style.display = "block";

  //hides the surrounding pictures
  const first = direction === "right" ? index + 1 : index - 1;
  const second = row === "top" ? index + numOfColumns : index - numOfColumns;
  const third =
    index +
    (direction === "right" ? 1 : -1) +
    (row === "top" ? +numOfColumns : -numOfColumns);

  document.querySelector(`#dog--slate-${first}`).style.visibility = "hidden";
  document.querySelector(`#dog--slate-${second}`).style.visibility = "hidden";
  document.querySelector(`#dog--slate-${third}`).style.visibility = "hidden";
  return {
    chosen: { index, row, direction },
    hidden: { first, second, third }
  };
};
export const hidePrevious = whichDogs => {
  const dog = document.querySelector(`#dog--slate-${whichDogs.chosen.index}`);
  dog.classList.remove(
    `choose-dog__${whichDogs.chosen.row}-row-${whichDogs.chosen.direction}`
  );
  const dogAbout = document.querySelector(
    `#dog--slate-${whichDogs.chosen.index} .dog--slate--description`
  );
  dogAbout.style.display = "none";

  document.querySelector(
    `#dog--slate-${whichDogs.hidden.first}`
  ).style.visibility = "visible";
  document.querySelector(
    `#dog--slate-${whichDogs.hidden.second}`
  ).style.visibility = "visible";
  document.querySelector(
    `#dog--slate-${whichDogs.hidden.third}`
  ).style.visibility = "visible";
};
export const showDescription = index => {
  const dogAbout = document.querySelector(
    `#dog--slate-${index} .dog--slate--description`
  );
  dogAbout.style.display = "block";
};
