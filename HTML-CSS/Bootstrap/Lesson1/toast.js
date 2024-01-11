const toasts = document.getElementsByClassName("toast");

for (const toast of [...toasts]) {
  new bootstrap.Toast(toast);
}

const toast = document.getElementById("toast");
const toastActivator = document.getElementById("toast-activator");

const bootstrapToast = bootstrap.Toast.getOrCreateInstance(toast);

toastActivator.onclick = () => {
  bootstrapToast.show();
};
