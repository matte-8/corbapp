
document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('notif-toggle');
  checkbox.checked = localStorage.getItem('notifiche') === 'true';
  checkbox.addEventListener('change', () => {
    localStorage.setItem('notifiche', checkbox.checked);
  });
});
