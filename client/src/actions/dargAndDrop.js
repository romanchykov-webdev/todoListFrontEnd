function dragAndDropAction({parentItem, dragLabel, dropLabel}) {

    // debugger
    // индекс первого и второго элементов
    const firstIndex = parentItem.labelCheckBox.findIndex(item => item.id === dragLabel.id);
    const secondIndex = parentItem.labelCheckBox.findIndex(item => item.id === dropLabel.id);

    // найдены ? оба элемента в массиве
    if (firstIndex !== -1 && secondIndex !== -1) {

        // Создать копию массива
        const updatedTodos = [...parentItem.labelCheckBox];

        // Удалить первый элемент из его текущей позиции
        const [removedElement] = updatedTodos.splice(firstIndex, 1);

        // Вставьте удаленный элемент в позицию после второго элемента.
        updatedTodos.splice(secondIndex , 0, removedElement);


        return {
            ...parentItem,
            labelCheckBox: updatedTodos,
        };
    }


    return parentItem;
}

export default dragAndDropAction;