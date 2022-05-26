function renderWaterfall(rootNode, columnCount, elementGap) {
  let columns = [];
  for (let i = 0; i < columnCount; i++) {
    let div = document.createElement("div");
    div.classList.add("column");
    div.style.gap = elementGap + "px";
    columns.push(div);
  }

  let elArr = [];
  elArr.push(...rootNode.getElementsByClassName("el"));

  // for (let el of rootNode.getElementsByClassName("el")) {
  //   elArr.push(el);
  // }

  for (let el of elArr) {
    let shortestColumn = getShortestColumn(columns);
    shortestColumn.append(el);
  }

  let columnsContainer = document.createElement("section");
  columnsContainer.style.gap = elementGap + "px";
  columnsContainer.classList.add("section");

  for (let column of columns) {
    columnsContainer.append(column);
  }

  document.body.append(columnsContainer);

  function getShortestColumn(columns) {
    let indexOfShortest = 0;
    let minContentLength = getContentLength(columns[0]);

    for (let i = 0; i < columns.length; i++) {
      let curContentLength = getContentLength(columns[i]);
      if (curContentLength < minContentLength) {
        minContentLength = curContentLength;
        indexOfShortest = i;
      }
    }

    return columns[indexOfShortest];
  }

  function getContentLength(column) {
    let length = 0;
    for (let child of column.childNodes) {
      length += child.textContent.length;
    }
    return length;
  }
}

renderWaterfall(document.getElementsByClassName("root")[0], 3, 20);

