(function () {
  var root = document.documentElement;
  var themeBtn = document.querySelector("[data-theme]");
  function syncThemeLabel() {
    if (!themeBtn) return;
    var dark = root.classList.contains("dark");
    themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  syncThemeLabel();
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = !root.classList.contains("dark");
      root.classList.toggle("dark", next);
      try { localStorage.setItem("waxmy-theme", next ? "dark" : "light"); } catch (e) {}
      syncThemeLabel();
    });
  }

  var menuBtn = document.querySelector("[data-menu]");
  var menu = document.querySelector("[data-menu-panel]");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menu.hasAttribute("hidden");
      if (open) menu.removeAttribute("hidden");
      else menu.setAttribute("hidden", "");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  document.querySelectorAll("[data-filter]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach(function (other) {
        other.setAttribute("aria-selected", other === btn ? "true" : "false");
      });
      document.querySelectorAll("[data-use]").forEach(function (card) {
        var show = id === "all" || card.getAttribute("data-use") === id;
        if (show) card.removeAttribute("hidden");
        else card.setAttribute("hidden", "");
      });
    });
  });

  function mailto(fields) {
    var subject = fields.subject || "Acquisition Inquiry - waxmy.hair";
    var lines = [
      "Hello,",
      "",
      "I am interested in acquiring waxmy.hair.",
      fields.name ? "Name: " + fields.name : "",
      fields.email ? "Email: " + fields.email : "",
      fields.amount ? "Offer (USD): " + fields.amount : "",
      "",
      fields.note || "Please share the asking range and next steps.",
      "",
      "Best regards,",
      fields.name || "",
    ];
    return (
      "mailto:sales@desertrich.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines.join("\n"))
    );
  }

  document.querySelectorAll("form[data-offer]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      location.href = mailto({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        amount: String(data.get("amount") || ""),
        note: String(data.get("note") || ""),
        subject: form.getAttribute("data-subject") || "",
      });
    });
  });

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var done = function () {
        var prev = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(function () { btn.textContent = prev; }, 1600);
      };
      if (navigator.clipboard) {
        navigator.clipboard.writeText("sales@desertrich.com").then(done).catch(function () {});
      }
    });
  });

  var exit = document.querySelector("[data-exit]");
  if (exit) {
    var armed = false;
    setTimeout(function () {
      try { if (sessionStorage.getItem("waxmy-exit")) return; } catch (e) {}
      armed = true;
    }, 8000);
    document.addEventListener("mouseout", function (event) {
      if (!armed || event.clientY > 12) return;
      try { sessionStorage.setItem("waxmy-exit", "1"); } catch (e) {}
      armed = false;
      exit.removeAttribute("hidden");
    });
    exit.querySelectorAll("[data-exit-close]").forEach(function (btn) {
      btn.addEventListener("click", function () { exit.setAttribute("hidden", ""); });
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") exit.setAttribute("hidden", "");
    });
  }
})();
