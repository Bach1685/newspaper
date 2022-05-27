function renderWaterfall(rootNode, columnCount, elementGap) {
  let columnsContainer = document.createElement("section");
  document.body.append(columnsContainer);

  let columns = creatColumns(columnCount);
  columnsContainer.append(...columns);

  Array.from(rootNode.getElementsByClassName("el")).forEach((el) =>
    getShortestColumn(columns).append(el)
  );

  columnsContainer.style.display = "flex";
  setGap(elementGap, columnsContainer, ...columns);
}

function creatColumns(columnCount) {
  let columns = [];
  for (let i = 0; i < columnCount; i++) {
    columns.push(creatColumn());
  }
  return columns;
}

function creatColumn() {
  let column = document.createElement("div");
  column.style.display = "flex";
  column.style.flexDirection = "column";
  return column;
}

function getShortestColumn(columns) {
  let indexOfShortest = 0;
  let minHeight = columns[0].offsetHeight;

  for (let i = 0; i < columns.length; i++) {
    if (columns[i].offsetHeight < minHeight) {
      minHeight = columns[i].offsetHeight;
      indexOfShortest = i;
    }
  }

  return columns[indexOfShortest];
}

function setGap(elementGap, ...tags) {
  tags.forEach((tag) => (tag.style.gap = elementGap + "px"));
}

renderWaterfall(document.querySelector("div.root"), 3, 20);
