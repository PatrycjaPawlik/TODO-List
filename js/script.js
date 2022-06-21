{
    const tasks = [
        {
            content: "nauczyć się programowania",
            done: false,
        },
        {
            content: "zjeść śniadanie",
            done: true,
        },
    ];

    const addNewTask = (newTaskConent) => {
        tasks.push({
            content: newTaskConent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });

        });
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
              <li class="tasks_item js-task">
              <button class="tasks__button tasks__button--toggleDone js-toggleDone">
              ${task.done ? "✔" : ""}
              </button>
              <span class="tasks__content ${task.done ? "tasks__content--done" : ""}">
              ${task.content}
              </span>
              <button class="tasks__button tasks__button--remove js-remove">
                        🗑
              </button>
              </li>
            `;
        };

        document.querySelector(".js-tasks").innerHTML = htmlString

        bindEvents();

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskConent = document.querySelector(".js-newTask").value.trim();

        if (newTaskConent === "") {
            return;
        }

        addNewTask(newTaskConent);
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}