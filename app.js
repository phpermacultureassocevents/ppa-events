const calendarGrid = document.querySelector("#calendar-grid");
const monthLabel = document.querySelector("#month-label");
const detailsTitle = document.querySelector("#details-title");
const detailsDate = document.querySelector("#details-date");
const detailsDescription = document.querySelector("#details-description");
const detailsLocation = document.querySelector("#details-location");
const detailsTime = document.querySelector("#details-time");
const detailsUrl = document.querySelector('#details-url')
const detailsRegistration = document.querySelector('#details-registration')

const events = [
  {
    title: "PermaKapihan - New Year's Resolution",
    description: "Another year, another kapihan! Let's talk about what our resolutions are this year. Free coffee, bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-01-10",
    endDate: "2027-01-10",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "Energy and Wellness Workshop",
    description: "Join us for a light and relaxing workshop on taking care of the body, mind, and nature.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-01-29",
    endDate: "2027-01-31",
    color: "#F59E0B",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan - Food",
    description: "Join us for a hearty discussion about food, and how Permaculture assures us we get a lot of it. Free coffee, bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-02-07",
    endDate: "2027-02-07",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "Basic Permaculture Design Course",
    description: "Learn Permaculture ethics and principles, experience designing with nature using your hand and mind, and slowly build your own project masterplan with us!",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-02-19",
    endDate: "2027-02-25",
    color: "#2563EB",
    time: "",
    url: "https://forms.gle/86LMhyDRM11FKUwZ7"
  },
  {
    title: "Food and Cooking Workshop",
    description: "Learn about food production and what we can do about it, and discover new ingredients and ways of cooking them",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-02-26",
    endDate: "2027-02-28",
    color: "#EA580C",
    time: "",
    url: ""
  },
  {
    title: "Advanced Permaculture Design Course",
    description: "Dive deep into preparing and implementing various Permaculture technologies. You must attend the Basic Permaculture Design Course before enrolling here!",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-03-05",
    endDate: "2027-03-12",
    color: "#7C3AED",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan – Open Topic",
    description: "Join us for a lighthearted usapan, tawanan, and kulitan. Free coffee, also get a free tour of the Ecohouse and the Permaculture principles and technologies applied to it! Bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-03-14",
    endDate: "2027-03-14",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "Trees during El Niño Seminar",
    description: "Join us as we discuss the role of trees as our country faces El Niño.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-03-19",
    endDate: "2027-03-21",
    color: "#16A34A",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan – Soil",
    description: "Join us for a light discussion about soil, how to build it, and how to care for it. Free coffee, bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-04-04",
    endDate: "2027-04-04",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "PermaCamp",
    description: "If you want to learn while relaxing and just being with nature, this is the perfect camp for you! Join us for a weekend of slow and mindful rest. Includes a quick introduction to Permaculture and a tour around the Permaculture site.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-04-09",
    endDate: "2027-04-11",
    color: "#DB2777",
    time: "",
    url: ""
  },
  {
    title: "Training of Trainers",
    description: "This is exclusively for Advanced Permaculture Design Course graduates only. Here, we develop the next generation of well-rounded educators who will teach and push Permaculture forward to more people.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-04-17",
    endDate: "2027-04-23",
    color: "#9333EA",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan – Urban Permaculture",
    description: "Being in the city never stopped anyone from practicing Permaculture! Join us for a light discussion about Urban Permaculture. Free coffee, bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-05-09",
    endDate: "2027-05-09",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "Social Permaculture Workshop",
    description: "Permaculture knowledge does not only apply to earth care, but also to people care. We invite you to a weekend of learning how to navigate yourself amongst the complex web of relationships with different people.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-05-14",
    endDate: "2027-05-16",
    color: "#0891B2",
    time: "",
    url: ""
  },
  {
    title: "Woodworking Workshop",
    description: "Get your hands ready as we learn how to build with wood!",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-05-28",
    endDate: "2027-05-30",
    color: "#92400E",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan – Open Topic",
    description: "Join us for a lighthearted usapan, tawanan, and kulitan. Free coffee, also get a free tour of the Ecohouse and the Permaculture principles and technologies applied to it! Bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-06-06",
    endDate: "2027-06-06",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "Bamboo Building Workshop",
    description: "Everyone's raving about bamboo; what's the fuzz? Learn all about bamboo and how to utilize it effectively for your projects.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-06-11",
    endDate: "2027-06-13",
    color: "#65A30D",
    time: "",
    url: ""
  },
  {
    title: "PermaCamp",
    description: "If you want to learn while relaxing and just being with nature, this is the perfect camp for you! Join us for a weekend of slow and mindful rest. Includes a quick introduction to Permaculture and a tour around the Permaculture site.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-06-25",
    endDate: "2027-06-27",
    color: "#DB2777",
    time: "",
    url: ""
  },
  {
    title: "Basic Permaculture Design Course",
    description: "Learn Permaculture ethics and principles, experience designing with nature using your hand and mind, and slowly build your own project masterplan with us!",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-07-02",
    endDate: "2027-07-08",
    color: "#2563EB",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan – Water",
    description: "Join us for a lighthearted discussion on everything about water, and we can do to keep our faucets and rivers flowing. Free coffee, bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-07-11",
    endDate: "2027-07-11",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "Water Management Workshop",
    description: "How does a Permaculture site apply water management? Learn the various techniques and applications in an established Permaculture site in Nueva Ecija.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-07-23",
    endDate: "2027-07-25",
    color: "#0891B2",
    time: "",
    url: ""
  },
  {
    title: "Rice and Food Crops Seminar",
    description: "How can we apply Permaculture in the ricefields and in our food production? Join us as we discover the answer in collaboration with our farmers.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-08-06",
    endDate: "2027-08-08",
    color: "#65A30D",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan - Open Topic",
    description: "Join us for a lighthearted usapan, tawanan, and kulitan. Free coffee, also get a free tour of the Ecohouse and the Permaculture principles and technologies applied to it! Bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-08-15",
    endDate: "2027-08-15",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "PermaCamp",
    description: "If you want to learn while relaxing and just being with nature, this is the perfect camp for you! Join us for a weekend of slow and mindful rest. Includes a quick introduction to Permaculture and a tour around the Permaculture site.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-08-27",
    endDate: "2027-08-29",
    color: "#DB2777",
    time: "",
    url: ""
  },
  {
    title: "Seed Saving Seminar",
    description: "What are the current issues surrounding seed saving, and what can we do about it? Learn practical tips and techniques on saving, selecting, and storing seeds, and discover our collective role in protecting our seed heritage.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-09-03",
    endDate: "2027-09-05",
    color: "#92400E",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan - Seed saving",
    description: "Join us for a lighthearted discussion on seed saving, and perhaps obtain some seeds from fellow attendees! Free coffee, bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-09-12",
    endDate: "2027-09-12",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "Basic Permaculture Design Course",
    description: "Learn Permaculture ethics and principles, experience designing with nature using your hand and mind, and slowly build your own project masterplan with us!",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-09-24",
    endDate: "2027-09-30",
    color: "#2563EB",
    time: "",
    url: ""
  },
  {
    title: "Advanced Permaculture Design Course",
    description: "Dive deep into preparing and implementing various Permaculture technologies. You must attend the Basic Permaculture Design Course before enrolling here!",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-10-01",
    endDate: "2027-10-07",
    color: "#7C3AED",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan - Open Topic",
    description: "Join us for a lighthearted usapan, tawanan, and kulitan. Free coffee, also get a free tour of the Ecohouse and the Permaculture principles and technologies applied to it! Bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-10-10",
    endDate: "2027-10-10",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "Animal Husbandry Workshop",
    description: "Learn how to keep your animals happy, healthy, and productive in the Permaculture way! Find out their behaviors and needs in order to let the system work on its own.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-11-22",
    endDate: "2027-11-24",
    color: "#16A34A",
    time: "",
    url: ""
  },
  {
    title: "Infrastructures Workshop",
    description: "How do we build a sustainable home? Know what it means to build something that suits to our needs, while applying the Permaculture principles and technologies.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-11-05",
    endDate: "2027-11-07",
    color: "#92400E",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan - Structures",
    description: "Join us for a lighthearted discussion on everything about water, and we can do to keep our faucets and rivers flowing. Free coffee, also get a free tour of the Ecohouse and the Permaculture principles and technologies applied to it! Bring some snacks to share, pay what you can",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-11-14",
    endDate: "2027-11-14",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "NATIONAL PERMACULTURE CONVERGENCE",
    description: "Connect with the vast network of Permaculture practitioners in our country! We expect to feature Permaculture farms and their products, a number of talks regarding Permaculture, and a celebration of what Permaculture has achieved and will achieve.",
    location: "To be announced!",
    startDate: "2027-11-25",
    endDate: "2027-11-28",
    color: "#BE123C",
    time: "",
    url: ""
  },
  {
    title: "PermaKapihan – Open Topic",
    description: "Join us for a lighthearted usapan, tawanan, and kulitan. Free coffee, also get a free tour of the Ecohouse and the Permaculture principles and technologies applied to it! Bring some snacks to share, pay what you can!",
    location: "Ecohouse (17 Hereford St, Concepcion Dos, Marikina)",
    startDate: "2027-12-05",
    endDate: "2027-12-05",
    color: "#0D9488",
    time: "10AM - 2PM",
    url: "https://forms.gle/GWp1ZtPi55Y4PBjo7"
  },
  {
    title: "Guilds Workshop",
    description: "Explore the concepts of guilds in Permaculture, and apply this concept into crop interplanting, picking the right component locations, establishing cooperatives, and many more. Guild your way to productivity!",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-12-10",
    endDate: "2027-12-12",
    color: "#65A30D",
    time: "",
    url: ""
  },
  // Student stays
  {
    title: "PRI-Ecodee School Partnership",
    description: "Selected students and faculty from Hong Kong will be staying to learn in PRI-Ecodee.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-02-27",
    endDate: "2027-03-06",
    color: "#636363",
    time: "",
    url: ""
  },
  {
    title: "Collaboration with Belgian Volunteers",
    description: "During this period, volunteers from Belgium will be staying and helping at PRI-Ecodee while learning and practicing Permaculture.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-06-30",
    endDate: "2027-07-31",
    color: "#636363",
    time: "",
    url: ""
  },
  {
    title: "Collaboration with French Volunteers",
    description: "During this period, volunteers from France under the Solaria group will be staying and helping at PRI-Ecodee while learning and practicing Permaculture.",
    location: "PRI-Ecodee (Ecodee - Permaculture Research Institute, Cabiao, Nueva Ecija)",
    startDate: "2027-07-10",
    endDate: "2027-08-16",
    color: "#434343",
    time: "",
    url: "asdasd"
  }
];

let visibleMonth = new Date();
visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long", month: "long", day: "numeric", year: "numeric"
});

function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function sameDate(a, b) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function eventsOn(date) {
  return events.filter(event => {
    const startDate = new Date(event.startDate + "T00:00:00");
    const endDate = new Date(event.endDate + "T00:00:00");

    // Compare calendar dates, including both the start and end dates.
    const currentDate = new Date(date);
    currentDate.setHours(0, 0, 0, 0);

    return currentDate >= startDate && currentDate <= endDate;
  });
}

function showEvent(event) {
  const range = event.startDate === event.endDate ? dateFormatter.format(parseLocalDate(event.startDate)) : `${dateFormatter.format(parseLocalDate(event.startDate))} – ${dateFormatter.format(parseLocalDate(event.endDate))}`;
  detailsTitle.textContent = event.title;
  detailsDate.textContent = `${range}${event.time ? " · " + event.time : ""}`;
  detailsDescription.textContent = event.description || "No description provided.";
  detailsLocation.textContent = event.location ? `Location: ${event.location}` : "";
  detailsTime.textContent = event.category ? `Category: ${event.category}` : "";

  if (event.url == "") {
    detailsRegistration.textContent = ""
  } else {
    detailsRegistration.textContent = "Registration Link:"
  }
  detailsUrl.href = event.url;
  detailsUrl.textContent = event.url;
  detailsUrl.style.display = "inline";

  openEventModal();
}

function renderCalendar() {
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  monthLabel.textContent = new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" }).format(visibleMonth);
  calendarGrid.replaceChildren();

  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = Math.ceil((startOffset + daysInMonth) / 7) * 7;
  const today = new Date();

  for (let index = 0; index < cells; index++) {
    const date = new Date(year, month, 1 - startOffset + index);
    const dayButton = document.createElement("button");
    dayButton.type = "button";
    dayButton.className = "day";
    if (date.getMonth() !== month) dayButton.classList.add("outside");
    if (sameDate(date, today)) dayButton.classList.add("today");
    dayButton.setAttribute("aria-label", dateFormatter.format(date));

    const number = document.createElement("span");
    number.className = "day-number";
    number.textContent = date.getDate();
    dayButton.append(number);

    const dayEvents = eventsOn(date);
    dayEvents.slice(0, 2).forEach(event => {
      const chip = document.createElement("span");
      chip.className = "event-chip";
      chip.textContent = event.title;
      chip.style.backgroundColor = event.color || "#3B82F6";
      chip.style.color = "#FFFFFF";
      dayButton.append(chip);
    });
    if (dayEvents.length > 2) {
      const more = document.createElement("span");
      more.className = "event-chip more";
      more.textContent = `+${dayEvents.length - 2} more`;
      dayButton.append(more);
    }

    if (dayEvents.length) {
      dayButton.title = dayEvents.map(event => event.title).join(", ");
      dayButton.addEventListener("click", () => {
        // If multiple events share a date, show the first one. All are listed below.
        showEvent(dayEvents[0]);
        if (dayEvents.length > 1) renderEventChoices(dayEvents);
      });
    } else {
      dayButton.addEventListener("click", () => {
        detailsTitle.textContent = "No events on this date";
        detailsDate.textContent = dateFormatter.format(date);
        detailsDescription.textContent = "Choose another date to view its events.";
        detailsLocation.textContent = "";
        detailsTime.textContent = "";
        detailsUrl.href = "";
        detailsUrl.textContent = "";
        clearEventChoices();
      });
    }
    calendarGrid.append(dayButton);
  }
}

function clearEventChoices() {
  document.querySelector("#event-choices")?.remove();
}

function renderEventChoices(dayEvents) {
  clearEventChoices();
  const choices = document.createElement("div");
  choices.id = "event-choices";
  choices.className = "event-choices";
  choices.style.cssText = "display:flex;flex-wrap:wrap;gap:8px;margin-top:16px";
  dayEvents.forEach(event => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "today-button";
    button.textContent = event.title;
    button.addEventListener("click", () => showEvent(event));
    choices.append(button);
  });
  document.querySelector("#event-details").append(choices);
}

document.querySelector("#prev-month").addEventListener("click", () => {
  let currentMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
  if (currentMonth.getFullYear() <= 2026 && currentMonth.getMonth() <= 8) {
    return;
  }
  visibleMonth = currentMonth
  renderCalendar();
});
document.querySelector("#next-month").addEventListener("click", () => {
  let currentMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
  if (currentMonth.getFullYear() >= 2028) {
    return;
  }
  visibleMonth = currentMonth
  renderCalendar();
});
document.querySelector("#today-button").addEventListener("click", () => {
  const now = new Date();
  visibleMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  renderCalendar();
});

// popup functions 
const eventModal = document.getElementById("event-modal");
const closeModalButton = document.getElementById("close-modal");
let previouslyFocusedElement = null;

function openEventModal() {
  previouslyFocusedElement = document.activeElement;

  eventModal.classList.remove("hidden");
  eventModal.classList.add("flex");
  //eventModal.setAttribute("aria-hidden", "false");

  closeModalButton.focus();
}

function closeEventModal() {
  if (previouslyFocusedElement?.isConnected) {
    previouslyFocusedElement.focus();
  } else {
    document.activeElement.blur();
  }

  eventModal.classList.add("hidden");
  eventModal.classList.remove("flex");
  //eventModal.setAttribute("aria-hidden", "true");
}

closeModalButton.addEventListener("click", closeEventModal);

// Close when clicking outside the modal box
eventModal.addEventListener("click", (event) => {
  if (event.target === eventModal) {
    closeEventModal();
  }
});

// Close when pressing Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !eventModal.classList.contains("hidden")) {
    closeEventModal();
  }
});

renderCalendar();