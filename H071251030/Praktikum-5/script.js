
const toast = document.getElementById("toast");
const toastInfo = document.getElementById("info");
const toastMessage = document.getElementById("message");

const memberContainer = document.getElementById("members");
const assignmentContainer = document.getElementById("assignments");
const assignmentList = document.getElementById("assignmentList");

const searchInput = document.getElementById("searchInput");
const taskForm = document.getElementById("taskForm");
const taskTotal = document.getElementById("taskTotal");

const loaderMember = document.getElementById("loaderMember");
const loaderAssignment = document.getElementById("loaderAssignment");

let members = [];
let selectedMemberId = null;
let searchKeyword = "";

const showToast = (status, info, message, error = null) => {

  toastInfo.textContent = info;
  toastMessage.textContent = message;

  toastInfo.classList.remove("text-red-500", "text-green");
  toastMessage.classList.remove("text-red-500", "text-green");

  const color = status ? "text-green" : "text-red-500";

  toastInfo.classList.add(color);
  toastMessage.classList.add(color);

  toast.classList.replace("translate-y-0", "-translate-y-8");
  toast.classList.replace("opacity-0", "opacity-100");

  if (error) console.error(error);

  setTimeout(() => {
    toast.classList.replace("-translate-y-8", "translate-y-0");
    toast.classList.replace("opacity-100", "opacity-0");
  }, 3000);

};

const fetchMember = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Gagal mengambil data member");
  }

  const data = await res.json();
  return data.slice(0, 5);
};

const fetchAssignment = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`
  );

  if (!res.ok) {
    throw new Error("Gagal mengambil data tugas");
  }

  const data = await res.json();
  return data.slice(0, 8);
};

const getSelectedMember = () => {
  return members.find(member => member.id === selectedMemberId);
};

const renderMembers = () => {
  memberContainer.innerHTML = "";

  members.forEach((member, index) => {
    const button = document.createElement("button");

    button.textContent = `${index + 1}. ${member.name}`;

    button.className = `
            text-soft-pink hover:bg-soft-pink hover:text-background
            text-start pl-4 pr-8 py-4 cursor-pointer
            font-medium text-sm rounded-xl member
        `;

    if (member.id === selectedMemberId) {
      button.classList.remove("text-soft-pink");
      button.classList.add("bg-soft-pink", "text-background");
    }

    button.addEventListener("click", () => {
      selectedMemberId = member.id;
      searchKeyword = "";
      searchInput.value = "";

      renderMembers();
      showAssignments();
    });

    memberContainer.appendChild(button);
  });
};

const showAssignments = () => {
  const member = getSelectedMember();

  if (!member) return;

  document.getElementById("memberName").textContent = member.name;

  const filteredTasks = member.tasks.filter(task =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const completed = member.tasks.filter(task => task.completed).length;

  taskTotal.textContent =
    `Total tugas selesai: ${completed} / ${member.tasks.length}`;

  assignmentList.innerHTML = "";

  if (filteredTasks.length === 0) {
    assignmentList.innerHTML = `
            <p class="text-white/60 py-4">
                Tidak ada tugas ditemukan.
            </p>
        `;
  }

  filteredTasks.forEach(task => {
    const item = document.createElement("div");

    item.className = "list flex justify-between items-center gap-4 pb-3";

    const title = document.createElement("p");
    title.textContent = task.title;
    title.className = "text-white";

    if (task.completed) {
      // title.classList.replace("text-white", "text-green")
      title.classList.add("italic", "opacity-50");
    }

    const actions = document.createElement("div");
    actions.className = "flex justify-end items-center gap-2 shrink-0";

    const toggleBtn = document.createElement("button");

    toggleBtn.className = `
            toggle border border-slate-100/20
            hover:border-slate-100/40 text-background
            text-xl w-8 h-8 rounded-sm flex justify-center items-center cursor-pointer
            ${task.completed ? "bg-green" : "bg-transparent"}
        `;

    toggleBtn.innerHTML = task.completed
      ? '<i class="hgi hgi-stroke hgi-check"></i>'
      : '<i class="hgi hgi-stroke hgi-rounded"></i>';

    toggleBtn.addEventListener("click", () => {
      task.completed = !task.completed;
      showAssignments();
    });

    const deleteBtn = document.createElement("button");

    deleteBtn.className = `
            delete border border-slate-100/20
            hover:border-slate-100/40 bg-white/10
            text-red-400 text-xl w-8 h-8 rounded-sm
            flex justify-center items-center cursor-pointer
        `;

    deleteBtn.innerHTML =
      '<i class="hgi hgi-stroke hgi-trash"></i>';

    deleteBtn.addEventListener("click", () => {
      deleteAssignment(task.id);
    });

    actions.append(toggleBtn, deleteBtn);
    item.append(title, actions);
    assignmentList.appendChild(item);
  });

  loaderAssignment.classList.add("hidden");
  assignmentContainer.classList.remove("hidden");
  assignmentContainer.classList.add("flex");
};

taskForm.addEventListener("submit", e => {
  e.preventDefault();
  searchKeyword = searchInput.value.trim();
  showAssignments();
});

const addAssignment = (title) => {
  const member = getSelectedMember();

  if (!member) return;

  const newTask = {
    userId: member.id,
    id: member.tasks.length + 1,
    title: title,
    completed: false
  };

  member.tasks.push(newTask);

  searchKeyword = "";
  searchInput.value = "";

  showAssignments();
  console.log(members)

  showToast(true, "Berhasil!", "Tugas berhasil ditambahkan");
};

document.getElementById("tambah").addEventListener("click", () => {
  const title = searchInput.value.trim();

  if (!title) {
    showToast(
      false,
      "Gagal!",
      "Masukkan judul tugas terlebih dahulu"
    );
    return;
  }

  addAssignment(title);
});

const deleteAssignment = (taskId) => {
  const member = getSelectedMember();

  if (!member) return;

  member.tasks = member.tasks.filter(task => task.id !== taskId);

  showAssignments();

  showToast(true, "Berhasil!", "Tugas berhasil dihapus");
};

const init = async () => {
  try {
    members = await fetchMember()

    for (const member of members) {
      member.tasks = await fetchAssignment(member.id);
    }

    if (members.length > 0) {
      selectedMemberId = members[0].id;

      renderMembers();
      showAssignments();
    }

    showToast(true, "Berhasil!", "Data member berhasil dimuat");

  } catch (error) {
    showToast(
      false,
      "Gagal!",
      "Terjadi kesalahan saat memuat data",
      error
    );

  } finally {
    loaderMember.classList.replace("flex", "hidden");

    if (members.length > 0) {
      document.getElementById("member")
        .classList.replace("hidden", "flex");
    }

    loaderAssignment.classList.add("hidden");
  }
};

init();
