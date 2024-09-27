function toggleText(id) {
  let textContent = document.getElementById("text-content-" + id);
  let toggleBtn = document.querySelector(".toggle-btn[data-id='" + id + "']");

  let isExpanded = textContent.classList.toggle("expanded");

  toggleBtn.textContent = isExpanded ? "–" : "+";

  let allTextContents = document.querySelectorAll(".text-content");
  allTextContents.forEach(function(item) {
    if (item !== textContent) {
      item.classList.remove("expanded");
    }
  });

  let allToggleBtns = document.querySelectorAll(".toggle-btn");
  allToggleBtns.forEach(function(btn) {
    let id = btn.getAttribute("data-id");
    let content = document.getElementById("text-content-" + id);
    if (!content.classList.contains("expanded")) {
      btn.textContent = "+";
    }
  });
}
/*----------------------------------------------------------------------------------------------------*/


function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  const span = obj.querySelector('span');
  const range = end - start;
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(function () {
    current += increment;
    if (id === "projectsCounter") {
      span.innerHTML = current + "+";
    } else {
      span.innerHTML = current;
    }
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);

  span.style.color = "#F68C00";
}

// document.addEventListener("DOMContentLoaded", function() {
//   animateValue("projectsCounter", 0, 300, 2000);
//   animateValue("yearsCounter", 0, 12, 2000);
//   animateValue("areaCounter", 0, 34, 2000);
// });

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      let start = 0;
      let end = 0;
      switch (id) {
        case "projectsCounter":
          end = 300;
          break;
        case "yearsCounter":
          end = 12;
          break;
        case "areaCounter":
          end = 34;
          break;
        default:
          break;
      }
      animateValue(id, start, end, 2000);
      // observer.unobserve(entry.target);
    }
  });
}, options);

document.querySelectorAll('.total').forEach(counter => {
  observer.observe(counter);
});


/*----------------------------------------------------------------------------------------------------*/



function clearValue(input) {
  if (input.value === input.getAttribute("value")) {
    input.value = "";
  }
}

function resetValue(input) {
  if (input.value === "") {
    input.value = input.getAttribute("value");
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.navigation nav ul li a');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      links.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
/*----------------------------------------------------------------------------------------------------*/



function toggleArrow(arrow) {
  if (arrow.style.transform === 'rotate(-45deg)') {
    arrow.style.transform = 'rotate(0deg)';
    arrow.previousElementSibling.style.width = '316px';
  } else {
    arrow.style.transform = 'rotate(-45deg)';
    arrow.previousElementSibling.style.width = '652px';
  }
}
/*----------------------------------------------------------------------------------------------------*/



document.addEventListener('DOMContentLoaded', function() {
  const allLinks = document.querySelectorAll('.navigation a, .footer-nav a');

  function handleLinkClick(event) {
    const clickedLink = event.target;
    const href = clickedLink.getAttribute('href');

    const headerLink = document.querySelector('.navigation a[href="' + href + '"]');
    const footerLink = document.querySelector('.footer-nav a[href="' + href + '"]');

    allLinks.forEach(link => link.classList.remove('active'));
    headerLink.classList.add('active');
    footerLink.classList.add('active');
  }

  allLinks.forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });
});
/*----------------------------------------------------------------------------------------------------*/



const readMoreButtons = document.querySelectorAll('.read-more');
const hiddenTexts = document.querySelectorAll('.hidden-text');

readMoreButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    if (hiddenTexts[index].style.display === 'none' || hiddenTexts[index].style.display === '') {
      hiddenTexts[index].style.display = 'inline';
      button.style.display = 'none';
    } else {
      hiddenTexts[index].style.display = 'none';
      button.style.display = 'inline';
    }
  });
});
/*----------------------------------------------------------------------------------------------------*/



document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let formData = new FormData(this);

  fetch("submit_form.php", {
    method: "POST",
    body: formData
  })
    .then(response => {
      if (response.ok) {
        alert("Форма успешно отправлена!");
      } else {
        alert("Произошла ошибка при отправке формы.");
      }
    })
    .catch(error => {
      console.error("Ошибка:", error);
    });
});

let form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let inputs = form.querySelectorAll('input');

  inputs.forEach(function(input) {
    input.value = '';
  });

});
